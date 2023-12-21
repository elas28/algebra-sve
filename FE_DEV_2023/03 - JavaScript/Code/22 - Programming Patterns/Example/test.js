// Uvoz funkcija iz drugog modula
const math = require('./script');

// Korištenje uvezenih funkcija
const result1 = math.add(5, 3);
console.log('Rezultat zbrajanja: ' + result1); // Output: 8

const result2 = math.subtract(10, 4);
console.log('Rezultat oduzimanja: ' + result2); // Output: 6
