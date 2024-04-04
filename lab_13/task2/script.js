let num = prompt("Enter some number: ");
if(!isNaN(num)){
    if((num > 0 && num%2 == 0)){
        console.log("The number is even and positive");
    }
    else console.log("The number is NOT even and positive");

    if(num % 7 == 0){
        console.log("The number is a multiple of 7");
    }
    else  console.log("The number is NOT a multiple of 7");
}
else alert("You didn`t enter the number");