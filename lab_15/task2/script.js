const numbers = [1, 2, 3];
const[firstNumber, secondNumber, thirdNumber] = numbers;
console.log(firstNumber);
console.log(secondNumber);
console.log(thirdNumber);

const fruits = ['apple', 'orange', 'banana'];
const[firstFruit, ...restFruits] = fruits;
console.log(firstFruit);
console.log(restFruits);

const arr1 = [1, 2, 3], arr2 = [4, 5, 6];
const combinedArray = [...arr1, ...arr2];
console.log(combinedArray);

