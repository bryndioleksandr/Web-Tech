function toUpper(string) {
    let result = '';
    for (let i = 0; i < string.length; i++) {
        if (string[i] === " " && i != string.length) {
            result += " ";
            result += string[i + 1].toUpperCase();
            i++;
        } else {
            if (i == 0) {
                result += string[i].toUpperCase();
            }
            else {
                result += string[i];
            }
        }
    }
    return result;
}

let input = prompt("Enter a sentence: ");
alert(toUpper(input));


