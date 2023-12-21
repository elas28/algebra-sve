const person = {};

person.name = 'Nino';
person.age = 26;

console.log(person.name);
console.log(person.age);
console.log(person.gender);

console.log(person.valueOf); // Radi? Da, zato što je naslijeđeno od Objekta - object constructor has it

const dogs = ['Geko', 'Vito', 'Ella']; // Prototype of an Array

// String inheriting from Object, name inheriting from String
// Object is the base for our chain
const fName = 'Nino';
fName.__proto__;

// Our own chain
const human = {
    kind: 'Human'
}

// The way to go: developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create
const nino = Object.create(human);
nino.age = 26;
nino.kind;

const ivana = Object.create(nino);
ivana.age = 35;

// PROTOTYPE - For Constructor Functions

// Constructor function for creating Person objects
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
// Adding a method to the prototype of Person objects
Person.prototype.fullName = function () {
    return this.firstName + ' ' + this.lastName;
};
// Creating two instances of the Person object
var person1 = new Person('John', 'Doe');
var person2 = new Person('Jane', 'Doe');
// Calling the method from the prototype on the instances
console.log(person1.fullName());// Output: 'John Doe'
console.log(person2.fullName());// Output: 'Jane Doe'
