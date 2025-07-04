# Jana Mesej Mesyuarat WhatsApp

Aplikasi web untuk menjana pelbagai jenis notis dalam format yang sesuai untuk WhatsApp dan membolehkan perkongsian terus ke WhatsApp. Aplikasi ini menyokong pembuatan notis mesyuarat, jemputan perkahwinan, dan pengumuman pendaftaran.

## Ciri-ciri

- Borang mesra pengguna untuk memasukkan butiran mesyuarat
- Jana jemputan perkahwinan dengan format yang menarik
- Cipta pengumuman pendaftaran untuk acara dan program
- Pratonton notis dalam masa nyata
- Perkongsian terus ke WhatsApp dengan satu klik
- Pelbagai templat untuk pelbagai jenis notis
- Salin notis ke papan keratan dengan mudah
- Antara muka responsif yang berfungsi pada semua peranti

## Teknologi

- [Next.js](https://nextjs.org/) - Framework React
- [React](https://reactjs.org/) - Pustaka UI
- [TailwindCSS](https://tailwindcss.com/) - Framework CSS
- [React Icons](https://react-icons.github.io/react-icons/) - Ikon SVG
- [PNPM](https://pnpm.io/) - Pengurus pakej yang pantas dan cekap

## Memulakan Projek

### Prasyarat

- Node.js (versi 14.0.0 atau lebih tinggi)
- PNPM (versi 8 atau lebih tinggi)

### Pemasangan

1. Klon repositori ini

```bash
git clone https://github.com/Mustaffa96/jana-mesej-WA.git
cd jana-mesej-WA
```

2. Pasang semua dependencies

```bash
pnpm install
```

3. Jalankan server pembangunan

```bash
pnpm dev
```

4. Buka [http://localhost:3000](http://localhost:3000) dengan pelayar web anda untuk melihat aplikasi.

## Struktur Projek

```
jana-mesej-WA/
├── components/       # Komponen UI boleh guna semula
├── pages/            # Halaman aplikasi Next.js
├── public/           # Aset statik
├── styles/           # Fail CSS global dan modul
├── utils/            # Fungsi pembantu
├── .gitignore        # Fail yang diabaikan oleh git
├── next.config.js    # Konfigurasi Next.js
├── package.json      # Dependencies dan skrip
├── postcss.config.js # Konfigurasi PostCSS
├── README.md         # Dokumentasi projek
└── tailwind.config.js # Konfigurasi TailwindCSS
```

## Penggunaan

### Notis Mesyuarat

1. Isi borang dengan butiran mesyuarat anda (tajuk, tarikh, masa, lokasi, agenda).
2. Klik butang "Jana Notis Mesyuarat" untuk menjana notis.
3. Pratonton notis yang dihasilkan.
4. Klik "Kongsi ke WhatsApp" untuk berkongsi notis terus ke WhatsApp, atau "Salin" untuk menyalin ke papan keratan.

### Jemputan Perkahwinan

1. Navigasi ke halaman "Perkahwinan" melalui menu navigasi.
2. Isi borang dengan butiran perkahwinan (bismillah, salam, tajuk, tuan rumah, nama pengantin, tarikh, masa, tempat, maklumat hubungan, penutup).
3. Pratonton jemputan yang dihasilkan.
4. Klik "Kongsi ke WhatsApp" untuk berkongsi jemputan terus ke WhatsApp, atau "Salin" untuk menyalin ke papan keratan.

### Pengumuman Pendaftaran

1. Navigasi ke halaman "Pendaftaran" melalui menu navigasi.
2. Isi borang dengan butiran pendaftaran (tajuk, subtajuk, deskripsi, sorotan, lokasi, pautan pendaftaran, maklumat hubungan, penutup).
3. Pratonton pengumuman yang dihasilkan.
4. Klik "Kongsi ke WhatsApp" untuk berkongsi pengumuman terus ke WhatsApp, atau "Salin" untuk menyalin ke papan keratan.

## Lesen

Projek ini dilesenkan di bawah Lesen MIT - lihat fail [LICENSE](LICENSE) untuk butiran.

## Penyelenggaraan Kesihatan Projek

Untuk memastikan projek ini kekal sihat dan berfungsi dengan baik, ikuti langkah-langkah berikut:

### Pemeriksaan Rutin

```bash
# Jalankan pemeriksaan format kod
pnpm format

# Jalankan pemeriksaan lint
pnpm lint

# Jalankan pemeriksaan jenis TypeScript
pnpm type-check

# Jalankan semua pemeriksaan sekaligus
pnpm check-all
```

### Amalan Terbaik

1. **Ujian**: Tambah ujian untuk ciri-ciri baru bila perlu
2. **Prestasi**: Pantau prestasi aplikasi menggunakan alat Next.js Analytics
3. **Keselamatan**: Pastikan semua dependencies dikemas kini secara berkala
4. **Aksesibiliti**: Pastikan aplikasi boleh diakses oleh semua pengguna
5. **Dokumentasi**: Kemas kini dokumentasi apabila menambah ciri baru

## Penghargaan

- [WhatsApp](https://www.whatsapp.com/) untuk API perkongsian mereka
- [Next.js](https://nextjs.org/) untuk framework yang hebat
- [TailwindCSS](https://tailwindcss.com/) untuk utiliti CSS yang fleksibel
