// stepCounter.js

let totalSteps = 0;

function walk(steps) {
    if (steps > 0) {
        totalSteps += steps;
        console.log(`Hodali ste ${steps} koraka.`);
    } else {
        console.log('Morate hodati barem jedan korak.');
    }
}

function getTotalSteps() {
    return totalSteps;
}

// Exportirajte funkcije koje želite dostupne izvan modula
module.exports = {
    walk,
    getTotalSteps,
};
