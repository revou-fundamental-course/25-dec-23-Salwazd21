function calculate() {
    // Ambil nilai sisi dari input
    var sideA = parseFloat(document.getElementById("sideA").value);
    var sideB = parseFloat(document.getElementById("sideB").value);
    var sideC = parseFloat(document.getElementById("sideC").value);

    // Validasi sisi segitiga
    if (sideA + sideB > sideC && sideA + sideC > sideB && sideB + sideC > sideA) {
        // Hitung luas dan keliling
        var s = (sideA + sideB + sideC) / 2;
        var area = Math.sqrt(s * (s - sideA) * (s - sideB) * (s - sideC));
        var perimeter = sideA + sideB + sideC;

        // Tampilkan hasil
        document.getElementById("result").innerHTML =
            "<p>Luas Segitiga: " + area.toFixed(2) + "</p>" +
            "<p>Keliling Segitiga: " + perimeter.toFixed(2) + "</p>";
    } else {
        // Tampilkan pesan jika sisi tidak valid
        document.getElementById("result").innerHTML = "<p>Sisi tidak valid untuk membentuk segitiga.</p>";
    }
}
