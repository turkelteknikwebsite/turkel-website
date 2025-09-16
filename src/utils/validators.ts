import { z } from 'zod';

// Contact form validation schema
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Ad en az 2 karakter olmalıdır')
    .max(100, 'Ad en fazla 100 karakter olabilir')
    .regex(/^[a-zA-ZğüşıöçĞÜŞİÖÇ\s]+$/, 'Ad sadece harf içerebilir'),
  
  email: z
    .string()
    .email('Geçerli bir e-posta adresi giriniz')
    .max(255, 'E-posta adresi çok uzun'),
  
  phone: z
    .string()
    .optional()
    .refine((phone) => {
      if (!phone) return true;
      return /^[\+]?[0-9\s\-\(\)]{10,20}$/.test(phone);
    }, 'Geçerli bir telefon numarası giriniz'),
  
  company: z
    .string()
    .optional()
    .refine((company) => {
      if (!company) return true;
      return company.length <= 200;
    }, 'Şirket adı çok uzun'),
  
  subject: z
    .string()
    .min(5, 'Konu en az 5 karakter olmalıdır')
    .max(200, 'Konu en fazla 200 karakter olabilir'),
  
  message: z
    .string()
    .min(10, 'Mesaj en az 10 karakter olmalıdır')
    .max(2000, 'Mesaj en fazla 2000 karakter olabilir'),
  
  // Honeypot field (should be empty)
  website: z.string().max(0, 'Spam detected'),
  
  // Timestamp for timing check
  timestamp: z.number().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Rate limiting helper
export class RateLimiter {
  private requests: Map<string, number[]> = new Map();
  private maxRequests: number;
  private windowMs: number;

  constructor(maxRequests = 10, windowMs = 10 * 60 * 1000) { // 10 requests per 10 minutes
    this.maxRequests = maxRequests;
    this.windowMs = windowMs;
  }

  isAllowed(identifier: string): boolean {
    const now = Date.now();
    const requests = this.requests.get(identifier) || [];
    
    // Remove old requests outside the window
    const validRequests = requests.filter(time => now - time < this.windowMs);
    
    if (validRequests.length >= this.maxRequests) {
      return false;
    }
    
    // Add current request
    validRequests.push(now);
    this.requests.set(identifier, validRequests);
    
    return true;
  }

  getRemainingRequests(identifier: string): number {
    const now = Date.now();
    const requests = this.requests.get(identifier) || [];
    const validRequests = requests.filter(time => now - time < this.windowMs);
    
    return Math.max(0, this.maxRequests - validRequests.length);
  }
}

// Sanitize string input
export function sanitizeString(input: string): string {
  return input
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/[<>&"']/g, '') // Remove potentially dangerous characters
    .trim();
}

// Validate timing (minimum 3 seconds)
export function validateTiming(timestamp?: number): boolean {
  if (!timestamp) return false;
  const now = Date.now();
  const timeDiff = now - timestamp;
  return timeDiff >= 3000; // Minimum 3 seconds
}
