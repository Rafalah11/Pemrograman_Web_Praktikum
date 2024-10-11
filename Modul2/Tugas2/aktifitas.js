// Fungsi untuk menambah aktivitas ke dalam daftar
function tambah() {
  // Ambil nilai input dari text field
  var inputAktivitas = document.getElementById("aktifitas").value;

  // Periksa apakah input tidak kosong (berisi teks)
  if (inputAktivitas.trim() !== "") {
    // Buat elemen <div> baru untuk menampilkan aktivitas
    var divKonten = document.createElement("div");
    divKonten.className = "konten3"; // Beri kelas "konten3" untuk styling

    // Buat elemen <p> untuk menyimpan teks aktivitas
    var teksAktivitas = document.createElement("p");
    teksAktivitas.textContent = inputAktivitas; // Masukkan teks dari input ke <p>

    // Buat elemen <div> untuk menampung tombol edit dan hapus
    var grupTombol = document.createElement("div");
    grupTombol.className = "button-group"; // Beri kelas "button-group" untuk styling

    // Buat tombol edit
    var tombolEdit = document.createElement("button");
    tombolEdit.className = "edit"; // Beri kelas "edit" untuk styling
    tombolEdit.innerHTML = '<i class="fa fa-edit"></i>'; // Ikon untuk tombol edit

    // Buat tombol delete
    var tombolHapus = document.createElement("button");
    tombolHapus.className = "delete"; // Beri kelas "delete" untuk styling
    tombolHapus.innerHTML = '<i class="fa fa-trash-alt"></i>'; // Ikon untuk tombol hapus

    // Event listener untuk tombol Edit
    tombolEdit.addEventListener("click", function () {
      // Saat tombol edit diklik, ubah elemen <p> menjadi input field agar bisa diedit
      var inputEdit = document.createElement("input");
      inputEdit.type = "text";
      inputEdit.value = teksAktivitas.textContent; // Masukkan teks yang ingin diedit ke input field
      inputEdit.className = "edit-input"; // Kelas untuk styling input edit

      // Buat tombol untuk menyimpan perubahan
      var tombolSimpan = document.createElement("button");
      tombolSimpan.className = "save"; // Beri kelas "save" untuk styling
      tombolSimpan.innerHTML = '<i class="fa fa-check"></i>'; // Teks pada tombol simpan

      // Event listener untuk tombol Simpan
      tombolSimpan.addEventListener("click", function () {
        // Jika input tidak kosong, simpan perubahan
        if (inputEdit.value.trim() !== "") {
          teksAktivitas.textContent = inputEdit.value; // Masukkan teks baru ke <p>
          divKonten.replaceChild(teksAktivitas, inputEdit); // Ubah kembali input menjadi <p>
          grupTombol.replaceChild(tombolEdit, tombolSimpan); // Kembalikan tombol Simpan menjadi Edit
        } else {
          alert("Masukkan aktivitas yang valid."); // Tampilkan pesan jika input kosong
        }
      });

      // Ganti <p> dengan input field untuk mengedit
      divKonten.replaceChild(inputEdit, teksAktivitas);
      // Ganti tombol Edit dengan tombol Simpan
      grupTombol.replaceChild(tombolSimpan, tombolEdit);
    });

    // Event listener untuk tombol Delete (hapus aktivitas)
    tombolHapus.addEventListener("click", function () {
      divKonten.remove(); // Hapus aktivitas dari daftar
    });

    // Masukkan tombol edit dan hapus ke dalam grup tombol
    grupTombol.appendChild(tombolEdit);
    grupTombol.appendChild(tombolHapus);

    // Masukkan teks aktivitas dan grup tombol ke dalam divKonten
    divKonten.appendChild(teksAktivitas);
    divKonten.appendChild(grupTombol);

    // Tambahkan divKonten (aktivitas baru) ke dalam daftar aktivitas di halaman
    document.getElementById("list-aktifitas").appendChild(divKonten);

    // Kosongkan input setelah menambah aktivitas
    document.getElementById("aktifitas").value = "";
  } else {
    // Tampilkan pesan jika input kosong
    alert("Masukkan aktivitas terlebih dahulu.");
  }
}
