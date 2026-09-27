# 🏛️ AURUM | Ultra-Luxury Dubai Real Estate Web Application

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

Aplikasi web showcase properti dan residensial ultra-mewah di Dubai, dirancang dengan standar visual kelas atas (*Awwwards / FWA inspired aesthetic*). Proyek ini memadukan estetika arsitektur kontemporer, efek interaktif dinamis, serta alur pengalaman pengguna premium bagi investor global (*High-Net-Worth Individuals*).

---

## ✨ Fitur Utama (Key Features)

### 1. 💱 Real-Time Multi-Currency Converter
- Mengonversi nilai properti secara instan ke dalam 3 mata uang utama:
  - **AED** (Dirham Uni Emirat Arab)
  - **USD** (Dolar Amerika Serikat)
  - **IDR** (Rupiah Indonesia)
- Menggunakan state dinamis yang otomatis memperbarui seluruh katalog dan modal detail unit.

### 2. 🎴 Interactive Stacking Portfolio Cards
- Menampilkan portofolio residensial dengan efek tumpuk (*sticky stack effect*).
- Dilengkapi filter kategori dinamis:
  - **Semua Koleksi**
  - **Tepi Pantai** (*The Palm Residence*)
  - **Pusat Kota** (*Downtown Oasis*)
  - **Puncak Pegunungan** (*Hatta Peak*)
- Efek *hover zoom image* dan kartu spesifikasi ringkas (luas area, kamar, kapasitas garasi supercar).

### 3. 🔍 Unit Inspection Modal (`PropertyModal`)
- Galeri foto resolusi tinggi dengan *thumbnail switcher* multi-sudut.
- Tabel spesifikasi arsitektur mendalam: Luas Tanah, Luas Bangunan ($m^2$ & sq.ft), Master Suites, Garasi Tertutup, dan Status Legalitas (*100% Freehold*).
- Aksi unduh brosur privat & tombol pemesanan *Private Viewing*.

### 4. 🔒 VIP Private Office & Consultation Flow (`VipModal`)
- Formulir pendaftaran calon investor VIP (*lead capture*).
- Menampung informasi anggaran alokasi investasi dan format pertemuan (Virtual Suite / Dubai DIFC / Jakarta Private Lounge).
- Layar konfirmasi terintegrasi dengan tautan langsung ke **WhatsApp Concierge**.

### 5. 🎨 Aesthetic & Luxury Micro-Interactions
- Palette warna eksklusif: *Stone Concrete* (`#E3E1DC`), *Architectural Dark* (`#121212`), *Deep Arabian Moss* (`#374336`), dan *Muted Dubai Gold* (`#C9A86A`).
- Overlay tekstur *film grain noise* dinamis untuk visual sinematik.
- Tipografi editorial premium menggunakan **Syncopate** dan **Manrope** dari Google Fonts.
- Transisi *glassmorphism* dan *mix-blend-difference* pada navigasi.

---

## 🛠️ Tech Stack & Ekosistem

| Lapisan | Teknologi | Penjelasan |
| :--- | :--- | :--- |
| **Framework** | **React 19** | Komponen berbasis fungsi dengan Hooks modern (`useState`, `useEffect`) |
| **Build Tool** | **Vite 8** | Bundler ultra-cepat dengan Hot Module Replacement (HMR) |
| **Styling** | **Tailwind CSS + CSS Variables** | Desain fleksibel dengan token warna kustom dan transisi halus |
| **Icons** | **Lucide React** | Ikonografi minimalis dan elegan |
| **Deployment Ready** | **Vercel / Netlify** | Konfigurasi SPA siap rilis |

---

## 📁 Struktur Direktori (Project Structure)

```bash
aurum-react/
├── public/                 # Aset statis & favicon
├── src/
│   ├── components/         # Komponen UI modular
│   │   ├── Navbar.jsx          # Header, currency selector, & mobile drawer
│   │   ├── Hero.jsx            # Banner visual, stats, & CTA
│   │   ├── Philosophy.jsx      # Narasi brand "Di Balik Cakrawala"
│   │   ├── ResidenceStack.jsx  # Stacking cards & category filters
│   │   ├── PropertyModal.jsx   # Modal inspeksi detail unit & galeri
│   │   ├── PrivateOffice.jsx   # Keunggulan investasi Dubai & Golden Visa
│   │   ├── VipModal.jsx        # Formulir reservasi VIP & WhatsApp hook
│   │   └── Footer.jsx          # Parallax sticky footer & informasi regulasi
│   ├── data/
│   │   └── residences.js       # Mock dataset properti, spek teknis, & kurs
│   ├── App.jsx             # Root layout & state coordinator
│   ├── index.css           # Design tokens, keyframes, & noise overlay
│   └── main.jsx            # Entry point aplikasi
├── index.html              # Template HTML dengan Google Fonts & SEO tags
├── package.json            # Daftar dependensi & npm scripts
└── README.md               # Dokumentasi proyek
```

---

## 🚀 Panduan Menjalankan Proyek Secara Lokal

### Prasyarat
- [Node.js](https://nodejs.org/) (versi 18 ke atas disarankan)
- Git

### Langkah Instalasi

1. **Clone repository ini:**
   ```bash
   git clone https://github.com/username-anda/aurum-dubai-realestate.git
   cd aurum-dubai-realestate
   ```

2. **Install dependensi:**
   ```bash
   npm install
   ```

3. **Jalankan development server:**
   ```bash
   npm run dev
   ```
   Buka peramban Anda di `http://localhost:5173`.

4. **Build untuk produksi:**
   ```bash
   npm run build
   ```
   Hasil build siap saji akan berada di folder `dist/`.

---

## 🌐 Panduan Deployment (Publikasi Online Gratis)

### Opsi A: Deploy ke Vercel (Sangat Direkomendasikan)
1. Buat akun di [Vercel](https://vercel.com).
2. Hubungkan repository GitHub Anda.
3. Vercel akan otomatis mendeteksi **Vite Framework**.
4. Klik **Deploy** — website Anda akan aktif dalam hitungan detik dengan domain `https://aurum-dubai.vercel.app`.

### Opsi B: Deploy ke Netlify
1. Buat akun di [Netlify](https://netlify.com).
2. Impor project dari GitHub atau drag-and-drop folder `dist/` setelah menjalankan `npm run build`.
3. Set *Build command*: `npm run build` dan *Publish directory*: `dist`.

---

## 👤 Nilai Portofolio (Portfolio Highlights)

Proyek ini mendemonstrasikan keahlian dalam:
- ✅ **Translasi Konsep Desain High-End**: Mengubah ide estetika arsitektur mewah menjadi kode antarmuka fungsional.
- ✅ **State Management Kompleks**: Sinkronisasi konversi multi-currency secara reaktif ke seluruh komponen aplikasi.
- ✅ **Clean Code & Modularitas**: Pemisahan komponen UI, styling tokens, dan mock data secara terstruktur.
- ✅ **User Experience (UX) Berorientasi Konversi**: Alur reservasi VIP yang intuitif dengan validasi formulir dan direct messaging.

---

## 📄 Lisensi
Didistribusikan di bawah Lisensi MIT. Bebas digunakan untuk keperluan pembelajaran dan portofolio pribadi.
