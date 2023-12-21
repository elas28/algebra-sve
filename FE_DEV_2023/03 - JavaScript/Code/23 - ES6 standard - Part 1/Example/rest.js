// Prikupljanje viška argumenata u funkciji
// for...of petlja u JavaScriptu koristi se za iteriranje kroz vrijednosti niza (ili drugih iterabilnih objekata) kako bi se izvršile određene operacije s tim vrijednostima

// Rest operator, označen kao "..."(tri točke), je operator u JavaScriptu koji omogućava prikupljanje preostalih argumenata ili elemenata niza u jednom objektu.Rest operator se obično koristi u deklaracijama funkcija i destructuringu nizova i objekata.

function zbrajanje(...brojevi) {
    let rezultat = 0;
    for (let broj of brojevi) {
        rezultat = rezultat + broj;
    }
    return rezultat;
}

console.log(zbrajanje(1, 2, 3, 4, 5)); // Ispisuje 15

// Prikupljanje preostalih elemenata u nizu:
const [prvi, drugi, ...ostali] = [1, 2, 3, 4, 5];

console.log(prvi); // Ispisuje 1
console.log(drugi); // Ispisuje 2
console.log(ostali); // Ispisuje [3, 4, 5]
// Ovdje, ...rest prikuplja preostale elemente niza u nizu rest. Prva dva elementa su dodijeljena varijablama prvi i drugi, a ostatak se prikuplja u nizu ostali.

// Destrukturiranje objekta
const person = {
    name: 'John',
    age: 30,
    country: 'USA',
};

const { name, ...rest } = person;
console.log(name); // Output: 'John'
console.log(rest); // Output: { age: 30, country: 'USA' }

