// index.js

// Uvoz modula
const StepCounter = require('./script');

// Koristite funkcije iz modula
StepCounter.walk(10); // Hodali ste 10 koraka.
StepCounter.walk(5);  // Hodali ste 5 koraka.
console.log('Ukupno koraka: ' + StepCounter.getTotalSteps()); // Ukupno koraka: 15
