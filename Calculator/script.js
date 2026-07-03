let firstNum = '';
let secondNum = '';
let operator = null;
const output = document.getElementById('output');
const equalsBtn = document.getElementById('equals');
const clearBtn = document.getElementById('clear');

function handleNumClick(event) {
    const currentNum = event.target.getAttribute('data-value');

    if (operator == null) {
        firstNum += currentNum;
        output.innerText = firstNum;
    } else {
        secondNum += currentNum;
        output.innerText = secondNum;
    }
}

document.querySelectorAll('.number').forEach(button => {
    button.addEventListener('click', handleNumClick);
})

function handleOperatorClick(event) {
    if (operator == null) {
        operator = event.target.getAttribute('data-value');
    }
}

document.querySelectorAll('.operator').forEach(button => {
    button.addEventListener('click', handleOperatorClick);
})

function calculate() {
    const num1 = parseFloat(firstNum);
    const num2 = parseFloat(secondNum);
    let result = 0;
    

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case '*':
            result = num1 * num2;
            break;
    
        default:
            break;
    }

    output.innerText = result;

    firstNum = result;
    secondNum = '';
    operator = null;
}

equalsBtn.addEventListener('click', calculate);

function clear() {
    output.innerText = 0;
    firstNum = '';
    secondNum = '';
    operator = null;
}

clearBtn.addEventListener('click', clear);