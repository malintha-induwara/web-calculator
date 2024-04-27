// Get references to elements
const output = document.getElementById("output-value");
const history = document.getElementById("history-value");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");

let currentInput = "";
let historyValue = "";

// Add event listeners to number buttons
numbers.forEach((number) => {
  number.addEventListener("click", () => {
    currentInput += number.id;
    updateOutput();
  });
});

// Add event listeners to operator buttons
operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    if (currentInput !== "") {
      if (operator.id !== "equals" && operator.id !== "backspace") {
        currentInput += " " + operator.id + " ";
        historyValue += currentInput;
        updateOutput();
      }
    }
  });
});

// Event listener for clear button
document.getElementById("clear").addEventListener("click", () => {
  clear();
});

// Event listener for backspace button
document.getElementById("backspace").addEventListener("click", () => {
  backspace();
});

// Event listener for equals button
document.getElementById("equals").addEventListener("click", () => {
  calculate();
});

// Function to update output display
function updateOutput() {
  output.textContent = currentInput;
}

// Function to clear the calculator
function clear() {
  currentInput = "";
  historyValue = "";
  updateOutput();
  history.textContent = "";
}

function backspace() {
  if (currentInput.length > 0) {
    currentInput = currentInput.slice(0, -1);
    updateOutput();
  }
}


function calculate() {
  if (currentInput !== "") {
    const result = eval(currentInput);
    output.textContent = result;
   // history.textContent = historyValue;
    currentInput = result;
  }
}
