function changeText() {
    let text = prompt("Enter text to insert into div");

    let div = document.querySelector('.content');
    div.textContent = text;
}