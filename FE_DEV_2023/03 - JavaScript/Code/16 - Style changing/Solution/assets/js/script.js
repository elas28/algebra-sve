function updateTemperatureDOM() {
    var temperature = Math.round(Math.random() * 80 - 35);
    document.querySelector('.temperature').textContent = `${temperature}°C`;

    if (temperature > 40) {
        document.body.style.backgroundColor = '#FF4D00';
    } else if (temperature > 10) {
        document.body.style.backgroundColor = '#FFBD00';
    } else if (temperature > -10) {
        document.body.style.backgroundColor = '#01DFFF';
    } else {
        document.body.style.backgroundColor = '#0045FF';
    }
}

document.querySelector('button').addEventListener('click', updateTemperatureDOM);

window.addEventListener("load", (event) => {
    updateTemperatureDOM();
});