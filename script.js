// Get calculator display
const display = document.getElementById("display");

let currentInput = "";
let previousInput = "";
let operator = null;


// Add numbers to display
function appendNumber(number) {
    if (number === "." && currentInput.includes(".")) {
        return;
    }

    currentInput += number;
    updateDisplay();
}


// Update calculator screen
function updateDisplay() {
    display.value = currentInput;
}


// Choose operation
function chooseOperator(op) {

    if (currentInput === "") {
        return;
    }

    if (previousInput !== "") {
        calculate();
    }

    operator = op;
    previousInput = currentInput;
    currentInput = "";
}


// Perform calculation
function calculate() {

    let result;

    let firstNumber = Number(previousInput);
    let secondNumber = Number(currentInput);

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        display.value = "Error";
        return;
    }


    switch(operator) {

        case "+":
            result = firstNumber + secondNumber;
            break;


        case "-":
            result = firstNumber - secondNumber;
            break;


        case "*":
        case "×":
            result = firstNumber * secondNumber;
            break;


        case "/":
        case "÷":

            if (secondNumber === 0) {
                display.value = "Cannot divide by 0";
                return;
            }

            result = firstNumber / secondNumber;
            break;


        default:
            return;
    }


    currentInput = result.toString();
    previousInput = "";
    operator = null;

    updateDisplay();
}


// Clear calculator
function clearDisplay() {

    currentInput = "";
    previousInput = "";
    operator = null;

    display.value = "";
}


// Delete last number
function deleteNumber() {

    currentInput = currentInput.slice(0, -1);

    updateDisplay();
}


// Percentage function
function percentage() {

    if (currentInput !== "") {

        currentInput = 
        (Number(currentInput) / 100).toString();

        updateDisplay();
    }
}



// Keyboard support
document.addEventListener("keydown", function(event) {

    let key = event.key;


    if (!isNaN(key)) {

        appendNumber(key);

    }


    if (key === ".") {

        appendNumber(".");

    }


    if (
        key === "+" ||
        key === "-" ||
        key === "*" ||
        key === "/"
    ) {

        chooseOperator(key);

    }


    if (key === "Enter" || key === "=") {

        calculate();

    }


    if (key === "Backspace") {

        deleteNumber();

    }


    if (key === "Escape") {

        clearDisplay();

    }

});


// Prevent calculator errors
window.onerror = function() {

    display.value = "Error";

};
