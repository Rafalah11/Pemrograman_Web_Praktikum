// Ambil elemen dari HTML
const inputAktivitas = document.getElementById("input-aktivitas");
const btnTambah = document.getElementById("btn-tambah");
const aktivitasList = document.getElementById("aktivitas-list");

// Tambah Event Listener untuk tombol "Tambah Aktivitas"
btnTambah.addEventListener("click", () => {
  const aktivitas = inputAktivitas.value; // Ambil nilai dari input teks
  if (aktivitas.trim()) {
    // Pastikan input tidak kosong
    tambahAktivitas(aktivitas);
    inputAktivitas.value = ""; // Kosongkan input setelah menambah
  }
});

// Fungsi untuk menambahkan aktivitas ke dalam daftar
function tambahAktivitas(aktivitas) {
  const divAktivitas = document.createElement("div");
  divAktivitas.className = "konten3";

  // Buat elemen teks untuk menampilkan aktivitas
  const teksAktivitas = document.createElement("input");
  teksAktivitas.type = "text";
  teksAktivitas.value = aktivitas;
  teksAktivitas.disabled = true; // Nonaktifkan input saat pertama kali ditambahkan

  // Buat tombol Edit
  const btnEdit = document.createElement("button");
  btnEdit.className = "edit";
  btnEdit.innerHTML = '<i class="fas fa-edit"></i> Edit';

  // Event Listener untuk tombol Edit
  btnEdit.addEventListener("click", () => {
    if (teksAktivitas.disabled) {
      teksAktivitas.disabled = false; // Aktifkan input untuk diedit
      btnEdit.innerHTML = '<i class="fas fa-save"></i> Simpan';
    } else {
      teksAktivitas.disabled = true; // Kunci kembali setelah diedit
      btnEdit.innerHTML = '<i class="fas fa-edit"></i> Edit';
    }
  });

  // Buat tombol Delete
  const btnDelete = document.createElement("button");
  btnDelete.className = "delete";
  btnDelete.innerHTML = '<i class="fas fa-trash-alt"></i> Hapus';

  // Event Listener untuk tombol Delete
  btnDelete.addEventListener("click", () => {
    divAktivitas.remove(); // Hapus elemen aktivitas
  });

  // Tambahkan teks aktivitas dan tombol ke dalam div
  divAktivitas.appendChild(teksAktivitas);
  divAktivitas.appendChild(btnEdit);
  divAktivitas.appendChild(btnDelete);

  // Tambahkan div aktivitas ke dalam aktivitas list
  aktivitasList.appendChild(divAktivitas);
}
