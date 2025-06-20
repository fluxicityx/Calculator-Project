let currentNum = "";
let previousNum = "";
let operator = "";

const currentDisplayNumber = document.querySelector(".currentNumber");
const previousDisplayNumber = document.querySelector(".previousNumber");

const clear = document.querySelector(".clear")
clear.addEventListener('click', clearCalculator)

const equal = document.querySelector(".equal");
equal.addEventListener("click", () => {
    if(currentNum != "" && previousNum != ''){
        calculate();
    }
})

const decimal = document.querySelector(".decimal");

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

function handleOperator(op) {
  if (previousNum === "") {
    previousNum = currentNum;
    operatorCheck(op);
  } else if (currentNum === "") {
    operatorCheck(op);
  } else {
    calculate();
    operator = op;
    currentDisplayNumber.textContent = "0";
    previousDisplayNumber.textContent = previousNum + " " + operator;
  }
}

function operatorCheck(text) {
  operator = text;
  previousDisplayNumber.textContent = previousNum + " " + operator;
  currentDisplayNumber.textContent = "0";
  currentNum = "";
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
    currentNum = ""
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

