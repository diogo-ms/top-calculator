let firstNum = 0;
let secondNum = 0;
let displayNum = 0;

const buttons = document.querySelectorAll(".digits");
const displayElement = document.querySelector(".display");
let displayValue = null;

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
function operate(a, b, operator) {
  a = Number(a);
  b = Number(b);
  switch (operator) {
    case "plus":
      return add(a, b);
    case "subtract":
      return subtract(a, b);
    case "multiple":
      return multiply(a, b);
    case "divide":
      if (b == 0) return null
      else return divide(a, b);
    default:
      return null;
  }
}
buttons.forEach(button => {
  button.addEventListener("click", () => {
    updateDisplay(button);
  })
});
function updateDisplay(element) {
  displayElement.textContent = element.textContent;
  displayValue = displayElement.textContent;
}