const currDisplay = document.querySelector('.curr-display');
const prevDisplay = document.querySelector(".prev-display");
const num = document.querySelectorAll('.num');
const operands = document.querySelectorAll('.operation');
const clearBtn = document.querySelector(".clear");
const delBtn = document.querySelector('.del');
const equalBtn = document.querySelector('.equal');

let operation;

function appendNumber(num){
    if (num === "." && currDisplay.innerText.includes(".")) return; {
        currDisplay.innerText += num;
    }
}

function chooseOperation (operands){
    if (currDisplay.innerText === "") return;
    compute(operands);
    operation = operands;
    currDisplay.innerText += operands;
    prevDisplay.innerText = currDisplay.innerText;
    currDisplay.innerText = "";
}

function clearDisplay(){
    currDisplay.innerText = "";
    prevDisplay.innerText = "";
}

