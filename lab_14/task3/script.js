let size = prompt("Enter size of an array: ");
let array = [];

for(let i = 0; i < size; i++){
    array[i] = prompt("Enter element[" + i + "]");
}

let min = array[0];

for(let i = 0; i < array.length;i++){
    if(min > array[i]){
        min = array[i];
    }
}

alert("Minimum of an array equals to " + min);