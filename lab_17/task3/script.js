let cities = document.getElementById("cities");

function createOption(city) {
    let newOption = document.createElement('option');
    newOption.value = city.substring(0, 3);
    newOption.innerText = city;
    cities.appendChild(newOption);
}

function loadCitiesForCountry(countryValue) {
    while (cities.firstChild) {
        cities.removeChild(cities.firstChild);
    }

    switch(countryValue) {
        case 'ger':
            createOption("Berlin");
            createOption("Munchen");
            break;
        case 'usa':
            createOption("New York");
            createOption("Washington");
            break;
        case 'ukr':
            createOption("Ternopil");
            createOption("Lviv");
            break;
    }
}

let country = document.getElementById("country");
country.addEventListener('change', function() {
    loadCitiesForCountry(this.value);
    console.log("Selected value: " + this.value);
});

loadCitiesForCountry(country.value);
