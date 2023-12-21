var character = {
    name: 'Eleven',
    show: 'Stranger Things',
    portrayedBy: 'Millie Bobby Brown',
};

const quotes = [
    `Friends don't lie!`,
    `Why are you keeping this curiosity door locked?`,
    `You're all so nerdy, it makes me physically ill.`,
    `I didn't run away this time, right?`,
];

// 1.
var proto1 = Object.getPrototypeOf(character);
var proto2 = Object.getPrototypeOf(proto1);

console.log(proto1);
console.log(proto2);

// 2.
function randomQuote() {
    var index = Math.floor(Math.random() * quotes.length);
    return quotes[index];
}
// Dodajemo funkciju getQuote prototipu character objekta pomoću proto1.getQuote = randomQuote;
proto1.getQuote = randomQuote;

console.log(Object.getPrototypeOf(character));

console.log(character.getQuote()); // Sada možete pozvati tu funkciju koristeći character.getQuote(), jer je getQuote funkcija dodana prototipu character objekta.