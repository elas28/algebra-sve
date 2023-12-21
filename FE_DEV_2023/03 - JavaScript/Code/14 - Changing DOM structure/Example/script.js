// Change background color on load
window.onload = function () {
    console.log("Page fully loaded");
    document.body.style.background = 'gray';
}

// Set background function
function setBackground() {
    document.body.style.background = 'azure';
}

// Change color with attribute as the name of the color
function changeColor(newColor) {
    const elem = document.getElementById('main');
    elem.style.color = newColor;
}

// Change display property of an element with an ID main to "none"
function hideEverything() {
    document.getElementById('main').style.display = 'none';
}

// Get values from input fields upon clicking button submit
function submitForm() {
    console.log(document.getElementById('name').value)
    console.log(document.getElementById('surname').value)
}

// Check how many buttons we have inside of an element with ID main
function checkTags() {
    const main = document.getElementById('main');
    const tags = main.getElementsByTagName('button');

    const num = tags.length;
    alert(`There are ${num} buttons in #main`);
}

// Console log various stuff
function getEverything() {
    const klasa = document.querySelector('.footer');
    const id = document.querySelector('#footer');
    const name = document.querySelector("input[name='footer']");
    console.log(klasa)
    console.log(id)
    console.log(name)
}

// Anonymous self-invoking function that will console.log text inside all buttons
(function () {
    var buttons = document.querySelectorAll('button'); // Dobivanje NodeList-a svih <button> elemenata

    for (var i = 0; i < buttons.length; i++) {
        console.log(buttons[i].textContent); // Prikazivanje teksta svakog <button> elementa
    }
})();

// Creating a new element (div)
function newElement() {
    // Stvaranje novog <div> elementa
    var div = document.createElement('div');

    // Postavljanje nekih svojstava i atributa za novi element
    div.innerText = 'Ovo je novi div! :)'; // Postavljanje teksta unutar div-a
    div.className = 'new-div'; // Postavljanje klase div-a
    div.id = 'new-div'; // Postavljanje ID-a div-a

    // Dodavanje novog elementa u postojeći element na stranici
    var parent = document.getElementById('main');
    parent.appendChild(div);
}

/**
 * Ovaj kod će prvo dohvatiti element koji želite ukloniti pomoću getElementById, zatim će dohvatiti roditeljski element tog elementa i na kraju će koristiti removeChild metodu da bi ga uklonili iz roditeljskog elementa.
 * 
 * U prvom primjeru koristimo var parent = div.parentNode; kako bismo dohvatili referencu na roditeljski element elementa koji želimo ukloniti. To je potrebno jer removeChild metoda zahtijeva da specificirate roditeljski element iz kojeg želite ukloniti dijete.
 * 
 */

function removeElement() {
    // Dohvaćamo element koji želimo ukloniti
    var div = document.getElementById('new-div');

    // Dohvaćamo roditeljski element elementa koji želimo ukloniti
    var parent = div.parentNode;

    // Uklanjamo element iz roditeljskog elementa
    parent.removeChild(div);
}

function removeElementWithoutParentNode() {
    // Dohvaćamo element koji želimo ukloniti
    var id = document.getElementById('new-div');

    // Uklonite element iz DOM-a
    id.remove();
}

// parentNode vam omogućava pristup roditeljskom elementu (nadređenom elementu) trenutnog elementa
var child = document.querySelector('p');
var parent = child.parentNode;
console.log(parent); // Ispisuje "roditelj"


/**
 * childNodes vam omogućava pristup listi čvorova koji su direktna djeca tog elementa.
 * Vraća NodeList objekt koji sadrži svu direktnu djecu tog elementa, uključujući tekstualne čvorove, komentare i druge HTML elemente.
 */
var lista = document.getElementById('mojaLista');
var children = lista.childNodes;

// Ispisuje broj čvorova
console.log(children.length); // Ispisuje 7

// Pristup pojedinim elementima
console.log(children[1].innerText); // Ispisuje "Prva stavka"


/**
 * innerText was non-standard, textContent was standardized earlier.
 * 
 * innerText returns the visible text contained in a node, while textContent returns the full text. For example, on the following HTML <span>Hello <span style="display: none;">World</span></span>, innerText will return 'Hello', while textContent will return 'Hello World'.
 */