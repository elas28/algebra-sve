// Array.map is a built-in method in JavaScript that allows you to create a new array by applying a function to each element of an existing array. It is a convenient way to transform the elements of an array without modifying the original array. The map method takes a callback function as an argument, and this callback function is applied to each element of the array.

// Array.map: This is a method in JavaScript that you can use on arrays.

const numbers = [1, 2, 3, 4, 5];

// Callback function: Takes a number and doubles it
const double = function (num) {
    return num * 2;
};

// Using map with the callback function
const doubledNumbers = numbers.map(double);

console.log(doubledNumbers);
// Output: [2, 4, 6, 8, 10]

// In this case, double is the callback function. It defines what should be done with each number in the array. The map method takes care of applying this function to every element in the array and creating a new array with the results.

// So, in simple terms, a callback function for Array.map is like a set of instructions you give to map on how to transform each item in the array.

// To make it easier, use arrow functions
const numbers2 = [1, 2, 3, 4, 5];
const doubledNumbers2 = numbers.map(num => num * 2);

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]