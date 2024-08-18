const result = document.getElementById("result");

function display(input){

    result.value = result.value + input;

}

function clearScreen(){

    result.value = "";
}

function calculate(){

    let expression = result.value;
    let numbers = expression.split(/[\+\-\*\/]/).map(Number); // Split numbers by operators
    let operators = expression.split(/[0-9\.]+/).filter(op => op); // Extract operators

    let total = numbers[0];
    
    for (let i = 0; i < operators.length; i++) {
        let operator = operators[i];
        let nextNumber = numbers[i + 1];
        
        if (operator === "+") {
            total += nextNumber;
        } else if (operator === "-") {
            total -= nextNumber;
        } else if (operator === "*") {
            total *= nextNumber;
        } else if (operator === "/") {
            total /= nextNumber;
        }
    }

    result.value = total;
}

