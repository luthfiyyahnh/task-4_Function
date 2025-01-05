<?php
// Fungsi untuk menentukan genap atau ganjil
function genapAtauGanjil($angka)
{
    if ($angka % 2 == 0) {
        return "genap";
    } else {
        return "ganjil";
    }
}

// Mengambil input dari pengguna
echo "Silahkan masukkan nilai: ";
$input = trim(fgets(STDIN)); // Mengambil input dari command line

// Memastikan input adalah angka
if (is_numeric($input)) {
    $angka = (int)$input; // Mengonversi input ke integer
    $hasil = genapAtauGanjil($angka);
    echo "Nilai angka Anda adalah $angka dan bernilai $hasil.\n";
} else {
    echo "Input tidak valid. Silakan masukkan angka.\n";
}
