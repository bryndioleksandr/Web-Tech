function changeBigImage(linkSmall){
    let getterID = linkSmall.getAttribute("href").substring(1);
    let container = document.getElementById("big-images");
    let senderImage = document.getElementById(getterID);
    let bigImages = container.getElementsByTagName("img");
    for (let i = 0; i < bigImages.length; i++) {
        bigImages[i].style.display = "none";
    }
    senderImage.style.display = "block";
}