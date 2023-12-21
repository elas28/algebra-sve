// The Array.filter method is a built-in method in JavaScript that allows you to create a new array by filtering out elements from an existing array based on a specified condition. It takes a callback function as an argument, and this callback function is applied to each element of the array.

const words = ['apple', 'banana', 'kiwi', 'orange', 'grape'];

// Callback function: Filters out words with more than three characters
const filterShortWords = function (word) {
    return word.length <= 3;
};

// Using filter with the callback function
const shortWords = words.filter(filterShortWords);

console.log(shortWords);
// Output: ['kiwi']

// Use Arrow Functions
const words2 = ['apple', 'banana', 'kiwi', 'orange', 'grape'];

// Using filter with an arrow function
const shortWords2 = words.filter(word => word.length <= 3);

console.log(shortWords);
// Output: ['kiwi']
