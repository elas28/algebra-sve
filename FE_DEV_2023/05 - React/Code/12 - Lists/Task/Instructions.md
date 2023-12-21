## Zadatak 📝

1. Napravite React aplikaciju koja će po zadanim vrijednostima prikazivati slejdeće životinje unutar liste:
   - Cat 🐈
   - Cow 🐄
   - Mouse 🐁
   - Horse 🐎

2. Unutar komponente napravite gumb 'Add new animal' koji će na svaki pritisak prikazati prompt korisniku pitajući ga koju novu životinju želi dodati
   - Ako je prompt prazan, NEMOJTE spremiti životinju

3. Nakon što korisnik unese novu životinju, istu posrpemite u stanje aplikacije i prikažite unutar liste (npr. ispod Horse 🐎 dodaje se Dragon 🐉)
4. Unutar komponente napravite gumb 'Remove last animal' koji će na svaki pritisak ukloniti posljednju dodanu životinju iz liste

> Lista mora obavezno imati jedinstvene ključeve

5. Unutar komponente napravite gumb 'Remove specific animal' koji će na svaki pritisak pitati korisnika koji specifični item želi ukloniti te na temelju toga isti ukloniti iz liste (ako je u nazivu životinje emoji, morat će te i njega upisati)
> Ovdje će vam pomoći filter() metoda nad nizom

6. Ako u nizu nema životinja, prikažite poruku "There are no animals"

