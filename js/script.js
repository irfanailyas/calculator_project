let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let result = document.getElementById("result");

function add() {
  result.innerText = Number(num1.value) + Number(num2.value);
}

function subtract() {
  result.innerText = Number(num1.value) - Number(num2.value);
}

function multiply() {
  result.innerText = Number(num1.value) * Number(num2.value);
}

function divide() {
  if (Number(num2.value) === 0) {
    result.innerText = "Cannot divide by zero";
  } else {
    result.innerText = Number(num1.value) / Number(num2.value);
  }
}

function square() {
  result.innerText = Number(num1.value) * Number(num1.value);
}

function cube() {
  result.innerText = Number(num1.value) * Number(num1.value) * Number(num1.value);
}

function clearResult() {
  num1.value = "";
  num2.value = "";
  result.innerText = 0;
}

document.getElementById("add").addEventListener("click", add);
document.getElementById("subtract").addEventListener("click", subtract);
document.getElementById("multiply").addEventListener("click", multiply);
document.getElementById("divide").addEventListener("click", divide);
document.getElementById("square").addEventListener("click", square);
document.getElementById("cube").addEventListener("click", cube);
document.getElementById("clear").addEventListener("click", clearResult);