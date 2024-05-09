let validate = (number) => {
        const pattern = /^[45]\d{15}$/;
        return pattern.test(number);
}

let myString = prompt("Credit card number");
alert(validate(myString));