let currentNum = "";
let previousNum = "";
let operator = "";

const currentDisplayNumber = document.querySelector(".currentNumber");
const previousDisplayNumber = document.querySelector(".previousNumber");

const clear = document.querySelector(".clear")
clear.addEventListener('click', clearCalculator())

const equal = document.querySelector(".equal");
equal.addEventListener("click", () => {
    if(currentNum != "" && previousNum != ''){
        calculate();
    }
})

const decimal = document.querySelector(".clear");

const numberButtons = document.querySelectorAll(".number")

const operators = document.querySelectorAll(".operator")


numberButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        handleNumber(e.target.textContent)
    })
})

function handleNumber(number){
    currentNum += number;
    currentDisplayNumber.textContent = currentNum
}

operators.forEach(btn => {
    btn.addEventListener('click', (e) => {
        handleOperator(e.target.textContent)
    })
})

function handleOperator(op){
    operator = op;
    previousNum = currentNum
    previousDisplayNumber.textContent = previousNum + " " + operator;
    currentNum = ""
    currentDisplayNumber.textContent ="";
}

function calculate(){
    previousNum  = Number(previousNum)
    currentNum  = Number(currentNum)
    if(operator ==="+"){
        previousNum = previousNum + currentNum;
    }else if (operator === "-"){
        previousNum = previousNum - currentNum
    }else if(operator === "x"){
        previousNum = previousNum * currentNum;
    }else if (operator === "/"){
        previousNum = previousNum / currentNum;
    }

    previousNum = previousNum.toString();
    displayResults();
}

function displayResults(){
    previousDisplayNumber.textContent = "";
    operator = ""
    if (previousNum.length <= 11){
        currentDisplayNumber.textContent = previousNum
    } else {
        currentDisplayNumber.textContent = previousNum.slice(0, 11) + "..."
    }
}

function clearCalculator(){
    currentNum = "";
    previousNum = '';
    operator = ""

    currentDisplayNumber.textContent = "0";
    previousDisplayNumber.textContent = "";
}