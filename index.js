// Color Flipper
const body = document.getElementsByTagName("body")[0];

function setColor(name) {
    body.style.backgroundColor = name;
}

function randomColor() {
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);
    const color = `rgb(${red},${green},${blue})`;
    body.style.backgroundColor = color;
}

// Palindrome Checker
function reverseString(str) {
    return str.split("").reverse().join("");
}

function checkPalindrome() {
    const value = document.getElementById("palindrome-input").value;
    const reverse = reverseString(value);
    const result = document.getElementById("palindrome-result");

    if (value === reverse) {
        result.innerText = "PALINDROME";
    } else {
        result.innerText = "NOT PALINDROME";
    }

    document.getElementById("palindrome-input").value = "";
}

// Prime Checker
function checkPrime() {
    const num = parseInt(document.getElementById("prime-input").value);
    const result = document.getElementById("prime-result");

    if (isNaN(num)) {
        result.innerText = "Please enter a valid number.";
        return;
    }

    if (num <= 1) {
        result.innerText = `${num} is not a prime number.`;
        return;
    }

    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    result.innerText = isPrime ? `${num} is a prime number.` : `${num} is not a prime number.`;
}

function clearPrime() {
    document.getElementById("prime-input").value = "";
    document.getElementById("prime-result").innerText = "Result";
}

// Trigger random color on load
randomColor();
