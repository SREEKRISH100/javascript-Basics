let num = parseInt(prompt("Enter a number:"));
let rev = 0;
let temp = Math.abs(num);  // handle negative numbers safely

while (temp > 0) {
    let digit = temp % 10;         // get last digit
    rev = rev * 10 + digit;        // build reversed number
    temp = Math.floor(temp / 10);  // remove last digit
}

if (num < 0) {
    rev = -rev; // put back negative sign
}

console.log("Reversed Number:", rev);

