function update() {
    let burgersParent = document.getElementById("main-nav");
    let myList = document.getElementById("inner-list");
    let burgerContainer = document.getElementById("burger-container");

    if (window.innerWidth <= 400) {
        
            burgerContainer = document.createElement('div');
            burgerContainer.id = 'burger-container';
            let img = document.createElement('img');
            img.src = 'menu-burger.svg';
            img.style.cursor = "pointer";
            burgerContainer.appendChild(img);
            burgersParent.insertBefore(burgerContainer, myList);
            burgerContainer.appendChild(myList);
            myList.style.display = "none";

            burgerContainer.addEventListener('click', function () {
                myList.style.display = myList.style.display === "none" ? "flex" : "none";
                myList.style.flexDirection = "column";
                myList.style.position = "absolute";
            });

            document.addEventListener('click', function (event) {
                if (!myList.contains(event.target) && !burgerContainer.contains(event.target)) {
                    myList.style.display = 'none';
                }
            });
        
    } 
    else {
        myList.style = "display: flex; flex-direction: row;";
        burgersParent.appendChild(myList);
        burgerContainer.remove();}
}

window.addEventListener('resize', update);
update();
