let display = document.querySelector(".display");
display.innerText = '';

let boolAC = false;
let AC = document.querySelector(".AC");
let del = document.querySelector(".DEL");
let numbers = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "zero"];
let operators = ["add", "minus", "mul", "divide", "percent"];
let firstNumber = null;
let secondNumber = null;
let operations = "";
let equal = document.querySelector(".equal");

AC.addEventListener("click", () => {
    if (boolAC) {
        display.innerText = "------OFF------";
        boolAC = false;
        
    } 
    else {
        display.innerText = "-------ON-------";
        boolAC = true;
        del.addEventListener("click", () => {
    display.innerText = display.innerText.substring(0, display.innerText.length - 1);
            });


    for (let i of numbers) {
    let but = document.querySelector(`.${i}`);
    let a = but.textContent;
        but.addEventListener("click", () => {
        display.innerText += a;
        });
    }



for (let i of operators) {
    let but = document.querySelector(`.${i}`);
    but.addEventListener("click", () => {
        if (display.innerText !== "") {
            firstNumber = parseFloat(display.innerText);
            display.innerText = "";
            operations = but.textContent;
        }
    });
}


equal.addEventListener("click", () => {
    if (display.innerText !== "" && firstNumber !== null) {
        secondNumber = parseFloat(display.innerText);
        let text = 0;
        switch (operations) {
            case '+':
                text = firstNumber + secondNumber;
                break;
            case '-':
                text = firstNumber - secondNumber;
                break;
            case '*':
                text = firstNumber * secondNumber;
                break;
            case '/':
                text = firstNumber / secondNumber;
                break;
            case '%':
                text = firstNumber % secondNumber;
                break;
        }
        display.innerText = text.toFixed(7);
        firstNumber = null;
        secondNumber = null;
        operations = "";
    }
});

let decimal = document.querySelector(".decimal");
decimal.addEventListener("click", () => {
    if (!display.innerText.includes(".")) {
        display.innerText += ".";
    }
});


}
    setTimeout(() => {
        display.innerText = '';
    }, 1500);
});
