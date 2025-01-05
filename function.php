<?php
// Fungsi untuk menentukan nilai huruf
function nilaiHuruf($nilai)
{
    if ($nilai >= 90) {
        return "A";
    } elseif ($nilai >= 80) {
        return "B";
    } elseif ($nilai >= 70) {
        return "C";
    } elseif ($nilai >= 60) {
        return "D";
    } else {
        return "E";
    }
}

// Mengambil input dari pengguna
echo "Silahkan masukkan nilai: ";
$input = trim(fgets(STDIN)); // Mengambil input dari command line

// Memastikan input adalah angka
if (is_numeric($input)) {
    $nilai = (int)$input; // Mengonversi input ke integer
    $huruf = nilaiHuruf($nilai);
    echo "Nilai angka Anda adalah $nilai dan nilai huruf Anda adalah $huruf.\n";
} else {
    echo "Input tidak valid. Silakan masukkan angka.\n";
}
