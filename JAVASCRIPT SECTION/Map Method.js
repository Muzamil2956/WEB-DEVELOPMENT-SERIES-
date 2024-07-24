//The Map method in JavaScript is a higher-order function that iterates over each element of an array,
 //allowing you to apply a specified function to each element. This function is commonly referred to as a callback function.
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers);