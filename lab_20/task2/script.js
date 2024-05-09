let validEmail = (email) => {
    let pattern = /^[a-zA-Z0-9]*[_]*[-]?@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(email);
}

let myEmail = prompt("Enter email");
alert(validEmail(myEmail));
