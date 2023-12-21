var a = 6;
var b = '5';
console.log(typeof (a)); // number


// ARITHMETIC
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log((a * b).toFixed(2)); // Convert a number to string, keeping only two decimals
console.log(a / b);
console.log(a / 0); // Infinity
console.log(a / Infinity); // 0
console.log(a % 6);

// COMPARISON
console.log(a == b); // Equal operator
console.log(a === b); // Strict equal
console.log('' == 0); // Falsy values

// LOGICAL
console.log((5 < 6) && (6 == 6)); // true
console.log((5 < 6) || (6 == 6)); // true 
console.log(!(5 < 6)); // false

// CONDITIONAL (TERNARY)
console.log(1 == 1 ? 'This is equal!' : 'This is not equal!'); // This is equal!
console.log(1 === '1' ? 'This is equal!' : 'This is not equal!'); // This is not equal!