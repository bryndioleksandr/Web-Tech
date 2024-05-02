function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;

    Car.prototype.displayInfo = function () {
        console.log("Brand: " + this.brand + "\nModel: " + this.model + "\nYear: " + this.year);
    }
    Car.prototype.drive = function () {
        console.log("The movement is started");
    }
}

let tesla = new Car("Tesla", "Model S", "2021");
let bmw = new Car("BMW", "i8", "2022");
let audi = new Car("Audi", "A6", "2023");

console.log(tesla.displayInfo());
console.log(tesla.drive());

console.log(bmw.displayInfo());
console.log(bmw.drive());

console.log(audi.displayInfo());
console.log(audi.drive());