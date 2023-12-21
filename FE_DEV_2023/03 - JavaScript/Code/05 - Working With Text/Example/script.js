const greet = 'Hello, my name is ';
const firstName = 'Nino';

user = greet + firstName;
console.log(user)

console.log('I have 25 ' + 'years');
console.log('I have' + ' ' + '\'3\' dogs');

console.log('Lorem ipsum dolor sit \namet consectetur adipiscing elit.');

// Length
const str = 'Life, the universe and everything.';
console.log(str.length); // 34

// CharAt
const sentence = 'The quick brown fox jumps over the lazy dog.';
console.log(sentence.charAt(6)) // i - spaces are ignored

// Trim
const greeting = '      Hello World!        ';
console.log(greeting.trim()); // Removes empty spaces

// IndexOf
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

const searchTerm = 'dog';
const indexOfFirst = paragraph.indexOf(searchTerm);

console.log('Searc term found at ' + indexOfFirst) // 40 - shows where search term starts, ignores empty spaces

const secondTerm = paragraph.indexOf(searchTerm, (indexOfFirst + 1));

console.log('2nd search term found at ' + secondTerm) // 52 - where the 2nd dog is found

// toUpperCase & toLowerCase
const sentence2 = 'The quick brown FOX jumps over the lazy DOG.';
console.log(sentence2.toUpperCase());
console.log(sentence2.toLowerCase());