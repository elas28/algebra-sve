// __proto__
// __proto__ is a property of every variable that's pointing to the parent object that it's inheriting from
const person = {
    name: 'John',
};

const employee = {
    jobTitle: 'Developer',
};

employee.__proto__ = person; // Setting the prototype of 'employee' to 'person'

console.log(employee.name); // Output: 'John'

// Prototype
// Prototype is a property on constructor function that contains all the stuff that will be inherited by it's instance
function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function () {
    console.log(`Hello, my name is ${this.name}`);
};

const person1 = new Person('Alice');
const person2 = new Person('Bob');

person1.sayHello(); // Output: 'Hello, my name is Alice'
person2.sayHello(); // Output: 'Hello, my name is Bob'
