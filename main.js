let firstNum = 0;
let secondNum = 0;
let currentOperator = null;
let displayValue = null;

const buttons = document.querySelectorAll(".digits");
const displayElement = document.querySelector(".display");
const operators = document.querySelectorAll('.operators');
const equalButton = document.getElementById('equals');

buttons.forEach(button => {
  button.addEventListener("click", () => {
    updateDisplay(button.textContent);
  })
});
operators.forEach(button => {
  button.addEventListener("click", () => {
    firstNum = displayValue
    currentOperator = button.textContent
  })
})
equalButton.addEventListener("click", () => {
  operate(firstNum, displayValue, currentOperator);
})

function add(a, b) {
  let result = a +b;
  return updateDisplay(result);
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
    case "+":
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
function updateDisplay(text) {
  displayElement.textContent = text;
  displayValue = displayElement.textContent;
}