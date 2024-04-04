let choice = Number(prompt("1 - Using switch-case\n2 - Using if-else"));

let currentDate = new Date();
let currentHour = currentDate.getHours();

let greeting;

console.log(currentDate);

switch (choice) {
    case 1:
        switch (true) {
            case (currentHour >= 23 && currentHour < 5):
                greeting = "Доброї ночі";
                break;
            case (currentHour >= 5 && currentHour < 11):
                greeting = "Доброго ранку";
                break;
            case (currentHour >= 11 && currentHour < 17):
                greeting = "Доброго дня";
                break;
            case (currentHour >= 17 && currentHour < 23):
                greeting = "Доброго вечора";
                break;
            default:
                greeting = "Привіт";
        }

        console.log(greeting);

    case 2:
        if (currentHour >= 23 || currentHour < 5) {
            greeting = "Доброї ночі";
        } else if (currentHour >= 5 && currentHour < 11) {
            greeting = "Доброго ранку";
        } else if (currentHour >= 11 && currentHour < 17) {
            greeting = "Доброго дня";
        } else if (currentHour >= 17 && currentHour < 23) {
            greeting = "Доброго вечора";
        } else {
            greeting = "Привіт";
        }

        console.log(greeting);
}