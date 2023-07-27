let currentInput = "0";

function appendToDisplay(value) {
  if (currentInput === "0") {
    currentInput = value;
  } else {
    currentInput += value;
  }
  updateDisplay();
}

function clearDisplay() {
  currentInput = "0";
  updateDisplay();
}

function calculate() {
  try {
    const result = eval(currentInput);
    currentInput = result.toString();
    updateDisplay();
  } catch (error) {
    currentInput = "Error";
    updateDisplay();
  }
}

function updateDisplay() {
  document.getElementById("display").innerText = currentInput;
}

function backspace() {
    if (currentInput !== "0") {
      currentInput = currentInput.slice(0, -1);
      if (currentInput === "") {
        currentInput = "0";
      }
      updateDisplay();
    }
  }