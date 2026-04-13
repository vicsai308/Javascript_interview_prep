// Sample array for demonstration
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1. forEach: Executes a function for each array element. It doesn't return anything.
// Useful for performing side effects like logging or modifying external variables.
console.log("Using forEach:");
numbers.forEach((num, index) => {
    console.log(`Element at index ${index}: ${num}`);
});

// 2. map: Creates a new array by applying a function to each element.
// Returns a new array with the transformed elements.
console.log("\nUsing map:");
const doubled = numbers.map(num => num * 2);
console.log("Original array:", numbers);
console.log("Doubled array:", doubled);

// 3. find: Returns the first element that satisfies the condition.
// Returns undefined if no element matches.
console.log("\nUsing find:");
const firstEven = numbers.find(num => num % 2 === 0);
console.log("First even number:", firstEven);

// 4. findIndex: Returns the index of the first element that satisfies the condition.
// Returns -1 if no element matches.
console.log("\nUsing findIndex:");
const firstEvenIndex = numbers.findIndex(num => num % 2 === 0);
console.log("Index of first even number:", firstEvenIndex);

// 5. filter: Creates a new array with all elements that pass the test.
// Returns an array of elements that match the condition.
console.log("\nUsing filter:");
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers);

// 6. reduce: Reduces the array to a single value by applying a function cumulatively.
// Takes an initial value and accumulates the result.
console.log("\nUsing reduce:");
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log("Sum of all numbers:", sum);