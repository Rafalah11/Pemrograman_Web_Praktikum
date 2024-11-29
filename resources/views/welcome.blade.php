<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Autofix - Auto Maintenance & Repair Service</title>
    <meta
      name="description"
      content="This is a vehicle repair html template made by codewithsadee"
    />

    <!-- Favicon-->
    <link rel="shortcut icon" href="./favicon.svg" type="image/svg+xml" />

    <!-- Google Font Link -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@400;600;700&family=Mulish&display=swap"
      rel="stylesheet"
    />

    <!-- Material Icont Font -->
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@40,600,0,0"
    />

    <!-- Custom css link-->
    <link rel="stylesheet" href="./css/style.css" />
    <!--Preload Images-->
    <link rel="Preload" as="Image" href="./images/hero-banner.png" />
    <link rel="Preload" as="Image" href="./images/hero-bg.jpg" />
  </head>
  <body>
    <!--Header-->
    <header class="header">
      <div class="container">
        <a href="#" class="logo">
          <img
            src="./images/logo.png"
            width="128"
            height="63"
            alt="autofix home"
          />
        </a>
        <nav class="navbar" data-navbar>
          <ul class="navbar-list">
            <li>
              <a href="#" class="navbar-link">Home</a>
            </li>

            <li>
              <a href="#" class="navbar-link">About</a>
            </li>

            <li>
              <a href="#" class="navbar-link">Service</a>
            </li>

            <li>
              <a href="#" class="navbar-link">Projects</a>
            </li>

            <li>
              <a href="#" class="navbar-link">Contact</a>
            </li>
          </ul>
        </nav>
        <a href="" class="btn btn-primary">
          <span class="span">Get a Quote</span>
          <span class="material-symbols-rounded">arrow_forward</span>
        </a>
        <button class="nav-toggle-btn" aria-label="toggle menu" data-nav-toggle>
          <span class="nav-toggle-icon icon-1"></span>
          <span class="nav-toggle-icon icon-2"></span>
          <span class="nav-toggle-icon icon-3"></span>
        </button>
      </div>
    </header>

    <main>
      <article>
        <!--HERO-->
        <section
          class="hero has-bg-image"
          aria-label="home"
          style="background-image: url('./images/hero-bg.jpg')"
        >
          <div class="container">
            <div class="hero-content">
              <p class="section-subtitle : dark">
                We have talented engineers & mechanics
              </p>

              <h1 class="h1 section-title">
                Auto Maintenance & Repair Service
              </h1>
              <p class="section-text">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                Excepteur sint occaecat cupidatat non proident.
              </p>
              <!-- Tombol "Our Car" -->
              <a href="#" class="btn" onclick="showDialog()">
                <span class="span">Our Car</span>
                <span class="material-symbols-rounded">arrow_forward</span>
              </a>

              <!-- Dialog -->
              <div id="dialog" class="dialog">
                <div class="dialog-content">
                  <!-- Tombol Penutupan -->
                  <span class="close-btn" onclick="closeDialog()">&#10006;</span>

                  <!-- Tombol Panah Kiri -->
                  <span class="arrow left" onclick="changeImage(-1)">&#8592;</span>

                  <!-- Gambar Mobil -->
                  <div id="carImageContainer">
                    <img id="carImage" src="" alt="Car Image" />
                    <p id="carName"></p>
                  </div>

                  <!-- Tombol Panah Kanan -->
                  <span class="arrow right" onclick="changeImage(1)">&#8594;</span>
                </div>
              </div>


            <figure class="hero-banner" style="--width: 1228; --height: 789">
              <img
                src="./images/hero-banner.png"
                width="1228"
                height="789"
                alt="red motor vehicle"
                class="move-anim"
              />
            </figure>
          </div>
        </section>
      </article>
    </main>

    <section class="car-gallery">
  <div class="container">
    <div class="car-menu">
      <ul id="carMenuList">
        <!-- Elemen <li> akan di-generate secara dinamis -->
      </ul>
    </div>
    <div class="car-display">
      <h2 id="carBrandName" class="car-brand">Brand Name</h2>
      <h1 id="carModelName" class="car-model">Model Name</h1>
      <div class="image-wrapper">
        <img id="carGalleryImage" class="car-image" src="car1.jpg" alt="Gambar Mobil">
      </div>
      <button class="arrow-btn left" onclick="changeGalleryImage(-1)">&#8592;</button>
      <button class="arrow-btn right" onclick="changeGalleryImage(1)">&#8594;</button>
    </div>
  </div>
</section>


<!-- Footer -->
<footer class="footer">
  <div class="container">
    <div class="footer-content">
      <!-- About Section -->
      <div class="footer-about">
        <h3>Tentang Kami</h3>
        <p>
          Kami adalah perusahaan layanan penyewaan mobil terkemuka yang menyediakan kendaraan berkualitas tinggi untuk keperluan pribadi dan bisnis.
          Armada kami mencakup berbagai jenis mobil, mulai dari kendaraan mewah hingga model yang lebih terjangkau, memastikan Anda menemukan mobil yang sempurna untuk kebutuhan Anda.
          Apakah Anda merencanakan perjalanan jauh, menghadiri acara bisnis, atau hanya membutuhkan kendaraan yang dapat diandalkan untuk penggunaan sehari-hari, kami siap melayani Anda.
        </p>
      </div>

      <!-- Quick Links Section -->
      <div class="footer-links">
        <h3>Tautan Cepat</h3>
        <ul>
          <li><a href="#">Beranda</a></li>
          <li><a href="#">Layanan</a></li>
          <li><a href="#">Tentang Kami</a></li>
          <li><a href="#">Kontak</a></li>
          <li><a href="#">Kebijakan Privasi</a></li>
        </ul>
      </div>

      <!-- Contact Information Section -->
      <div class="footer-contact">
        <h3>Informasi Kontak</h3>
        <ul>
          <li><span class="material-symbols-rounded">phone</span> +1 234 567 890</li>
          <li><span class="material-symbols-rounded">email</span> info@autofix.com</li>
          <li><span class="material-symbols-rounded">location_on</span> Jalan Sewa Mobil No. 123, Kota, Negara</li>
        </ul>
      </div>

      <!-- Social Media Links -->
<!-- Social Media Links -->
<div class="footer-socials">
  <h3>Ikuti Kami</h3>
  <ul>
    <li><a href="#" target="_blank">Facebook</a></li>
    <li><a href="#" target="_blank">Twitter</a></li>
    <li><a href="#" target="_blank">Instagram</a></li>
    <li><a href="#" target="_blank">LinkedIn</a></li>
  </ul>
</div>

    </div>
  </div>

  <!-- Footer Bottom -->
  <div class="footer-bottom">
    <div class="container">
      <p>&copy; 2024 Autofix - Semua Hak Cipta Dilindungi</p>
    </div>
  </div>
</footer>



    <!--Script JS-->
    <script src="js/script.js"></script>
  </body>
</html>
