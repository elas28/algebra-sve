function outerFunction(outerVariable) {
    // innerFunction: I'm inside this outer function it has this outer variable, so I will remember it at all times, even if the function that defined it is no longer executing.
    const outer2 = 'Hi';
    return function innerFunction(innerVariable) {
        console.log('Outer variable: ' + outerVariable);
        console.log('Inner variable: ' + innerVariable);
        console.log(outer2);
    }
}

// outerFunction()('outside');
const newFunction = outerFunction('Outer');
newFunction('Inner');

// Zapamtite, kada imate funkciju koja je definirana unutar druge funkcije, unutarnja funkcija ima pristup varijablama i scopeu vanjske funkcije čak i ako se vanjska funkcija prestala izvršavati i te varijable više ne postoje.
function outerFunction(url) {
    fetch(url).then(() => {
        console.log(url)
    })
}