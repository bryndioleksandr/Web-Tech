let validURL = (url) => {
    let pattern = /^(http|https|ftp):\/\//;
    return pattern.test(url);
}

let myURL = prompt("Enter URL");
alert(validURL(myURL));
