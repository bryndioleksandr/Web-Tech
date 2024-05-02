class Student {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
    study() {
        console.log("\tInfo about student " + this.name + ":\nAge is " + this.age + "\nAvg grade: " + this.grade);
    }
}

let myself = new Student("Oleksandr", 18, 4.99);
let maria = new Student("Maria", 20, 3.8);
let john = new Student("John", 19, 4.2);

console.log(myself.study()); 
console.log(maria.study()); 
console.log(john.study());  