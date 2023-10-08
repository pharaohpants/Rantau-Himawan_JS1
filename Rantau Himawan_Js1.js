// Contoh if else
var Height = 175;

if (age >= 175) {
  console.log("kamu Tinggi.");
} else {
  console.log("Kamu Pendek.");
}

// Contoh nested if
var weight = 80;

if (weight >= 90) {
  console.log("Anda Sangat Gemuk.");
} else if (weight >= 80) {
  console.log("Anda Gemuk.");
} else if (weight >= 70) {
  console.log("Berat badan Anda Normal.");
} else {
  console.log("Kamu kurus, segeralah makan");
}


// Contoh switch case yang lebih kompleks
var month = new Date().getMonth();

switch (month) {
  case 0:
    console.log("Sekarang Merupakan Bulan Januari");
    break;
  case 1:
    console.log("Sekarang Merupakan Bulan Februari");
    break;
  case 2:
    console.log("Sekarang Merupakan Bulan Maret");
    break;
  case 3:
    console.log("Sekarang Merupakan Bulan April");
    break;
  case 4:
    console.log("Sekarang Merupakan Bulan Mei");
    break;
  case 5:
    console.log("Sekarang Merupakan Bulan Juni");
    break;
  case 6:
    console.log("Sekarang Merupakan Bulan Juli");
    break;
  case 7:
    console.log("Sekarang Merupakan Bulan Agustus");
    break;
  case 8:
    console.log("Sekarang Merupakan Bulan September");
    break;
  case 9:
    console.log("Sekarang Merupakan Bulan Oktober");
    break;
  case 10:
    console.log("Sekarang Merupakan Bulan November");
    break;
  case 11:
    console.log("Sekarang Merupakan Bulan Desember");
    break;
  default:
    console.log("Hari ini adalah hari yang tidak dikenal.");
}

// Contoh for statement yang lebih kompleks
var pp = 0;

for (var a = 1; a <= 75; a++) {
  pp += a;
}

console.log("Jumlah dari 1 sampai 75 adalah " + sum);

// Contoh while statement
var p = 0;

while (p <= 25) {
  console.log("Ini Bapak Budi Yang ke-"+p);
  p++;
}

// Contoh do while statement
var x = 0;

do {
  console.log("Ini Nomor ke-"+x);
  x++;
} while (x <= 8);

// Contoh Function
function greet(name) {
    var today = new Date();
    console.log("Halo, " + name + ". Hari ini adalah " + today.getMonth()+ " " + today.getMonth() + " " + today.getFullYear());
}

greet("Pragos");

  