import type { APIRoute } from 'astro';

// For development, we'll use a simple response
// In production, this will be handled by Netlify Functions
import nodemailer from 'nodemailer';
import { contactFormSchema, RateLimiter, sanitizeString, validateTiming } from '../../utils/validators';

// Rate limiter instance
const rateLimiter = new RateLimiter(
  parseInt(import.meta.env.RATE_LIMIT_MAX || '10'),
  10 * 60 * 1000 // 10 minutes
);

// Create nodemailer transporter
function createTransporter() {
  return nodemailer.createTransporter({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: import.meta.env.GMAIL_SENDER_ADDRESS,
      clientId: import.meta.env.GOOGLE_CLIENT_ID,
      clientSecret: import.meta.env.GOOGLE_CLIENT_SECRET,
      refreshToken: import.meta.env.GOOGLE_REFRESH_TOKEN,
    },
  });
}

// Verify reCAPTCHA/hCaptcha
async function verifyCaptcha(token: string, type: 'recaptcha' | 'hcaptcha'): Promise<boolean> {
  if (!token) return false;
  
  const secret = type === 'recaptcha' 
    ? import.meta.env.RECAPTCHA_SECRET 
    : import.meta.env.HCAPTCHA_SECRET;
    
  if (!secret) return true; // Skip if not configured
  
  const url = type === 'recaptcha'
    ? 'https://www.google.com/recaptcha/api/siteverify'
    : 'https://hcaptcha.com/siteverify';
  
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${secret}&response=${token}`,
    });
    
    const data = await response.json();
    return data.success === true;
  } catch {
    return false;
  }
}

export const POST: APIRoute = async ({ request, clientAddress }) => {
  try {
    // Check rate limiting
    const clientIP = clientAddress || 'unknown';
    if (!rateLimiter.isAllowed(clientIP)) {
      return new Response(
        JSON.stringify({ 
          ok: false, 
          error: 'Çok fazla istek gönderildi. Lütfen daha sonra tekrar deneyin.',
          remainingRequests: rateLimiter.getRemainingRequests(clientIP)
        }),
        { 
          status: 429,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Parse and validate request body
    const body = await request.json();
    
    // Validate with Zod
    const validationResult = contactFormSchema.safeParse(body);
    if (!validationResult.success) {
      return new Response(
        JSON.stringify({ 
          ok: false, 
          error: 'Form verileri geçersiz.',
          details: validationResult.error.errors
        }),
        { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    const formData = validationResult.data;

    // Check honeypot (website field should be empty)
    if (formData.website) {
      return new Response(
        JSON.stringify({ ok: false, error: 'Spam detected.' }),
        { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Check timing (minimum 3 seconds)
    if (!validateTiming(formData.timestamp)) {
      return new Response(
        JSON.stringify({ ok: false, error: 'Form çok hızlı gönderildi.' }),
        { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Verify captcha if configured
    if (body.captchaToken) {
      const captchaType = import.meta.env.RECAPTCHA_SECRET ? 'recaptcha' : 'hcaptcha';
      const captchaValid = await verifyCaptcha(body.captchaToken, captchaType);
      
      if (!captchaValid) {
        return new Response(
          JSON.stringify({ ok: false, error: 'Captcha doğrulaması başarısız.' }),
          { 
            status: 400,
            headers: { 'Content-Type': 'application/json' }
          }
        );
      }
    }

    // Sanitize form data
    const sanitizedData = {
      name: sanitizeString(formData.name),
      email: sanitizeString(formData.email),
      phone: formData.phone ? sanitizeString(formData.phone) : '',
      company: formData.company ? sanitizeString(formData.company) : '',
      subject: sanitizeString(formData.subject),
      message: sanitizeString(formData.message),
    };

    // Create email content
    const emailSubject = `[Website İletişim] ${sanitizedData.subject} — ${sanitizedData.name}`;
    
    const textContent = `
Yeni İletişim Formu Mesajı

Ad: ${sanitizedData.name}
E-posta: ${sanitizedData.email}
Telefon: ${sanitizedData.phone || 'Belirtilmemiş'}
Şirket: ${sanitizedData.company || 'Belirtilmemiş'}
Konu: ${sanitizedData.subject}

Mesaj:
${sanitizedData.message}

---
Gönderim Zamanı: ${new Date().toLocaleString('tr-TR')}
IP Adresi: ${clientIP}
    `.trim();

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Yeni İletişim Formu Mesajı</title>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #0A2F5A; color: white; padding: 20px; text-align: center; }
    .content { padding: 20px; background: #f9f9f9; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #0A2F5A; }
    .message { background: white; padding: 15px; border-left: 4px solid #E67510; }
    .footer { padding: 15px; font-size: 12px; color: #666; text-align: center; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Yeni İletişim Formu Mesajı</h1>
    </div>
    
    <div class="content">
      <div class="field">
        <span class="label">Ad:</span> ${sanitizedData.name}
      </div>
      
      <div class="field">
        <span class="label">E-posta:</span> 
        <a href="mailto:${sanitizedData.email}">${sanitizedData.email}</a>
      </div>
      
      ${sanitizedData.phone ? `
      <div class="field">
        <span class="label">Telefon:</span> 
        <a href="tel:${sanitizedData.phone}">${sanitizedData.phone}</a>
      </div>
      ` : ''}
      
      ${sanitizedData.company ? `
      <div class="field">
        <span class="label">Şirket:</span> ${sanitizedData.company}
      </div>
      ` : ''}
      
      <div class="field">
        <span class="label">Konu:</span> ${sanitizedData.subject}
      </div>
      
      <div class="field">
        <span class="label">Mesaj:</span>
        <div class="message">${sanitizedData.message.replace(/\n/g, '<br>')}</div>
      </div>
    </div>
    
    <div class="footer">
      Gönderim Zamanı: ${new Date().toLocaleString('tr-TR')}<br>
      IP Adresi: ${clientIP}
    </div>
  </div>
</body>
</html>
    `.trim();

    // Send email
    const transporter = createTransporter();
    
    await transporter.sendMail({
      from: `"Türkel Global Website" <${import.meta.env.GMAIL_SENDER_ADDRESS}>`,
      to: import.meta.env.MAIL_TO,
      replyTo: sanitizedData.email,
      subject: emailSubject,
      text: textContent,
      html: htmlContent,
    });

    return new Response(
      JSON.stringify({ 
        ok: true, 
        message: 'Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.' 
      }),
      { 
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );

  } catch (error) {
    console.error('Mail sending error:', error);
    
    return new Response(
      JSON.stringify({ 
        ok: false, 
        error: 'Mesaj gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.' 
      }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
};

// Only allow POST requests
export const GET: APIRoute = () => {
  return new Response(
    JSON.stringify({ error: 'Method not allowed' }),
    { 
      status: 405,
      headers: { 'Content-Type': 'application/json' }
    }
  );
};
