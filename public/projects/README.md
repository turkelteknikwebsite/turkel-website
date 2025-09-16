# Proje Yönetimi Sistemi

Bu klasör, website'deki projeleri yönetmek için kullanılır.

## Klasör Yapısı

```
public/projects/
├── projects-data.json          # Tüm proje verileri
├── README.md                   # Bu dosya
├── mebel2022/                  # Proje klasörü
│   ├── main.jpg               # Ana görsel
│   ├── image1.jpg             # Ek görseller
│   ├── image2.jpg
│   ├── image3.jpg
│   └── image4.jpg
└── [diğer projeler]/
```

## Yeni Proje Ekleme

### 1. Proje Klasörü Oluştur
```bash
mkdir public/projects/yeni-proje-id
```

### 2. Görselleri Ekle
- `main.jpg` - Ana görsel (400x300px önerilen)
- `image1.jpg`, `image2.jpg`, vb. - Ek görseller

### 3. JSON Dosyasını Güncelle
`public/projects/projects-data.json` dosyasını açın ve yeni projeyi ekleyin:

```json
{
  "id": "yeni-proje-id",
  "title": "Proje Başlığı",
  "fairName": "Fuar Adı",
  "location": "Şehir, Ülke",
  "date": "2024",
  "company": "Şirket Adı",
  "standType": "Stant Tipi",
  "category": "kategori-adi",
  "description": "Proje açıklaması",
  "mainImage": "/projects/yeni-proje-id/main.jpg",
  "images": [
    "/projects/yeni-proje-id/image1.jpg",
    "/projects/yeni-proje-id/image2.jpg",
    "/projects/yeni-proje-id/image3.jpg",
    "/projects/yeni-proje-id/image4.jpg"
  ],
  "featured": false
}
```

## Kategoriler

Mevcut kategoriler:
- `ozel-dekor` - Özel Dekor Stant
- `premium-moduler` - Premium Modüler Stant
- `premium-ahsap` - Premium Ahşap Stant
- `grup-stant` - Grup Stant

## Görsel Gereksinimleri

- **Ana Görsel (main.jpg)**: 400x300px (16:9 oran)
- **Ek Görseller**: Herhangi bir boyut (otomatik resize)
- **Format**: JPG, PNG
- **Kalite**: Web için optimize edilmiş

## Örnek Proje Ekleme

1. **Klasör oluştur:**
   ```bash
   mkdir public/projects/expo2024
   ```

2. **Görselleri ekle:**
   - `public/projects/expo2024/main.jpg`
   - `public/projects/expo2024/image1.jpg`
   - `public/projects/expo2024/image2.jpg`

3. **JSON'a ekle:**
   ```json
   {
     "id": "expo2024",
     "title": "Expo 2024",
     "fairName": "Uluslararası Expo",
     "location": "İstanbul, Türkiye",
     "date": "2024",
     "company": "Örnek Şirket",
     "standType": "Özel Dekor Stant",
     "category": "ozel-dekor",
     "description": "2024 yılında gerçekleştirilen özel expo projesi",
     "mainImage": "/projects/expo2024/main.jpg",
     "images": [
       "/projects/expo2024/image1.jpg",
       "/projects/expo2024/image2.jpg"
     ],
     "featured": true
   }
   ```

## Proje Silme

1. Proje klasörünü sil: `rm -rf public/projects/proje-id`
2. JSON dosyasından proje kaydını sil

## Önemli Notlar

- Proje ID'leri benzersiz olmalı
- Görsel yolları doğru olmalı
- JSON formatına dikkat edin (virgül, tırnak işaretleri)
- Değişiklikler otomatik olarak website'de görünür
