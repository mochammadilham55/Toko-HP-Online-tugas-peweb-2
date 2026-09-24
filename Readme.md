Struktur Folder
Toko-HP-Onlen/
1. index.html
2. style.css
3. script.js
4. README.md


index.html Berisi struktur utama website seperti:

Navbar
Informasi toko
Card produk
Modal detail produk
Footer


style.css Berisi seluruh tampilan website seperti:

Layout
Warna
Ukuran
Responsive design
Hover effect
Dark Mode
Tampilan popup/modal


script.js Digunakan untuk memberikan interaksi pada website, seperti:

Membuka popup detail produk
Menutup popup
Mengubah isi popup berdasarkan produk
Mengubah class CSS
Mengaktifkan Dark Mode
Membuat link WhatsApp berdasarkan produk


Implementasi materi manipulasi dom

1. dark mode

Website memiliki fitur Dark Mode yang dapat diaktifkan melalui tombol 🌙.

JavaScript mengubah class pada elemen body:

document.body.classList.toggle("dark");

Kemudian CSS memberikan tampilan berbeda ketika class dark aktif:

body.dark {
    background-color: #0f172a;
    color: #e5e7eb;
}

2. Popup Detail Produk

Ketika pengguna menekan tombol Detail, JavaScript akan:

Mencari card produk yang dipilih.
Mengambil gambar produk.
Mengambil nama produk.
Mengambil harga.
Mengambil deskripsi.
Memasukkan data tersebut ke dalam popup.
Menampilkan popup dengan menambahkan class CSS.