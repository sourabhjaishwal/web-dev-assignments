// Iterators and Generators in JavaScript
/*
Task 1: Creating a Simple Generator
Create a generator function numberGenerator() that yields numbers from 1 to 3.
*/

/*
function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
  }
  
  // Using the generator
  const generator = numberGenerator();
  
  console.log(generator.next().value);  // Output: 1
  console.log(generator.next().value);  // Output: 2
  console.log(generator.next().value);  // Output: 3
  console.log(generator.next().value);  // Output: undefined (no more values)
*/

/*
  Task 2: Create a Custom Iterator
  Create a custom iterator called rangeIterator(start, end) that returns an object that iterates over numbers from start to end.
  Each call to .next() should return the next number in the range until it reaches end.
*/

/*
  function rangeIterator(start, end) {
    let current = start;
    return {
      next: function() {
        if (current <= end) {
          return { value: current++, done: false };
        } else {
          return { value: undefined, done: true };
        }
      }
    };
  }
  
  // Using the custom iterator
  const range = rangeIterator(1, 3);
  
  console.log(range.next().value);  // Output: 1
  console.log(range.next().value);  // Output: 2
  console.log(range.next().value);  // Output: 3
  console.log(range.next().value);  // Output: undefined (done)
*/

/*
  Task 3: Generator Function for Fibonacci Sequence
  Create a generator function fibonacciGenerator() that yields numbers from the Fibonacci sequence indefinitely (1, 1, 2, 3, 5, 8, etc.).
  Use the next() method to get the next Fibonacci number.
*/

function* fibonacciGenerator() {
  let a = 0,
    b = 1;
  while (true) {
    yield b;
    [a, b] = [b, a + b]; // Update to the next Fibonacci number
  }
}

// Using the Fibonacci generator
const fibGen = fibonacciGenerator();

console.log(fibGen.next().value); // Output: 1
console.log(fibGen.next().value); // Output: 1
console.log(fibGen.next().value); // Output: 2
console.log(fibGen.next().value); // Output: 3
console.log(fibGen.next().value); // Output: 5
