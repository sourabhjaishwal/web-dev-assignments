// Higher-Order Functions and Arrow Functions

//Task 1: Using Array Methods
// Write a function squareNumbers(arr) using map() and arrow functions

const squareNumbers = (arr) => arr.map((num) => num * num);

// console.log(squareNumbers([1, 2, 3, 4, 5]));
// console.log(squareNumbers([2, 4, 6, 8, 10]));

// Task 2: Custom Filter Function
// Create a function filterEvenNumbers(arr) using filter() and arrow functions

const filterEvenNumbers = (arr) => arr.filter((num) => num % 2 === 0);

// console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// Task 3: Sum of Positive Numbers
// Write a function sumPositiveNumbers(arr) that takes an array of numbers and returns the sum of all positive numbers using filter() and reduce() with arrow functions

const sumPositiveNumber = (arr) =>
  arr.filter((num) => num % 2 === 0).reduce((acc, num) => acc + num, 0);

// console.log(sumPositiveNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

// Task 4: Transform Array of Objects
// Write a function getNames(arr) that takes an array of objects where each object has a name property, and returns an array of just the names using map() and arrow functions

const getNames = (arr) => arr.map((obj) => obj.name);

const people = [
  { name: "Bob", age: 35, country: "States" },
  { name: "Alice", age: 28, country: "Canada" },
  { name: "Richard", age: 25, country: "Australia" },
];

// console.log(getNames(people))

// Task 5: Find the Longest Word
// Write a function findLongestWord(arr) that takes an array of strings and returns the longest word using reduce() and an arrow function

const findLongestWord = (arr) =>
  arr.reduce(
    (longest, word) => (word.length > longest.length ? word : longest),
    ""
  );

const words = ["apple", "strawberry", "banana", "kiwi", "blueberry"];
// console.log(findLongestWord(words))
