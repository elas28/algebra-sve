/**************************************************
 * BIND NAMINGS
**************************************************/

// Implicit Binding
const person = {
    name: 'Harry',
    greet: function () {
        console.log(`Hello, ${this.name}`);
    },
};
person.greet();

// Explicit Binding
function greet() {
    console.log(`Hello ${this.name}`);
}

const person1 = { name: 'Ron' };
greet.call(person1); // or apply

// Default Binding
window.name = 'Harry';
function greet() {
    console.log(`Hello, ${this.name}`);
}
greet();

/**************************************************
 * BIND
**************************************************/

function multiply(x, y) {
    console.log({
        x,
        y,
    });
    return `${this.name} have ${x * y} points`;
}

const person2 = {
    name: 'Harry',
};

const person3 = {
    name: 'Ron',
};

const two = multiply.bind(person2, 2);
const three = multiply.bind(person3, 3);
///.....

console.log(two(3));
console.log(three(10));

/**************************************************
 * CALL
**************************************************/

const person4 = {
    name: 'Harry',
};

const person5 = {
    name: 'Ron',
};

function greet(greeting, other) {
    console.log(`${greeting}, ${this.name}`);
    console.log(`${other}, ${this.name}`);
}

greet.call(person4, 'Hello', 'Hi');
greet.call(person5, 'Hello', 'My name is');

greet.apply(person4, ['Hello', 'Hi']);

function greet(name) {
    console.log(`Hello, ${name}! My name is ${this.name}.`);
}

const person6 = {
    name: 'John',
};

// Using the call() method to invoke the greet function with 'person' as the 'this' context
greet.call(person6, 'Alice'); // Output: Hello, Alice! My name is John.