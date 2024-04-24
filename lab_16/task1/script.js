function append() {
    let parent = document.querySelector('.container');
    let divElement = document.createElement('div');
    divElement.textContent = 'New element';
    divElement.style.padding = '15px';
    divElement.style.border = '2px dashed red';
    divElement.style.margin = '5px'
    divElement.style.textAlign = 'center';
    parent.appendChild(divElement);
}