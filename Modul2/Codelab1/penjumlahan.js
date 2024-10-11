function penjumlahan() {
  var satu, dua, tiga;
  satu = Number(document.getElementById("satu").value);
  dua = Number(document.getElementById("dua").value);

  tiga = satu + dua;

  alert("Hasil Penjumlahan = " + tiga);
}

function ulang() {
  document.getElementById("satu").value = "";
  document.getElementById("dua").value = "";
}
