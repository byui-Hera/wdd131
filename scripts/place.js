function calculateWindChill(tempC, speed) {
    return 13.12 + (0.6215 * tempC) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * tempC * Math.pow(speed, 0.16));
}

function celsiusToFahrenheit(tempC) {
    return (tempC * 9 / 5) + 32;
}

let tempC = 10;
let speed = 5;

if (tempC <= 10 && speed > 4.8) {
    let windChillC = calculateWindChill(tempC, speed).toFixed(1);
    let windChillF = calculateWindChill(celsiusToFahrenheit(tempC), speed).toFixed(1);
    document.getElementById("wcf").innerHTML = `${windChillC} °C / ${windChillF} °F`;
} else {
    document.getElementById("wcf").innerHTML = "N/A";
}


