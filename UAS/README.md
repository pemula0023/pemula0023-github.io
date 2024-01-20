# Situs Web The Neighbourhood

Situs web ini menawarkan kepada pemesan konser, penggemar lama, dan calon penggemar The Neighbourhood cara untuk melihat dan mendengarkan lagu-lagu dari katalog belakang band dan mencari tahu tentang materi baru apa pun yang tersedia.

Situs ini menyediakan informasi dan tautan untuk membeli tiket konser band yang akan datang serta metode pemesanan band untuk acara pribadi. Penggemar dapat mempelajari tentang masing-masing anggota The Neighbourhood melalui bagian band dan menyediakan tautan ke media sosial band dan opsi pendaftaran buletin.
 
## UX

### Kisah Pengguna

Sebelum memulai pengembangan situs, beberapa cerita pengguna dibuat untuk menentukan siapa pengunjung situs tersebut dan apa yang mungkin mereka inginkan dari situs tersebut:

- "Sebagai penggemar The Neighbourhood, saya ingin dapat dengan cepat mengakses keluaran band yang ada, menemukan materi baru dan tanggal konser mendatang sehingga saya dapat menikmati lagu-lagu The Neighbourhood favorit saya."

- "Sebagai penggemar The Neighbourhood, saya ingin mengarahkan orang-orang, yang ingin saya perkenalkan kepada band ini, ke situs web tempat mereka dapat membaca tentang anggota band, mendengarkan musik The Neighbourhood, menonton video musik mereka, melihat karya seni dan foto-foto band dan mencari tahu tentang tanggal konser mendatang sehingga mereka bisa menjadi penggemar."

- "Sebagai calon penggemar The Neighbourhood, saya ingin dapat mengunjungi situs web tempat saya dapat membaca tentang anggota band, mendengarkan musik The Neighbourhood, menonton video musik mereka, melihat karya seni dan foto band, serta mencari tahu tentang tanggal konser yang akan datang sehingga aku bisa menjadi penggemarnya."

- "Sebagai calon pemesan konser, saya ingin dapat mengunjungi situs web tempat saya dapat membaca tentang anggota band, mendengarkan musik The Neighbourhood, menonton video musik mereka, melihat karya seni dan foto band, mencari tahu tentang apa saja tanggal konser mendatang sehingga saya dapat memutuskan apakah saya ingin mengirim formulir pemesanan ke band melalui situs web."

### Desain

Kerangka Bootstrap berfungsi sebagai dasar untuk desain situs. Situs web ini menggunakan tata letak halaman tunggal yang terdiri dari tujuh bagian utama: bagian navbar/jumbotron, bagian band, bagian pertunjukan, bagian formulir/modal pemesanan, bagian musik, bagian video, dan bagian footer sosial. Tata letak ini menggunakan sistem grid Bootstrap dan setiap bagian dibangun menggunakan struktur wrapper - container - baris - kolom. Latar belakang bagian navbar/jumbotron memanfaatkan flexbox untuk menampilkan gambar latar belakangnya.

Situs web ini disusun secara semantik dengan filosofi mobile-first. Sesuai dengan pendekatan ini, elemen inti (produk minimal yang layak) situs hadir di semua layar sementara ada lebih banyak detail di berbagai area seperti bilah navigasi dan tabel pertunjukan di layar yang lebih besar.

Karena The Neighbourhood telah ada selama beberapa waktu dan telah lama membangun merek mereka, warna dan tipografi situs tersebut memanfaatkan estetika dan skema warna yang ada untuk langsung mengidentifikasi situs tersebut dengan band tersebut.

Peta situs yang dibuat sebelum dimulainya pengembangan situs web dapat ditemukan di repositori berjudul: Situs Web The Neighbourhood Peta Situs Awal.pdf

## Fitur

1. Pengguna dapat menonton video musik.
2. Pengguna dapat mendengarkan lagu yang ada.
3. Pengguna dapat menemukan informasi tentang rilis mendatang.
4. Pengguna dapat menemukan informasi dan link untuk membeli tiket konser mendatang.
5. Pengguna dapat memesan band untuk acara pribadi.
6. Pengguna dapat mengetahui informasi tentang setiap anggota The Neighbourhood.
7. Pengguna dapat menemukan tautan ke media sosial band dan mendaftar untuk menerima buletin.
8. Pengguna dapat melihat galeri yang berisi gambar-gambar yang berhubungan dengan The Neighbourhood (misalnya sampul album).

## Teknologi yang Digunakan

- [HTML](https://www.w3.org/)
     - Proyek ini menggunakan **HTML** untuk membuat halaman.

- [CSS](https://www.w3.org/)
     - Proyek ini menggunakan **CSS** untuk menata halaman.

- [JavaScript](https://developer.mozilla.org/bm/docs/Web/JavaScript)
     - Proyek ini menggunakan **JavaScript** untuk memanipulasi DOM.

- [Bootstrap](https://getbootstrap.com/docs/3.3/)
     - Proyek ini menggunakan **Bootstrap** untuk menata halaman dan pengalaman pengguna.

- [JQuery](https://jquery.com/)
     - Proyek ini menggunakan **JQuery** untuk mengaktifkan fungsionalitas penuh Bootstraps (misalnya navbar yang dapat dilipat, dll)

## Pengujian

Karena sebagian besar terdiri dari HTML dan CSS, situs ini telah diuji secara manual berdasarkan bagian demi bagian dan sepenuhnya responsif di semua ukuran layar dan browser (alat pemilih kalender di bagian modal hanya tersedia di Chrome dan Edge pada tanggal waktu pengembangan).

1. Formulir pemesanan:
     1. Buka bagian "Gigs".
     2. Kirimkan formulir dan verifikasi bahwa modalnya muncul.

1. Galeri
     1. Buka bagian "Gallery".
     2. Pastikan tombol panah mengontrol slide.

Selama pengembangan situs, berbagai elemen dicoba, misalnya. pada versi awal situs, pemutar musik berbasis jQuery diujicobakan namun karena kurangnya pengalaman saya dengan JQuery pada saat pengembangan, penyesuaian pemutar sangat menantang dan saya memilih untuk bekerja dengan elemen audio HTML5.

Sama seperti gambar yang saya miliki