let h1 = document.querySelector('h1');
let info = document.querySelector('.info');
let footer = document.querySelector('footer');
let description = document.querySelector('.description');

let rivers = ['Mrežnica', 'Korana', 'Kupa', 'Dobra', 'Karlovačko'];

h1.innerText = 'Karlovac';
description.innerHTML = 'Grad na <strong>5 rijeka</strong>';
info.innerText = 'Peta je piva.';

for (let i = 0; i < 5; i++) {
	footer.querySelectorAll('li')[i].innerText = rivers[i];
}

// Izračun: pageOffsetY - scrollTop - window.height
// Element nije vidljiv, viewport je iznad njega 370px
let elViewportOffset = 1300 - 200 - 730; // px