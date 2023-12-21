## Zadatak 📝

1. U ovoj vježbi potrebno je kreirati novu React aplikaciju u kojoj ćemo dohvatiti i prikazati podatke s REST API-ja
   > Koristit ćemo NASA-in API koji omogućava dohvat slike dana

- Kako bismo dohvatili sliku dana, potrebno je pozvati metodu GET na sljedeći URL: https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY

2. Kao odgovor na ovaj poziv, dobiti ćemo JSON objekt u kojem se nalazi nekoliko bitnih atributa:

- URL: URL slike
- Title: naziv slike
- Explanation: opis slike (kako biste vidjeli puni odgovor, potrebno je kopirati URL za dohvat slike dana u web browser i pritisnuti tipku Enter)

3. U našoj React aplikaciji, potrebno je prikazati navedene 3 informacije (sliku, naziv i opis slike)

## Bonus 🎲

1. Napraviti NASAImage komponentu koja će prikazati ime slike, sliku, i opis slike. Komponenta treba biti stateless function component.
2. Komponentu NASAImage uključiti u App komponentu. Proslijediti podatke iz statea (response sa API-ja) kao props NASAImage komponenti.
3. Komponenti NASAImage dodati prikaz datuma kada je slika objavljena. Proslijediti datum iz statea App komponente u NASAImage komponentu putem props.
4. Stilizirati NASAImage komponentu po volji putem CSS-a.
5. Tko hoće neka posjeti https://api.nasa.gov/ ili iskoristi neki API koji zna da povuče i prikaže podatke u aplikaciji 🧑‍💻
