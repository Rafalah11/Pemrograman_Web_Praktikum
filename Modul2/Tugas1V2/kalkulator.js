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
}

function calculate() {
  let tampilan = document.getElementById("tampilan");
  try {
    tampilan.value = eval(tampilan.value);
  } catch (error) {
    tampilan.value = "Error";
  }
}
