const add = (a, b) => {
    return Number(a) + Number(b);
};

const subtract = (a, b) => {
    return Number(a) - Number(b);
};

const multiply = (a, b) => {
    return Number(a) * Number(b);
};

const divide = (a, b) => {
    return Number(a) / Number(b);
};

const operate = (a, b, operation) => {
    if (operation === '+') {
        return add(a,b);
    }

    else if (operation === '-') {
        return subtract(a,b);
    }

    else if (operation === '*') {
        return multiply(a,b);
    }

    else if (operation === '/') {
        return divide(a,b);
    }
};

const screen = document.querySelector(".screen");

let total = 0;
let runningTotal = undefined;

const updateDisplay = (num, set=false) => {

    if (set) {
       screen.textContent = runningTotal;
       total = 0;
       return;
    }

    if (num == 'next') {
        screen.textContent = '0';
        total = 0;
        return;
    }
    if (num == 'C') {
        screen.textContent = '0';
        total = 0;
        runningTotal = undefined;
        return;
    }
    if (screen.textContent == '0') { 
        screen.textContent = num; 
        total = num;
    }
    else {
        screen.textContent += num;
        total = Number(screen.textContent);
    }
};

const mainFlex = document.querySelector(".main-flex");

let currOperator = '';

mainFlex.addEventListener('click', (e) => {
    let display = e.target.textContent;
    
    if (!isNaN(display)) updateDisplay(display);

    else if (display == 'C') updateDisplay('C');

    else {
        if (display != '=') currOperator = display;
        if (runningTotal != undefined) {
            total = operate(runningTotal, total, currOperator);
        }

        runningTotal = total;
        
        if (display == '=') updateDisplay(runningTotal, true);
        
        else updateDisplay('next');
    }

    console.log(runningTotal);
    console.log(total);
});