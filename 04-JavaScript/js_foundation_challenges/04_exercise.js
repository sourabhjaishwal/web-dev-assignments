// Loops

// Task 1: Sum of First N Natural Numbers
// Write a function sumOfN(n) that returns the sum of the first n natural numbers

function sumOfN(n) {
  return (n * (n + 1)) / 2;
}

let sum = sumOfN(5);
// console.log(sum);

// Task 2: Multiplication Table
// Write a function printMultiplicationTable(n) that returns the multiplication table for n. Values return in the array must be of the format 2 * 2 = 4

function printMultiplicationTable(n) {
  let array = [];
  for (let i = 0; i <= 10; i++) {
    array.push(`${n} * ${i} = ${n * i}`);
  }
  return array;
}

let multiplication = printMultiplicationTable(2);
// console.log(multiplication);

// Task 3: Count Vowels in a String
// Write a function countVowels(str) that returns the number of vowels (in both lower & uppercase) in the given string str.

function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let numberOfVowels = 0;
  for (let char of str) {
    if (vowels.includes(char.toLowerCase())) {
      numberOfVowels++; // increment the counter.
    }
  }
  return numberOfVowels;
}

// console.log(countVowels("Hello World!"));
// console.log(countVowels("AeIoU"));
// console.log(countVowels("Hitesh Choudary"));
// console.log(countVowels("Sourabh Jaishwal Satish Kumar"))
