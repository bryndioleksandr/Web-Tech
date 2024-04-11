let array = [2, 3, 4, 5];
let multFor = 1;
let multWhile = 1;

for(let i = 0; i < array.length;i++){
    multFor*=array[i];
}

console.log("Product after for loop equals to " + multFor);

let i = 0;
while(i < array.length){
    multWhile*=array[i];
    i++;
}

console.log("Product after while loop equals to " + multWhile);
