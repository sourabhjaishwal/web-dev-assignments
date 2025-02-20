// Closures in JavaScript
/* 
Task 1: Creating a Counter Using Closures
Create a function createCounter() that returns a function which increments and returns a counter value each time it is called.
*/

/*
function createCounter() {
    let count = 0
    return function() {
        count = count + 1;
        return count
    }
}

const counter = createCounter()
console.log(counter())
console.log(counter())
console.log(counter())
*/

/*
Task 2: Rate Limiter Function
Create a function rateLimiter(fn, limit) that returns a new function. The returned function allows calling fn only once within a limit time in milliseconds. If it is called again before the limit is reached, it should return "Rate limit exceeded".
*/

/*
// Rate limiter function
function rateLimiter(fn, limit) {
    // This variable tracks the timestamp of the last function call
    let lastCalled = 0;

    // Returning a new function that wraps the original function (fn)
    return function() {
        // Get the current time in milliseconds
        const now = Date.now();

        // Check if the function was called too soon (before the limit has passed)
        if (now - lastCalled < limit) {
            // If called before the limit, return the "Rate limit exceeded" message
            return "Rate limit exceeded";
        }

        // If it's okay to call the function, update the last called time
        lastCalled = now;

        // Call the original function (fn) and return its result
        return fn(...arguments);  // Using spread syntax to pass any arguments to fn
    };
}

// Example function that we want to rate limit
function myFunction() {
    return "Function executed!";  // Simple message when function is called
}

// Create a rate-limited version of myFunction with a 2-second limit
const limitedFunction = rateLimiter(myFunction, 2000);

// Call the rate-limited function for the first time
console.log(limitedFunction());  // Expected: "Function executed!"

// Call the rate-limited function again before the 2 seconds are up
console.log(limitedFunction());  // Expected: "Rate limit exceeded"

// After waiting for 3 seconds (more than the limit of 2 seconds), call the function again
setTimeout(() => {
    console.log(limitedFunction());  // Expected: "Function executed!" after 3 seconds
}, 3000);
*/

/* 
Task 3: Memoization Function
Write a function memoize(fn) that returns a memoized version of fn. The memoized function should cache the results of function calls, and return the cached result if the same inputs are provided again.
*/

function memoize(fn) {
  // Cache object to store the results of function calls
  const cache = {};

  // Return a new function that wraps the original function (fn)
  return function (...args) {
    // Create a unique key from the arguments to check if the result is cached
    const key = JSON.stringify(args);

    // Check if the result for these arguments already exists in the cache
    if (cache[key]) {
      console.log("Returning cached result");
      return cache[key]; // Return the cached result if available
    }

    // If the result is not in cache, call the original function
    const result = fn(...args);

    // Store the computed result in the cache for future calls
    cache[key] = result;

    return result; // Return the computed result
  };
}

// Example function to memoize
function add(a, b) {
  console.log("Computing...");
  return a + b;
}

// Create a memoized version of the `add` function
const memoizedAdd = memoize(add);

// Testing the memoized function
console.log(memoizedAdd(1, 2)); // "Computing..." followed by 3
console.log(memoizedAdd(1, 2)); // "Returning cached result" followed by 3 (cached result)
console.log(memoizedAdd(2, 3)); // "Computing..." followed by 5
console.log(memoizedAdd(1, 2)); // "Returning cached result" followed by 3 (cached result)
