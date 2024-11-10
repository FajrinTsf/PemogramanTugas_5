// app.js
const math = require('./modules/mathModule.js');
const string = require('./modules/stringModule.js');
const date = require('./modules/dateModule.js');

// Mencetak pesan awal
console.log('Aplikasi dimulai.');

// Melakukan operasi matematika
const sum = math.add(10, 20);
const product = math.multiply(5, 5);

// Mencetak hasil operasi matematika
console.log(`Hasil penjumlahan: ${sum}`);
console.log(`Hasil perkalian: ${product}`);

// Mengolah string
const upperText = string.toUpperCase('hello vscode');
const textLength = string.getLength('hello vscode');

// Mencetak hasil pengolahan string
console.log(`Teks kapital: ${upperText}`);
console.log(`Panjang teks: ${textLength}`);

// Mendapatkan tanggal dan waktu saat ini
const currentDate = date.getCurrentDate();
const currentTime = date.getCurrentTime();

// Mencetak tanggal dan waktu saat ini
console.log(`Tanggal saat ini: ${currentDate}`);
console.log(`Waktu saat ini: ${currentTime}`);

// Mencetak pesan akhir
console.log('Aplikasi selesai.');