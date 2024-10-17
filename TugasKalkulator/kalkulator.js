function clearDisplay() {
  document.getElementById("tampilan").value = "";
}

function deleteLast() {
  let tampilan = document.getElementById("tampilan");
  tampilan.value = tampilan.value.toString().slice(0, -1);
}

function addToDisplay(value) {
  let tampilan = document.getElementById("tampilan");
  tampilan.value += value;

  if (value === "sin(" || value === "cos(") {
    tampilan.value += "0)"; // Tambahkan '0' untuk menunjukkan argumen awal, bisa diubah sesuai kebutuhan
  }
}

function calculate() {
  let tampilan = document.getElementById("tampilan");
  try {
    // Mengganti operator pangkat dengan benar
    tampilan.value = tampilan.value.replace(/\^/g, "**");

    // Menangani operator modulus
    tampilan.value = tampilan.value
      .replace(/%/g, " % ")
      .replace(/(^|\s)(\d+)(\s*%\s*\d+)/g, (match, p1, p2, p3) => {
        const parts = p3.split("%");
        return `${p1}${p2} % ${parts[1]}`;
      });
    // Menangani fungsi sin dan cos
    tampilan.value = eval(
      tampilan.value
        .replace(/%/g, "/100")
        .replace(/sin\(([^)]+)\)/g, "Math.sin($1)")
        .replace(/cos\(([^)]+)\)/g, "Math.cos($1)")
    );

    // Evaluasi dan tampilkan hasil
    tampilan.value = eval(tampilan.value);
  } catch (error) {
    tampilan.value = "Error";
  }
}
