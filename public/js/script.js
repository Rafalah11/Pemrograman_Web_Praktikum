"use strict";

/**
 * Mobile Navbar Toggle
 */

const navbar = document.querySelector("[data-navbar");
const navToggler = document.querySelector("[data-nav-toggle");

navToggler.addEventListener("click", function () {
    navbar.classList.toggle("active");
    this.classList.toggle("active");
});

let currentIndex = 0; // Untuk melacak gambar yang sedang ditampilkan
let carData = []; // Menyimpan data gambar mobil dan nama mobil

// Fungsi untuk menampilkan dialog
function showDialog() {
    // Tampilkan dialog
    document.getElementById("dialog").style.display = "flex";

    // Ambil data dari database menggunakan AJAX
    fetch("php/getProductData.php")
        .then((response) => response.json())
        .then((data) => {
            if (data.error) {
                document.getElementById("carImageContainer").innerHTML =
                    "<p>Error: " + data.error + "</p>";
            } else {
                carData = data; // Simpan data mobil
                showCarImage(currentIndex); // Tampilkan gambar pertama
            }
        })
        .catch((error) => {
            document.getElementById("carImageContainer").innerHTML =
                "<p>Error fetching data.</p>";
            console.error("Error:", error);
        });
}

// Fungsi untuk menampilkan gambar dan nama mobil berdasarkan index
function showCarImage(index) {
    if (carData.length > 0) {
        const car = carData[index];
        document.getElementById("carImage").src = car.gambar; // Tampilkan gambar
        document.getElementById("carName").textContent = car.product_name; // Tampilkan nama mobil

        // Menyembunyikan tombol panah jika gambar pertama atau terakhir
        document.querySelector(".arrow.left").style.display =
            index === 0 ? "none" : "block";
        document.querySelector(".arrow.right").style.display =
            index === carData.length - 1 ? "none" : "block";
    }
}
function closeDialog() {
    document.getElementById("dialog").style.display = "none";
}

// Fungsi untuk mengubah gambar berdasarkan arah panah
function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = carData.length - 1;
    if (currentIndex >= carData.length) currentIndex = 0;
    showCarImage(currentIndex);
}

//baru

let carGalleryData = []; // Menyimpan data dari database
let currentGalleryIndex = 0; // Melacak gambar yang sedang ditampilkan

// Fungsi untuk mengambil data dari database
function fetchCarGalleryData() {
    fetch("php/getProductData.php") // Sesuaikan dengan endpoint PHP Anda
        .then((response) => response.json())
        .then((data) => {
            console.log(data); // Pastikan data yang diterima benar
            if (data.error) {
                console.error("Error:", data.error);
                document.querySelector(
                    ".car-gallery"
                ).innerHTML = `<p>Error: ${data.error}</p>`;
            } else {
                carGalleryData = data; // Simpan data dari database
                generateCarMenu(); // Generate menu mobil setelah data diterima
                showGalleryImage(currentGalleryIndex); // Tampilkan gambar pertama
            }
        })
        .catch((error) => {
            console.error("Kesalahan saat mengambil data:", error);
            document.querySelector(".car-gallery").innerHTML =
                "<p>Kesalahan saat mengambil data.</p>";
        });
}

// Fungsi untuk menghasilkan menu mobil dari data
function generateCarMenu() {
    const carMenuList = document.getElementById("carMenuList");

    // Clear list sebelum menambah item baru
    carMenuList.innerHTML = "";

    // Loop melalui data mobil dan buat elemen <li> untuk setiap mobil
    carGalleryData.forEach((car, index) => {
        const li = document.createElement("li");
        li.id = car.product_name; // Gunakan nama mobil sebagai id
        li.textContent = car.product_name; // Nama mobil
        li.onclick = function () {
            setCar(car.product_name); // Set mobil yang dipilih
            currentGalleryIndex = index; // Set index untuk gambar
            showGalleryImage(currentGalleryIndex);
        };

        // Menandai elemen pertama sebagai aktif
        if (index === 0) {
            li.classList.add("active");
        }

        carMenuList.appendChild(li); // Tambahkan elemen <li> ke daftar
    });
}

// Fungsi untuk menampilkan gambar galeri saat ini
function showGalleryImage(index) {
    if (carGalleryData.length > 0) {
        const car = carGalleryData[index];
        document.getElementById("carBrandName").textContent = car.product_name; // Nama merek
        document.getElementById("carGalleryImage").src = car.gambar; // Gambar mobil
        document.getElementById("carModelName").textContent = car.model; // Nama model mobil
    } else {
        console.error("No car data available.");
    }
}

function changeGalleryImage(direction) {
    const wrapper = document.querySelector(".image-wrapper"); // Pastikan elemen ini ada
    const carImage = document.getElementById("carGalleryImage");
    const carBrand = document.getElementById("carBrandName");
    const carModel = document.getElementById("carModelName");

    // Tentukan arah animasi
    if (direction === -1) {
        wrapper.classList.add("animate-left");
    } else {
        wrapper.classList.add("animate-right");
    }

    // Tunggu hingga animasi selesai sebelum mengganti gambar
    setTimeout(() => {
        // Perbarui indeks gambar
        currentGalleryIndex =
            (currentGalleryIndex + direction + carGalleryData.length) %
            carGalleryData.length;

        // Ambil data gambar yang baru
        const car = carGalleryData[currentGalleryIndex];
        carImage.src = car.gambar; // Gambar mobil
        carBrand.textContent = car.product_name; // Nama mobil
        carModel.textContent = car.model; // Model mobil

        // Hapus kelas animasi agar bisa digunakan kembali
        wrapper.classList.remove("animate-left", "animate-right");

        // Perbarui menu aktif
        updateActiveMenu();
    }, 600); // Durasi animasi harus sesuai dengan CSS (0.6s)
}

// Fungsi untuk mengupdate konten berdasarkan mobil yang dipilih
function setCar(model) {
    // Set active class pada li
    document.querySelectorAll(".car-menu li").forEach((item) => {
        item.classList.remove("active");
    });
    document.getElementById(model).classList.add("active");

    // Update gambar dan nama model
    const selectedCar = carGalleryData.find(
        (car) => car.product_name === model
    );
    if (selectedCar) {
        document.getElementById("carBrandName").textContent =
            selectedCar.product_name;
        document.getElementById("carModelName").textContent = selectedCar.model;
        document.getElementById("carGalleryImage").src = selectedCar.gambar;
    }
}

// Fungsi untuk menyesuaikan warna menu aktif
function updateActiveMenu() {
    const currentCar = carGalleryData[currentGalleryIndex]; // Mobil yang sedang ditampilkan
    document.querySelectorAll(".car-menu li").forEach((item) => {
        item.classList.remove("active"); // Hapus kelas active dari semua item
    });

    // Tambahkan kelas active pada menu yang sesuai dengan mobil yang sedang ditampilkan
    const activeMenuItem = document.getElementById(currentCar.product_name);
    if (activeMenuItem) {
        activeMenuItem.classList.add("active");
    }
}

// Panggil fungsi untuk mengambil data saat halaman dimuat
fetchCarGalleryData();
