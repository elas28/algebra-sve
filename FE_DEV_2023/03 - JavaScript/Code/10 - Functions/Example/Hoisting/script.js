/**
 * Hoisting in JavaScript is a behavior in which a function or a variable can be used before declaration.
 * https://www.programiz.com/javascript/hoisting
 */

// using test before declaring
console.log(test);   // undefined
var test;

// The above program works and the output will be undefined. The above program behaves as
// using test before declaring
var test;
console.log(test); // undefined

// Since the variable test is only declared and has no value, undefined value is assigned to it.

/**
 * In terms of variables and constants, keyword var is hoisted and let and const does not allow hoisting.
 */

// program to display value
a = 5;
console.log(a);
var a; // 5

// In the above example, variable a is used before declaring it.
// And the program works and displays the output 5. The program behaves as:
// program to display value
var a;
a = 5;
console.log(a); // 5

// However in JavaScript, initializations are not hoisted.
// program to display value
console.log(a);
var a = 5;

// Same as
var a;
console.log(a);
a = 5;

// Function Hoisting
// A function can be called before declaring it.
// In the above program, the function greet is called before declaring it and the program shows the output. This is due to hoisting.

// program to print the text
greet();

function greet() {
    console.log('Hi, there.');
}

// However, when a function is used as an expression, an error occurs because only declarations are hoisted. For example;
// program to print the text
greet();

let greet = function () {
    console.log('Hi, there.');
}

/**
 * Note: Generally, hoisting is not performed in other programming languages like Python, C, C++, Java.
 * Hoisting can cause undesirable outcomes in your program. And it is best to declare variables and functions first before using them and avoid hoisting.
 * In the case of variables, it is better to use let than var.
 */