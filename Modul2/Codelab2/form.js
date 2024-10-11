// function pesan() {
// CARA KE 1
//   var x = document.forms["form"]["name"].value;
//   var y = document.forms["form"]["email"].value;
//   var z = document.forms["form"]["alamat"].value;
//   if (x == "" || y == "" || z == "") {
//     alert("Data yang anda masukan masih kosong");
//     return false;
//   }
// }

// CARA KE 2
function pesan() {
  var name, email, alamat;
  name = document.getElementById("name").value;
  email = document.getElementById("email").value;
  alamat = document.getElementById("alamat").value;
  if (name == "" || email == "" || alamat == "") {
    alert("Anda harus mengisi data dengan lengkap!!!");
    // Kreasi
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("alamat").value = "";
    return false;
  }
}
