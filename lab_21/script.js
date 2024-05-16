const modal = document.getElementById('myModal');
const btn = document.getElementById('btn');
const span = document.getElementsByClassName('close')[0];
const submit = document.getElementById("btn-submit");
const array = JSON.parse(localStorage.getItem('productsArray')) || [];
const myForm = document.getElementById("productForm");
const formElements = myForm.elements;
const showArray = document.getElementById("showArray");
const confirmBtn = document.createElement('button');
confirmBtn.id = "temp";



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
        localStorage.setItem('productsArray', JSON.stringify(array));
        console.log(array);
        alert('Product is created successfully!');
        modal.style.display = "none";
        addProduct();
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

let validateForm = () => {
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

let addProduct = () => {
    let productsArray = localStorage.getItem('productsArray');

    if (productsArray) {
        productsArray = JSON.parse(productsArray);
        console.log(productsArray);
        const container = document.getElementById('main');
        container.innerHTML = '';
        container.style = 'display:flex; flex-wrap: wrap; justify-content: center;';
        productsArray.forEach(object => {
            const { id, productName, description, price, discount, rating, inStock, brand, category, picture } = object;

            let mainBlock = document.createElement('div');
            mainBlock.style = 'background-color: white; border-radius:20px; margin:10px; width: 200px; height:296px; overflow: hidden; text-overflow:ellipse;   font-family: "Montserrat", sans-serif;';
            mainBlock.style.boxShadow = "5px 5px 10px rgba(0,0,0,0.7)";

            mainBlock.addEventListener('mouseenter', () => {
                mainBlock.style.transitionDuration = '0.3s';
                mainBlock.style.transform = 'scale(1.1)';

            });

            mainBlock.addEventListener('mouseleave', () => {
                mainBlock.style.transform = 'scale(1)';
            });

            let discountBlock = document.createElement('div');
            discountBlock.innerHTML = discount + "%";
            discountBlock.style = 'font-size:12px; padding:0px; margin: 20px 0 0 20px; background-color: red; border-radius:8px; color: white; padding: 10px; width: fit-content;';
            mainBlock.appendChild(discountBlock);

            let img = document.createElement('div');
            img.style = `object-fit:cover; overflow:hidden; width:200px; height:90px; background-image: url('${picture}'); background-size: cover; background-position: center;`;
            mainBlock.appendChild(img);

            let catDiv = document.createElement('div');
            mainBlock.appendChild(catDiv);
            catDiv.style = 'display:flex; justify-content:end;'
            let cat = document.createElement('span');
            cat.innerHTML = category;
            cat.style = 'font-size: 12px; font-style: italic; border-radius:10px; color:white; background-color:rgba(138, 136, 134, 0.6); padding: 5px;';
            catDiv.appendChild(cat);

            let titleBlock = document.createElement('h3');
            titleBlock.innerHTML = productName;
            titleBlock.style = 'font-size: 15px; text-align:center; color:black; margin:0; margin-top:10px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;';
            mainBlock.appendChild(titleBlock);

            let paragraph = document.createElement('p');
            paragraph.innerHTML = description;
            paragraph.style = 'font-size: 10px; text-align:center; margin:0px; margin-top: 5px; text-overflow:ellipsis; max-height:24px; ';
            mainBlock.appendChild(paragraph);

            let flexBlock = document.createElement('div');
            flexBlock.style = 'display: flex; justify-content: space-around; margin:0; margin-top:25px;  max-height:40px; align-items:center;';
            mainBlock.appendChild(flexBlock);

            let money = document.createElement('h3');
            money.innerHTML = "$" + price;
            money.style = 'color:red;';
            flexBlock.appendChild(money);


            let idBlock = document.createElement('button');
            let editBtn = document.createElement('button');
            let deleteBtn = document.createElement('button');

            editBtn.innerHTML = "📝";
            deleteBtn.innerHTML = "🗑️";
            idBlock.innerHTML = "🛒";
            const style = 'border:0px; background-color:white; cursor:pointer; font-size:20px;';
            idBlock.style = style;
            editBtn.style = style;
            deleteBtn.style = style;
            idBlock.addEventListener('mouseenter', () => {
                idBlock.style.transitionDuration = '0.3s';
                idBlock.style.transform = 'scale(1.3)';

            });

            idBlock.addEventListener('mouseleave', () => {
                idBlock.style.transform = 'scale(1)';
            });

            editBtn.addEventListener('mouseenter', () => {
                editBtn.style.transitionDuration = '0.3s';
                editBtn.style.transform = 'scale(1.3)';

            });

            editBtn.addEventListener('mouseleave', () => {
                editBtn.style.transform = 'scale(1)';
            });

            deleteBtn.addEventListener('mouseenter', () => {
                deleteBtn.style.transitionDuration = '0.3s';
                deleteBtn.style.transform = 'scale(1.3)';

            });

            deleteBtn.addEventListener('mouseleave', () => {
                deleteBtn.style.transform = 'scale(1)';
            });

            deleteBtn.addEventListener('click', () => deleteElement(productsArray, object));

            editBtn.addEventListener('click', () => edit(productsArray, object));


            idBlock.addEventListener('click', () => {
                console.log(`ID of '${productName}': '${id}'`);
            });
            // flexBlock.appendChild(idBlock);
            flexBlock.appendChild(editBtn);
            flexBlock.appendChild(deleteBtn);


            container.appendChild(mainBlock);
        });
    }
    else {
        console.log("It's clear here");
    }
}

let edit = (productsArray, object) => {
    modal.style = "display: flex;  text-align:center;";
    submit.style.display = "none";
    if (!document.querySelector("#productForm #temp")) {
        myForm.appendChild(confirmBtn);
    }
    confirmBtn.innerHTML = "Edit";
    document.querySelector(".modal h2").innerHTML = "Edit product";
    let i = 0;
    for (const key in object) {
        formElements[i].value = object[key];
        i++;
    }
    confirmBtn.onclick = () => {
        if (validateForm()) {
            let editedProduct = {};
            for (let j = 0; j < formElements.length; j++) {
                let input = formElements[j];
                if (input.type !== 'button' && input.type !== 'submit' && input.name) {
                    editedProduct[input.name] = input.value;
                }
            }
            for (let i = 0; i < productsArray.length; i++) {
                if (productsArray[i] === object) {
                    productsArray[i] = editedProduct;
                    break;
                }
            }
            localStorage.setItem('productsArray', JSON.stringify(productsArray));
            alert('Product is edited successfully!');
            modal.style.display = "none";
            addProduct();
        }
        else {
            alert('Please fill all required fields correctly.');
        }
    };
};


let deleteElement = (productsArray, object) => {
    const index = productsArray.findIndex(item => item === object);
    console.log(`Index: ${index}`);
    if (index !== -1) {
        if (confirm(`Delete element ${object.productName}?`)) {

            productsArray.splice(index, 1);

            localStorage.setItem('productsArray', JSON.stringify(productsArray));
            alert("Element is deleted");
            addProduct();
        }
    } else {
        alert("Element is not found in the array");
    }
}


document.addEventListener('DOMContentLoaded', addProduct);