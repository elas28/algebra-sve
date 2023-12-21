document.getElementById('p1').style.color = 'blue';

const para = document.createElement('p');

/**
 * createTextNode se koristi za stvaranje novog teksta čvora (text node) u HTML dokumentu. Text node predstavlja tekstualni sadržaj unutar HTML elemenata.
 */
const node = document.createTextNode('Am I new here? Yes I am!');

/**
 * appendChild se koristi za dodavanje čvora (elementa) kao djeteta drugog čvora. Ova metoda omogućava manipulaciju strukturom HTML dokumenta tako da možete dodavati nove elemente u postojeće HTML elemente.
 */
para.appendChild(node);

const element = document.getElementById('div1');
element.appendChild(para);

const p2 = document.getElementById('p2');
p2.remove();

let h1 = document.querySelector('h1');

/**
 * Svojstvo innerText omogućava pristup i manipulaciju vidljivim tekstualnim sadržajem unutar elementa. 
 * Čitanje teksta: Možete koristiti innerText za čitanje teksta unutar odabranog elementa. 
 * Promjena teksta: Možete koristiti innerText za postavljanje novog teksta unutar elementa.
 */
h1.innerText = 'Hello, class.';

document.querySelector('#div2').innerHTML = '<h1>I just added myself here.</h1>'
