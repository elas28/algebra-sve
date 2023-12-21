let age = 25;

if (age > 18) {
    // Jednostavan blok kod koji ispisuje u konzolu
    console.log('User is of legal drinking age.');
} else {
    console.log('User is not of legal drinking age. DO NOT SERVE HIM!')
}

// If, Else, Else If
const gender = 'Male';

if (gender == 'Male') {
    console.log('User is a male');
} else if (gender == 'Female') {
    console.log('User is a female');
} else {
    console.log('User gender unknown');
}

// If, Else with a range
let customerAge = 17;

// Infinity JavaScript is a special value in JavaScript which is bigger than any number value
if (customerAge >= 18 && customerAge <= Infinity) {
    // Jednostavan blok kod koji ispisuje u konzolu
    console.log('User is of legal drinking age.');
} else {
    console.log('WARNING: This user is not of legal drinking age. DO NOT SERVE HIM!')
}

// Switch
const fruit = 'Oranges';

switch (fruit) {
    case 'Oranges':
        console.log('User has bought oranges');
        break;
    case 'Mangoes':
        console.log('User has bought mangoes');
        break;
    case 'Papayas':
        console.log('User has bought papayas');
        break;
    default:
        console.log('I have no idea what user has bought');
        break;
}

// Switch to get days of the week
// Date is a built in JS object - it will output a date and time in ISO 8601 format
// 2023-09-15T14:31:43.812Z
switch (new Date().getDay()) {
    case 0:
        console.log('Today is Sunday.')
        break;

    case 1:
        console.log('Today is Monday. Ugh.')
        break;

    case 2:
        console.log('Today is Tuesday.')
        break;

    case 3:
        console.log('Today is Wednesday.')
        break;

    case 4:
        console.log('Today is Thursday.')
        break;

    case 5:
        console.log('Today is Friday. Yay!')
        break;

    case 6:
        console.log('Today is Saturday.')
        break;
}


/* 
 * For Loop (i = iterable)
 * let i = declare and initialise the variable i = 1
 * i < 10 = complete this block of code as long as i is smaller than 10
 * i++ = every time you run this block code, increase i by 1 (i++)
 */

for (let i = 1; i < 10; i++) {
    console.log('Current counter is ' + i)
}

let count = 0; // Inicijalizacija i deklaracija varijable count
do { // Do = NAPRAVI OVO (kod ispod)
    console.log(count) // Console logaj COUNT
    count++; // Povećaj count za 1
} while (count < 10); // DOKLE GOD je COUNT < 10

const numberOfGreetings = 3;
let welcomeMessage = "Hello";
for (let i = 0; i < numberOfGreetings; i++) {
    console.log(welcomeMessage);
}