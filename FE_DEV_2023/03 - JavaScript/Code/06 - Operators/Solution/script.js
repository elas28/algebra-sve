var x = 'Lorem ipsum',
    y = 2345,
    z = '2345'
q = false;

// 1. 
var trueFalse = !!'false' == !!'true'; // true

// 2. 

/* 
 * 
 * Izraz console.log(q || x || y || z); je JavaScript izraz koji koristi operator logičkog "ili" (||) za procjenu vrijednosti varijabli q, x, y i z, a zatim 
 * ih ispisuje u konzoli.
 * 
 * JavaScript počinje procjenjivati izraze s lijeva na desno.
 * Ako je vrijednost varijable q istinita (truthy), tada će ta vrijednost biti rezultat izraza, a JavaScript će prestati s daljnjim procjenama i ispisati tu 
 * vrijednost u konzoli.
 * 
 * Ako je vrijednost q lažna (falsy), JavaScript će se prebaciti na procjenu varijable x. Ako je x istinita, tada će ta vrijednost biti rezultat izraza i bit 
 * će ispisana u konzoli.
 *
 * Ako su i q i x lažni, JavaScript će preći na procjenu varijable y, a ako je y istinita, njena vrijednost će biti rezultat i bit će ispisana u konzoli.
 *
 * Na kraju, ako su sve varijable q, x, y i z lažne, JavaScript će se prebaciti na procjenu varijable z, a ako je z istinita, njena vrijednost će biti 
 * rezultat i bit će ispisana u konzoli.
 */
console.log(q || x || y || z); // Lorem ipsum

// 3. 
var num = 6;
num--;
console.log(num);

// 4.
const price = 26.5;
const taxRate = 0.082;

let totalPrice = price + (price * taxRate);
totalPrice.toFixed(2);

console.log('Total:', totalPrice);
