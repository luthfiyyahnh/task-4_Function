// Fungsi untuk menentukan apakah angka genap atau ganjil
function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        return "Genap";
    } else {
        return "Ganjil";
    }
}

// Mengambil input dari argumen command line
let userInput = process.argv[2];

// Mengonversi input menjadi angka
let number = parseInt(userInput);

// Memeriksa apakah input adalah angka yang valid
if (!isNaN(number)) {
    // Mendapatkan hasil dari fungsi
    let result = checkEvenOrOdd(number);
    // Menampilkan output
    console.log(`Nilai angka anda adalah ${number} bernilai ${result}.`);
} else {
    console.log("Input tidak valid. Silahkan masukkan angka yang benar.");
}