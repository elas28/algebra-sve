/**************************************************
 * CLASSES
**************************************************/

// Private fields
class Foo {
    #private = 123;
    constructor() {
        console.log(this.#private);
    }
}
const newFoo = new Foo();
//console.log(newFoo.#private);

console.log(newFoo.private);

/**************************************************
 * OVERLOADING DEFAULT METHODS
**************************************************/
class Bird {
    fly() { }
}

class Pinguin extends Bird {
    fly() {
        throw Error('Pinguins cant fly');
    }
}

const pinguin = new Pinguin();
console.log(pinguin.fly());

/**************************************************
 * SUPER
 * The super keyword is used within class constructors and methods to call corresponding methods and access properties of a superclass (parent class). It is particularly useful in situations where you have a class that inherits from another class (subclasses and superclasses), allowing you to invoke the parent class's constructor or methods while adding or overriding behavior in the subclass. The super keyword is primarily used in the context of class inheritance and extends the functionality provided by the extends keyword.
**************************************************/
class Foo {
    constructor(name) {
        this.name = name;
    }

    getNameSeparator() {
        return '-';
    }
}

class FooBar extends Foo {
    constructor(name, index) {
        super(name);
        this.index = index;
    }

    getFullName() {
        return this.name + super.getNameSeparator() + this.index;
    }
}

const firstFooBar = new FooBar('foo', 1);

console.log(firstFooBar.name);
// Expected output: 'foo'

console.log(firstFooBar.getFullName());
// Expected output: 'foo-1'

/**************************************************
 * STATIC
 * The static keyword is used within a class definition to declare static methods and static properties. Static methods and properties are associated with the class itself, rather than with instances of the class. This means that you can call a static method or access a static property without needing to create an instance of the class.
**************************************************/

class MyClass {
    static staticMethod() {
        console.log('This is a static method.');
    }
}

// Calling a static method
MyClass.staticMethod(); // Outputs: "This is a static method."
