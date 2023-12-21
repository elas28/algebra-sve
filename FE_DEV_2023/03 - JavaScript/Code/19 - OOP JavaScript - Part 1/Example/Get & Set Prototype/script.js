const animal = {
    makeSound() {
        console.log('Generic animal sound');
    }
};

const cat = {
    purr() {
        console.log('Purring...');
    }
};

// Set the prototype of the 'cat' object to 'animal'
Object.setPrototypeOf(cat, animal);

// Now 'cat' inherits from 'animal'
cat.makeSound(); // Outputs: Generic animal sound

// Get Prototype
// Set the prototype of the 'cat' object to 'animal'
Object.setPrototypeOf(cat, animal);

// Get the prototype of 'cat'
const catPrototype = Object.getPrototypeOf(cat);

// 'catPrototype' is now a reference to the 'animal' object
catPrototype.makeSound(); // Outputs: Generic animal sound
