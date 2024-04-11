let cities = ["Ternopil", "Lviv", "Warsaw"];

let newCities = [];

for(let i = 0; i<3;i++){
    newCities += cities[i];
    if(i != 2){
        newCities+="*";
    }
}

console.log(newCities);