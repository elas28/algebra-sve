## Zadatak 📝

1. U vježbi je potrebno napraviti četiri komponente u četiri odvojene datoteke
- Barem jedna komponenta mora biti definirana klasom!

2. Komponenta App mora biti parent komponenta ostalima (ostale 3 komponente) i mora sadržavati polje (array) "korisnici" koje unutar sebe sadrži tri objekta s imenima i godinama korisnika

3. Komponenta App mora pozivati ostale komponente i u pozivu preko propsa im treba proslijediti ime i godine korisnika, jednu komponentu je potrebno pozvati s "children" propsima
- Komponenta definirana funkcijom treba prikazati ime i godine korisnika
- Komponenta definirana klasom treba prikazati ime i godine korisnika
- Druga komponenta definirana funkcijom treba prikazati ime i godine korisnika te treba ispisati proslijeđene children propse
> Provjerite na React dokumentaciji što je to "children" props

4. Koristite PropTypes i definirajte da ime mora biti string, a godine moraju biti broj. Oba propertyja su obavezna
> Provjerite na React dokumentaciji kako da propertyji budu obvezni

5. Koristite PropTypes i definirajte novi property "job" koji može biti string (nije obavezan)
- Koristite defaultProps da postavite vrijednost "job" u "unemployed" po defaultu. Učinite to za sve komponente i ispišite vrijednost "job" propertyja
