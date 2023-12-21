// 1. Dodavanje h1 elementa
var h1 = document.createElement('h1');
h1.innerText = 'Hello world!';

/**
 * prepend je metoda koja se koristi za dodavanje jednog ili više HTML elemenata ili teksta na početak odabranog roditeljskog elementa.
 */
document.body.prepend(h1);

// 2. Novi div sa klasom info
var info = document.createElement('div');
info.setAttribute('class', 'info');
info.innerText = 'Hello, world!';

/**
 * nextSibling je svojstvo koje omogućava pristup sljedećem čvoru (elementu, tekstu, komentaru itd.) unutar istog roditeljskog elementa. Ovo svojstvo omogućava navigaciju između čvorova u istom nivou hijerarhije DOM-a.
 * 
 * Metoda insertBefore omogućava precizno umetanje novih elemenata ili čvorova prije određenog referentnog čvora unutar roditeljskog elementa.
 * 
 * Koristite insertBefore metodu za umetanje div elementa (info) prije određenog čvora unutar roditeljskog elementa. 
 * Kao drugi argument metode insertBefore, koristite description.nextSibling kako biste odabrali sljedeći čvor nakon elementa s klasom "description".
 */
var description = document.querySelector('.description');
document.body.insertBefore(info, description.nextSibling);

// 3. 5 praznih li elemenata
var ul = document.querySelector('ul');

for (var i = 0; i < 2; i++) {
    var li = document.createElement('li');
    ul.appendChild(li);
}
