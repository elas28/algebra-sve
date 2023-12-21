/**
 * 
  U ovom rješenju, funkcija counter vraća funkciju koja povećava brojač svaki put kada se pozove. Svaki put kada stvorimo novi brojač (npr. mainCounter i mainCounter2), dobivamo zaseban brojač koji održava svoje vlastito stanje. Ovo je korisno za praćenje brojeva u različitim kontekstima ili za implementaciju raznih brojača.
 */

function counter() {
    var counter = 0;

    return function () {
        counter++;
        return counter;
    };
}
const mainCounter = counter(); // Referencira unutarnju funkciju koja je vraćena iz counter()
console.log(mainCounter()); // Izvršava se funkcija na koju mainCounter referencira, a to je unutarnja funkcija iz counter() (anonimna funkcija). Unutarnja funkcija, kad se izvršava, povećava lokalnu varijablu counter za 1 i vraća trenutnu vrijednost counter kao rezultat poziva.

// Pozivanje counter()() direktno izvršava funkciju koja se vraća iz counter(). 
// Međutim, svaki put kada pozovete counter(), dobijete novu instancu unutarnje funkcije sa svojim vlastitim brojačem. 
// Dakle, ovdje će svaki poziv counter()() zapravo početi brojati od 1 jer se radi o novoj instanci funkcije.

/**
 * Ključna stvar ovdje je da kada pozovete counter(), dobijete novu instancu unutarnje funkcije sa svojim vlastitim lokalnim brojačem. Svaki poziv unutarnjaFunkcija() tada radi s tom instancom funkcije, što omogućava neovisno praćenje brojača za svaku instancu.
 * 
 * Ako biste željeli zadržati brojač između poziva, trebali biste spremiti instancu unutarnje funkcije u varijablu i pozvati tu varijablu kako biste očuvali stanje brojača između poziva.
 */