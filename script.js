// List default Truth & Dare
let truthList = [
    "Apa rahasia terbesar yang belum pernah kamu kasih tahu ke siapa pun?",
    "Siapa orang yang pernah kamu suka diam-diam?",
    "Apa hal paling memalukan yang pernah kamu alami?",
    "Kalau bisa tuker hidup sehari sama siapa aja, kamu pilih siapa?",
    "Apa kebohongan terbesar yang pernah kamu bilang ke orang lain?"
];

let dareList = [
    "Coba kirim chat ke orang random dan bilang ‘Lo keren banget, bro!’",
    "Nyanyiin lagu anak-anak dengan gaya dramatis kayak konser besar!",
    "Buka galeri HP kamu dan tunjukin foto pertama yang kamu simpan!",
    "Ngomong dengan suara paling aneh yang bisa lo buat selama 30 detik!",
    "Lompat-lompat sambil teriak 'Gue superman!' selama 10 detik!"
];

// Ambil data tambahan dari localStorage (biar tetap tersimpan)
if (localStorage.getItem("truthList")) {
    truthList = JSON.parse(localStorage.getItem("truthList"));
}
if (localStorage.getItem("dareList")) {
    dareList = JSON.parse(localStorage.getItem("dareList"));
}

// Fungsi untuk mengambil Truth secara acak
function getTruth() {
    let randomIndex = Math.floor(Math.random() * truthList.length);
    document.getElementById("result").innerText = truthList[randomIndex];
}

// Fungsi untuk mengambil Dare secara acak
function getDare() {
    let randomIndex = Math.floor(Math.random() * dareList.length);
    document.getElementById("result").innerText = dareList[randomIndex];
}

// Fungsi untuk menambahkan Truth atau Dare baru
function addCustom() {
    let newInput = document.getElementById("newInput").value.trim();
    let type = document.getElementById("typeSelect").value;

    if (newInput !== "") {
        if (type === "truth") {
            truthList.push(newInput);
            localStorage.setItem("truthList", JSON.stringify(truthList)); // Simpan di localStorage
        } else {
            dareList.push(newInput);
            localStorage.setItem("dareList", JSON.stringify(dareList)); // Simpan di localStorage
        }
        document.getElementById("newInput").value = ""; // Kosongkan input
        alert("Truth/Dare baru berhasil ditambahkan!");
    } else {
        alert("Masukkan sesuatu dulu!");
    }
}