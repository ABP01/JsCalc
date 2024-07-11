const currDisplay = document.querySelector('.curr-display');
const prevDisplay = document.querySelector(".prev-display");
const nums = document.querySelectorAll('.num');
const operands = document.querySelectorAll('.operation');
const clearBtn = document.querySelector(".clear");
const delBtn = document.querySelector('.del');
const equalBtn = document.querySelector('.equal');

let operation;

function appendNumber(num){
    if (num === "." && currDisplay.innerText.includes(".")) return;
    currDisplay.innerText += num;
}

function chooseOperation (operand){
    if (currDisplay.innerText === "") return;
    operation = operand;
    currDisplay.innerText += operand;
    prevDisplay.innerText = currDisplay.innerText;
    currDisplay.innerText = "";
}

function clearDisplay(){
    currDisplay.innerText = "";
    prevDisplay.innerText = "";
}

function compute() {
    let result;
    const previousValue = parseFloat(prevDisplay.innerText);
    const currentValue = parseFloat(currDisplay.innerText);

    if (isNaN(previousValue) || isNaN(currentValue)) return;

    switch (operation) {
        case "+":
            result = previousValue + currentValue;
            break;
        case "-":
            result = previousValue - currentValue;
            break;
        case "*":
            result = previousValue * currentValue;
            break;
        case "/":
            result = previousValue / currentValue;
            break;
        default:
            return;    
    }

    currDisplay.innerText = result;
    prevDisplay.innerText = "";
}

nums.forEach((num) => {
    num.addEventListener("click", () => {
        appendNumber(num.innerText);
    });
});

operands.forEach((operand) => {
    operand.addEventListener("click", () => {
        chooseOperation(operand.innerText);
    });
});

clearBtn.addEventListener("click", () => {
    clearDisplay();
});

equalBtn.addEventListener("click", compute);

delBtn.addEventListener("click", () => {
    currDisplay.innerText = currDisplay.innerText.slice(0, -1);
});