const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
const modal = document.getElementById("wrap-form");
const header = document.querySelector(".sign-up-in");
const showFormBtn = document.querySelector(".sign-up-in button");
const emailField = document.getElementById("email-input");
const passwordFirst = document.getElementById("password-input");
let passwordFirstValue;
const passwordSecond = document.getElementById("password-check").value;
const passwordCheck = document.getElementById("password-check");
let checkEmail = document.createElement('label');
let parent = emailField.parentNode;
let checkPassword = document.createElement('label');
let parentPassword = passwordCheck.parentNode;

let overlay;

let validEmail = (email) => {
    let pattern = /^[a-zA-Z0-9\.]+[_]*[-]?@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(email);
}


emailField.addEventListener('focus', function () {
    if (!checkEmail.parentNode) {
        parent.appendChild(checkEmail);
    }
});

// emailField.addEventListener('blur', function () {
//     if (checkEmail.parentNode === parent) {
//         parent.removeChild(checkEmail);
//     }
// });

emailField.addEventListener('input', function (event) {
    let text = event.target.value;
    console.log(text);
    if (text == "") {
        checkEmail.textContent = "";
    }
    else {
        if (validEmail(text)) {
            checkEmail.textContent = "Email is ok";
            checkEmail.style.color = "green";
        }
        else {
            checkEmail.textContent = "Email is not ok";
            checkEmail.style.color = "red";
        }
    }
});

passwordFirst.addEventListener('blur', function (event) {
    passwordFirstValue = event.target.value;
});

passwordCheck.addEventListener('focus', function () {
    if (!checkPassword.parentNode) {
        parentPassword.appendChild(checkPassword);
    }
});

passwordCheck.addEventListener('input', function (event) {
    let text = event.target.value;
    console.log(text);
    console.log("First: " + passwordFirstValue);
    console.log("Second: " + text);
    if (passwordFirstValue == text) {
        checkPassword.textContent = "Passwords match each other";
        checkPassword.style.color = "green";
    }
    else {
        checkPassword.textContent = "Passwords don`t match each other";
        checkPassword.style.color = "red";
    }
});

showFormBtn.onclick = () => {
    modal.style = "position:relative; display:flex; margin-top:15px;";
    
    overlay = document.createElement('div');
    overlay.style = "position: absolute; top: 0;left: 0;right: 0;bottom: 0; margin:0; min-height:100%;background-color: rgba(0, 0, 0, 0.5);  z-index: 0; ";
    document.body.appendChild(overlay);

}

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.removeChild(overlay);
    }
}

signupBtn.onclick = (() => {
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (() => {
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
});
signupLink.onclick = (() => {
    signupBtn.click();
    return false;
});
