let modal = document.getElementById('myModal');
let btn = document.getElementById('btn');
let span = document.getElementsByClassName('close')[0];
let submit = document.getElementById("btn-submit");
let array = [];
let myForm = document.getElementById("productForm");
let formElements = myForm.elements;
let showArray = document.getElementById("showArray");

showArray.onclick = () => {
    console.log(array);
}

submit.onclick = () => {
    if (validateForm()) {
        let formData = {};
        for (let j = 0; j < formElements.length; j++) {
            let input = formElements[j];
            if (input.type !== 'button' && input.type !== 'submit' && input.name) {
                formData[input.name] = input.value;
            }
        }
        array.push(formData);
        console.log(array);
        alert('Product is created successfully!');
        modal.style.display = "none";
    }
    else {
        alert('Please fill all required fields correctly.');
    }
};

btn.onclick = () => {
    modal.style = "display: flex;  text-align:center;";
    for (let j = 0; j < formElements.length; j++) {
        let input = formElements[j];
        if (input.type !== 'button' && input.type !== 'submit' && input.name) {
            input.value = '';
        }
    }
}

span.onclick = () => {
    modal.style.display = "none";
}

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function validateForm() {
    let isValid = true;
    for (let input of productForm.elements) {
        if (input.type !== 'button' && input.type !== 'submit') {
            if (input.required && !input.value.trim()) {
                isValid = false;
                input.classList.add('error');
            } else {
                input.classList.remove('error');
            }
            if (input.type === 'number' && input.value < 0) {
                isValid = false;
                input.classList.add('error');
            } else if (input.type === 'number') {
                input.classList.remove('error');
            }
        }
    }
    return isValid;
}

