<div align="center">

# 💼 KariyerTakip — İş Başvurusu ve Süreç Yönetim Sistemi

**İş başvurularınızı, mülakat süreçlerinizi ve kariyer fırsatlarınızı tek bir merkezden yönetebileceğiniz modern web uygulaması.**

![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4.0-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)

</div>

---

## 📖 Proje Hakkında

**KariyerTakip**, iş arama sürecindeki adayların başvurdukları şirketleri, pozisyonları, çalışma modellerini ve mülakat aşamalarını karmaşadan uzak, düzenli ve görsel bir arayüzle takip etmelerini sağlayan bir **Frontend CRUD (Create, Read, Update, Delete)** projesidir.

Modern web geliştirme standartlarına uygun olarak **React**, **TypeScript** ve **Tailwind CSS** ile geliştirilmiş olup; verileri tarayıcının **`localStorage`** alanında güvenle saklar.


---

## ✨ Temel Özellikler (CRUD İşlemleri)

- **➕ Yeni Başvuru Ekleme (Create):** Şirket adı, pozisyon, konum, çalışma modeli (*Uzaktan, Hibrit, Ofis*), başvuru durumu, maaş beklentisi, ilan linki ve süreç notları ile yeni kayıt oluşturma.
- **📋 Gelişmiş Listeleme ve Filtreleme (Read):**
  - Şirket adı, pozisyon veya şehre göre **anlık arama (Live Search)**.
  - Başvuru durumuna (*Başvuruldu, Mülakat, Teklif Alındı, Reddedildi*) ve çalışma modeline göre çoklu filtreleme.
  - Süreçlerin genel durumunu gösteren **dinamik istatistik kartları**.
- **✏️ Başvuru Güncelleme (Update):**
  - Kart üzerindeki durum menüsünden **tek tıkla hızlı durum güncelleme**.
  - Düzenleme penceresi (Modal) üzerinden mevcut başvurunun tüm detaylarını ve mülakat notlarını güncelleme.
- **🗑️ Başvuru Silme (Delete):** İptal edilen veya geçerliliğini yitiren başvuruları listeden ve yerel depolamadan kaldırma.
- **💾 Kalıcı Veri Yönetimi (LocalStorage):** Sayfa yenilense veya tarayıcı kapatılsa dahi veriler kaybolmaz; ilk kullanımda test edilebilmesi için hazır örnek verilerle (Demo Data) birlikte gelir.

---

## 🗂️ Proje Mimari ve Klasör Yapısı

Proje, sürdürülebilir ve modüler bir yazılım mimarisi için `Components`, `Pages` ve `Interfaces` katmanlarına ayrılmıştır:

```text
job-application-tracker/
├── public/
├── src/
│   ├── Components/              # Tekrar kullanılabilir UI bileşenleri
│   │   ├── ApplicationCard.tsx  # Başvuru detay kartı, hızlı durum seçici ve aksiyonlar
│   │   ├── ApplicationModal.tsx # Ekleme ve güncelleme form modalı
│   │   ├── FilterBar.tsx        # Arama çubuğu, durum ve çalışma modeli filtreleri
│   │   ├── Header.tsx           # Üst navigasyon ve aksiyon butonları
│   │   └── StatCards.tsx        # Dinamik özet istatistik kartları
│   ├── Interfaces/              # TypeScript veri modelleri ve tip tanımlamaları
│   │   └── JobApplication.ts    # JobApplication, ApplicationStatus, WorkMode tipleri
│   ├── Pages/                   # Sayfa görünümleri ve state yönetimi
│   │   └── Dashboard.tsx        # Ana sayfa, CRUD operasyonları ve LocalStorage senkronizasyonu
│   ├── App.tsx                  # Kök bileşen
│   ├── main.tsx                 # Uygulama giriş noktası
│   └── index.css                # Tailwind CSS yapılandırması
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🛠️ Kullanılan Teknolojiler

| Teknoloji | Açıklama |
| :--- | :--- |
| **React 19** | Bileşen tabanlı kullanıcı arayüzü kütüphanesi (`useState`, `useEffect`, `useMemo` Hooks) |
| **TypeScript** | Tip güvenliği ve `Interfaces` tabanlı veri modelleme |
| **Tailwind CSS** | Modern, duyarlı (responsive) ve hızlı arayüz tasarımı |
| **Vite** | Yeni nesil, yüksek performanslı frontend derleme aracı |
| **Lucide React** | Modern ve tutarlı vektörel ikon seti |
| **Web Storage API** | Verilerin istemci tarafında kalıcı olarak saklanması (`localStorage`) |

---

## 🚀 Kurulum ve Çalıştırma

Projeyi kendi bilgisayarınızda yerel olarak çalıştırmak için aşağıdaki adımları izleyin:

```bash
# 1. Projeyi klonlayın
git clone https://github.com/KULLANICI_ADINIZ/REPO_ADINIZ.git

# 2. Proje dizinine gidin
cd REPO_ADINIZ

# 3. Gerekli bağımlılıkları yükleyin
npm install

# 4. Geliştirme sunucusunu başlatın
npm run dev
```

Tarayıcınızda `http://localhost:5173` adresine giderek uygulamayı görüntüleyebilirsiniz.

### 📦 Canlıya Alma (Production Build)

```bash
npm run build
```
Bu komut, yayınlanmaya hazır optimize edilmiş dosyaları `dist/` klasörü içerisine oluşturur.

---



<div align="center">
  <sub>Modern Web Geliştirme & JavaScript Projesi kapsamında geliştirilmiştir.</sub>
</div>
