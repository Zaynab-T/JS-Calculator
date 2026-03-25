// log numbers
let myButtons = document.getElementsByClassName("number");
let expression = "";

for (let button of myButtons) {
    button.addEventListener("click", function () {
        expression += button.textContent;
        console.log(expression);
    });
}

// backspace and clear all
let backspaceBtn = document.getElementById("backspace");

backspaceBtn.addEventListener("click", function () {
    if (expression.length > 0) {
        expression = expression.substring(0, expression.length - 1);
        console.log(expression);
    }
});

let clearAllBtn = document.getElementById("clearAll");

clearAllBtn.addEventListener("click", function () {
    expression = "";
    console.log(expression);
});

// display operations
let operationBtns = document.getElementsByClassName("operation");

for (let button of operationBtns) {
    button.addEventListener("click", function () {
        expression += button.textContent;
        console.log(expression);
    });
}