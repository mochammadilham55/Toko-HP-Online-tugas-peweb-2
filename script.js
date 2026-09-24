
const tombolTema = document.querySelector(".tema");

tombolTema.addEventListener("click", function() {
    document.body.classList.toggle("dark");
    tombolTema.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});



const detailButtons = document.querySelectorAll(".detail-btn");
const modal = document.getElementById("modalProduk");
const modalGambar = document.getElementById("modalGambar");
const modalNama = document.getElementById("modalNama");
const modalHarga = document.getElementById("modalHarga");
const modalDeskripsi = document.getElementById("modalDeskripsi");
const modalWa = document.getElementById("modalWa");

detailButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const card = button.closest(".product-card");

        const nama = card.querySelector("h3").textContent;
        const deskripsi = card.querySelector("p").textContent;
        const harga = card.querySelector(".harga").textContent;
        const gambar = card.querySelector("img").src;

        modalNama.textContent = nama;
        modalDeskripsi.textContent = deskripsi;
        modalHarga.textContent = harga;
        modalGambar.src = gambar;
        modalGambar.alt = nama;

        const pesan = "Halo kak, saya berminat dengan produk " + nama;
        modalWa.href = "https://wa.me/6282228225791?text=" + encodeURIComponent(pesan);

        modal.classList.add("show");
    });
});


const tombolTutup = document.getElementById("tutupModal");

function tutupModal() {
    modal.classList.remove("show");
}

tombolTutup.addEventListener("click", tutupModal);

modal.addEventListener("click", function(e) {
    if (e.target === modal) {
        tutupModal();
    }
});