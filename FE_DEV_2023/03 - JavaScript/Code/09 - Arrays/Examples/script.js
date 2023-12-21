const words = ['hello', 'world', 'welcome'];

const array2 = new Array('eat', 'sleep');

// empty array
const myList = [];

// array of numbers
const numberArray = [2, 4, 6, 8];

// array of strings
const stringArray = ['eat', 'work', 'sleep'];

// array with mixed data types
const newData = ['work', 'exercise', 1, true];

/*
 * Access elements of an array
 */
const myArray = ['h', 'e', 'l', 'l', 'o'];

console.log(myArray[0]);  // "h"
console.log(myArray[1]); // "e"

/*
 * Add elements to array
 * The push() method adds an element at the end of the array.
 */
let dailyActivities = ['eat', 'sleep'];

// add an element at the end
dailyActivities.push('exercise');

console.log(dailyActivities); //  ['eat', 'sleep', 'exercise']


/*
 * Add elements to array
 * The unshift() method adds an element at the beginning of the array.
 */
let dailyActivities2 = ['eat', 'sleep'];

//add an element at the start
dailyActivities2.unshift('work');

console.log(dailyActivities2); // ['work', 'eat', 'sleep']

/*
 * Remove an Element from an Array
 * You can use the pop() method to remove the last element from an array. 
 * The pop() method also returns the returned value.
 */
let dailyActivities3 = ['work', 'eat', 'sleep', 'exercise'];

// remove the last element
dailyActivities3.pop();
console.log(dailyActivities3); // ['work', 'eat', 'sleep']

// remove the last element from ['work', 'eat', 'sleep']
const removedElement = dailyActivities3.pop();

//get removed element
console.log(removedElement); // 'sleep'
console.log(dailyActivities3);  // ['work', 'eat']

/*
 * Array length
 * You can find the length of an element (the number of elements in an array) using the length property.
 */
const dailyActivities4 = ['eat', 'sleep'];

// this gives the total number of elements in an array
console.log(dailyActivities4.length); // 2


/*
 * Array forEach
 * The forEach() method is used to iterate over an array.
 */
let students = ['John', 'Sara', 'Jack'];

// using forEach
students.forEach(myFunction);

function myFunction(item) {

    console.log(item);
}

// For Loop
const arrayItems = ['item1', 'item2', 'item3'];
const copyItems = [];

// using for loop
for (let i = 0; i < arrayItems.length; i++) {
    copyItems.push(arrayItems[i]);
}

console.log(copyItems);