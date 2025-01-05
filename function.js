// Fungsi untuk menentukan nilai huruf berdasarkan angka
function getLetterGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "E";
    }
}

// Mengambil input dari argumen command line
let userInput = process.argv[2];

// Mengonversi input menjadi angka
let score = parseInt(userInput);

// Memeriksa apakah input adalah angka yang valid
if (!isNaN(score)) {
    // Mendapatkan hasil dari fungsi
    let letterGrade = getLetterGrade(score);
    // Menampilkan output
    console.log(`Nilai angka anda adalah ${score}, nilai huruf anda adalah ${letterGrade}.`);
} else {
    console.log("Input tidak valid. Silahkan masukkan angka yang benar.");
}