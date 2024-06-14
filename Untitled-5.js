// script.js
document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.button');
    const display = document.getElementById('display');
    let currentInput = '0';
    let operator = null;
    let previousInput = null;

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const value = this.getAttribute('data-value');

            if (value === 'C') {
                currentInput = '0';
                operator = null;
                previousInput = null;
                display.textContent = currentInput;
                return;
            }

            if (value === '=') {
                if (operator && previousInput !== null) {
                    currentInput = evaluate(previousInput, currentInput, operator);
                    operator = null;
                    previousInput = null;
                }
                display.textContent = currentInput;
                return;
            }

            if (this.classList.contains('operator')) {
                if (operator && previousInput !== null) {
                    currentInput = evaluate(previousInput, currentInput, operator);
                }
                operator = value;
                previousInput = currentInput;
                currentInput = '0';
                display.textContent = previousInput;
                return;
            }

            if (currentInput === '0') {
                currentInput = value;
            } else {
                currentInput += value;
            }

            display.textContent = currentInput;
        });
    });

    function evaluate(a, b, operator) {
        a = parseFloat(a);
        b = parseFloat(b);
        switch (operator) {
            case '+':
                return (a + b).toString();
            case '-':
                return (a - b).toString();
            case '*':
                return (a * b).toString();
            case '/':
                return (a / b).toString();
            default:
                return b;
        }
    }
});