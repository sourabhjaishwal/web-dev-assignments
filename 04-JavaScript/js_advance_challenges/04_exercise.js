// THIS and Binding Context
/*
Task 1: Bind the Correct Context
Create an object person with properties name and a method introduce(). Use the bind() method to ensure the method works correctly when passed to another function.
*/

/*
const person = {
  name: "John",
  introduce: function () {
    console.log(`Hi, my name is ${this.name}.`);
  },
};

// Create another function that calls introduce
function callIntroduce(func) {
  func();
}

// Bind the introduce method to the person object and pass it to another function
const boundIntroduce = person.introduce.bind(person);
callIntroduce(boundIntroduce); // Output: Hi, my name is John.
*/

/*
Task 2: Using call() to Invoke a Function with Different Contexts
Write a function introduce() that uses the this keyword to introduce a person by name. Then, invoke introduce() using call() to introduce different people with the same function.
*/

/*
function introduce() {
  console.log(`Hi, my name is ${this.name}.`);
}

const person1 = { name: "Alice" };
const person2 = { name: "Bob" };

// Use call() to invoke introduce() with different contexts
introduce.call(person1); // Output: Hi, my name is Alice.
introduce.call(person2); // Output: Hi, my name is Bob.
*/

// Task 3: Using apply() to Pass Arguments with Context
/*
Create a function sum() that accepts two numbers and uses this to access a multiplier value. Then, invoke sum() with different contexts using apply(), passing the numbers as an array.
*/

function sum(a, b) {
  console.log(`The sum of ${a} and ${b} is ${(a + b) * this.multiplier}.`);
}

const context1 = { multiplier: 2 };
const context2 = { multiplier: 3 };

// Use apply() to invoke sum() with different contexts and pass arguments as an array
sum.apply(context1, [5, 10]); // Output: The sum of 5 and 10 is 30.
sum.apply(context2, [5, 10]); // Output: The sum of 5 and 10 is 45.