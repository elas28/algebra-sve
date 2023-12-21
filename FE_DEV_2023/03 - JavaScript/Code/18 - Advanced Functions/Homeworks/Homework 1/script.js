/**
 * U ovom rješenju, funkcija filterArray uzima niz brojeva i funkciju filterFunction kao argument. Funkcija zatim prolazi kroz svaki element niza i primjenjuje filterFunction na svaki element. 
 * 
 * Ako funkcija vraća true, element se dodaje u novi niz filteredArray. Na kraju, funkcija vraća taj novi niz. 
 * U primjeru korištenja, možete vidjeti kako se različite funkcije za filtriranje primjenjuju na niz brojeva.
 */

function filterArray(arr, filterFunction) {
    const filteredArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (filterFunction(arr[i])) {
            filteredArray.push(arr[i]);
        }
    }

    return filteredArray;
}

// Primjer korištenja:
function isEven(number) {
    return number % 2 === 0;
}

function isPositive(number) {
    return number > 0;
}

const brojevi = [1, 2, 3, 4, 5, -1, -2, -3, 0];

const parniBrojevi = filterArray(brojevi, isEven);
console.log(parniBrojevi); // Ispis: [2, 4, -2, 0]

const pozitivniBrojevi = filterArray(brojevi, isPositive);
console.log(pozitivniBrojevi); // Ispis: [1, 2, 3, 4, 5]
