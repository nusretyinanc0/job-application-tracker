# 💼 KariyerTakip — İş Başvurusu ve Süreç Yönetim Sistemi

Modern JavaScript (ReactJS + TypeScript) ve Tailwind CSS kullanılarak geliştirilmiş, iş başvurularınızı ve mülakat süreçlerinizi tek bir merkezden takip etmenizi sağlayan web uygulaması.

## 📸 Proje Ekran Görüntüsü

> **Not:** Projeyi çalıştırdıktan sonra aldığınız ekran görüntüsünü `screenshot.png` adıyla ana dizine ekleyebilir veya aşağıdaki görsel yolunu güncelleyebilirsiniz.

![Proje Ekran Görüntüsü]("C:\Users\nusre\OneDrive\Masaüstü\iş takip atılacak dosyalar\screenshot.jpeg")

---

## 🎯 Proje Yönergesi Karşılıkları (CRUD & Mimari)

Bu proje, eğitim yönergesindeki tüm adımları eksiksiz karşılayacak şekilde tasarlanmıştır:

- **Modern JS Çerçevesi:** React 19 + TypeScript (Vite ile)
- **CSS Çerçevesi:** Tailwind CSS
- **Veri Saklama:** `localStorage` (Sayfa yenilense bile veriler kaybolmaz)
- **Klasör Yapısı:**
  - `src/Interfaces/` -> TypeScript veri modelleri ve tipleri (`JobApplication.ts`)
  - `src/Components/` -> Tekrar kullanılabilir arayüz bileşenleri (`Header`, `StatCards`, `FilterBar`, `ApplicationCard`, `ApplicationModal`)
  - `src/Pages/` -> Sayfa görünümleri ve CRUD mantığı (`Dashboard.tsx`)
- **CRUD İşlemleri:**
  1. **Ekle (Create):** "Yeni Başvuru Ekle" butonu ile şirket, pozisyon, çalışma modeli, maaş beklentisi ve mülakat notu ekleme.
  2. **Listele (Read):** Başvuruları durumlarına, çalışma modellerine ve arama kelimesine göre anlık filtreleyerek listeleme + Özet İstatistik Kartları.
  3. **Güncelle (Update):** Kart üzerindeki durum rozetinden hızlı durum değiştirme veya "Düzenle" modalı ile tüm başvuru bilgilerini güncelleme.
  4. **Sil (Delete):** İstenmeyen başvuruları listeden ve LocalStorage'dan silme.

---

## 🚀 Kurulum ve Çalıştırma

Projeyi bilgisayarınızda çalıştırmak için:

```bash
# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev

# Canlıya (Production) alma çıktısı üretin
npm run build
```

## 🌐 Canlı Yayın (Netlify) Kurulumu

1. Bu projeyi GitHub hesabınızda **Public** bir repository'e yükleyin.
2. [Netlify](https://www.netlify.com/) hesabınıza giriş yapıp **"Add new site" -> "Import an existing project"** seçeneğine tıklayın.
3. GitHub reponuzu seçin:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. **Deploy** butonuna basın! Ayrıca dilerseniz `npm run build` sonrası oluşan `dist` klasörünü doğrudan [Netlify Drop](https://app.netlify.com/drop) ekranına sürükleyip bırakarak saniyeler içinde yayınlayabilirsiniz.
