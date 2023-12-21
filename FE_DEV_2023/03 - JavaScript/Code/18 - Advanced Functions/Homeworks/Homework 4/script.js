function math(number, operation) {
    return operation(number);
}

// Primjer korištenja:
function square(number) {
    return number * number;
}

function double(number) {
    return number * 2;
}

function sqrt(number) {
    if (number >= 0) {
        return Math.sqrt(number);
    } else {
        return 'You cannot calculate square root of a negative number';
    }
}

console.log(math(5, square));      // Ispis: 25
console.log(math(10, double));   // Ispis: 20
console.log(math(9, sqrt));      // Ispis: 3