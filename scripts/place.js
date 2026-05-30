
// FOOTER DATES

const currentYear = new Date().getFullYear();

document.querySelector("#year").textContent =
`© ${ currentYear } | Your Name | Nigeria`;

document.querySelector("#modified").textContent =
`Last Modified: ${ document.lastModified } `;


// WEATHER VALUES

const temperature = 8;
const windSpeed = 10;


// WIND CHILL FUNCTION

function calculateWindChill(temp, speed) {
    return (
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(speed, 0.16) +
        0.3965 * temp * Math.pow(speed, 0.16)
    ).toFixed(1);
}


// DISPLAY WIND CHILL

let windChill = "N/A";

if (temperature <= 10 && windSpeed > 4.8) {
    windChill =
        `${ calculateWindChill(temperature, windSpeed) } °C`;
}

document.querySelector("#windchill").textContent =
windChill;
const currentYear = new Date().getFullYear();
document.getElementById("year").textContent = currentYear;

document.getElementById("lastModified").textContent =
    `Last Modification: ${document.lastModified}`;
