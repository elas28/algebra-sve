/**
 * U JavaScriptu, #password je tzv. privatno svojstvo (engl. private property) klase. Označava da je to svojstvo privatno za instancu klase i nije dostupno izvan klase ili izvan njezinih metoda. To znači da se svojstvo #password ne može direktno čitati ili mijenjati izvan definicije klase User.
 */
class User {
    #password;
    constructor(name, userName, password) {
        this.name = name;
        this.userName = userName;
        this.#password = password;
    }

    login(userName, password) {
        if (userName === this.userName && password === this.#password) {
            console.log('Login Successfully');
        } else {
            console.log('Authentication Failed!!');
        }
    }

    setPassword(newPassword) {
        this.#password = newPassword;
    }
};

const nino = new User('Nino Škuflić', 'nino.skuflic', 'password:)');
const js = new User('JavaScript', 'js', 'python:)');

nino.login('nino.skuflic', 'password:)'); // Login Successfully

console.log(nino.name); // Nino Škuflić
console.log(nino.password); // undefined - private property
// console.log(nino.#password); // Syntax Error

nino.setPassword('new_password:)');
nino.login('nino.skuflic', 'password:)'); // Authentication Failed!!
nino.login('nino.skuflic', 'new_password:)'); // Login Successfully