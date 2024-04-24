const student = {
    name: "Oleksandr", 
    age: 18,
    gender: "male"
}

const {name:studentName, age:studentAge, gender:studentGender} = student;

console.log(studentName);
console.log(studentAge);
console.log(studentGender);


const car = {
    engine : {
        cylinders: 4,
        horsePower: 405
    }
}

const {engine:{cylinders:engineCylinders, horsePower:engineHorsePower}} = car;

console.log(engineCylinders);
console.log(engineHorsePower);


const book = {
    title: "Kobzar",
    author: "Taras Shevchenko"
}

const {title, author} = book;
const bookTitle = title;
const bookAuthor = author;