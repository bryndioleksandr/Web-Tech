function toCamel(string){
    let result = '';
    for(let i = 0; i < string.length; i++){
        if(string[i] === "-"){
            result+=string[i] = '';
            result+=string[i+1].toUpperCase();
            i++;
        }
        else{
            result+=string[i];
        }
    }
    return result;
}

console.log(toCamel("backgroundColor"));