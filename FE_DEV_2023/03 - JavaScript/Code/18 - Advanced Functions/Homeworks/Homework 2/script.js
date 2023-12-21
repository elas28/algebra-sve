/**
 * U ovom rješenju, funkcija stvoriRačun uzima početni iznos na računu i vraća objekt koji sadrži dvije funkcije, uplati i isplati. Svaka od ovih funkcija ima pristup trenutniIznos, što omogućava praćenje iznosa na računu. 
 * Ove funkcije se koriste za uplate i isplate sa računa, a objekt zadržava ažurirani iznos na računu.
 */
function stvoriRačun(početniIznos) {
    let trenutniIznos = početniIznos;

    return {
        uplati: function (iznos) {
            trenutniIznos += iznos;
            return trenutniIznos;
        },
        isplati: function (iznos) {
            if (iznos <= trenutniIznos) {
                trenutniIznos -= iznos;
                return trenutniIznos;
            } else {
                return "Nedovoljno sredstava na računu.";
            }
        },
    };
}

// Primjer korištenja:
const mojRačun = stvoriRačun(100);

console.log(mojRačun.uplati(50)); // Ispis: 150
console.log(mojRačun.isplati(30)); // Ispis: 120
console.log(mojRačun.isplati(150)); // Ispis: "Nedovoljno sredstava na računu."
