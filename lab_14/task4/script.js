function findUnique(arr) {
    let uniqueElements = {};

    for (let i = 0; i < arr.length; i++) {
        if (!uniqueElements[arr[i]]) {
            uniqueElements[arr[i]] = true;
        } else {
            return false;
        }
    }
    return true;
}

let myArray = [1, 2, 3, 4, 5];
console.log(findUnique(myArray));

myArray = [1, 2, 3, 1, 4, 5];
console.log(findUnique(myArray)); 
