// Playing with Types

// 1. Write a function stringToNumber that takes a string input and tries to convert it to a number. If the conversion fails, return "Not a number".
/*
function stringToNumber(input) {
    let convert = Number(input);
    if (isNaN(convert)) {
        return "Not a Number"
    }
    return convert;
}

let result1 = stringToNumber("Hello!");
console.log(result1);

let result2 = stringToNumber(123);
console.log(result2);
*/

// 2. Write a function flipBoolean that takes any input and converts it to its boolean equivalent, then flips it. For example, true becomes false, 0 becomes true, etc.
/*
function flipBoolean(input) {
    return !Boolean(input);
}

console.log(flipBoolean(true));
console.log(flipBoolean(0));
console.log(flipBoolean(false));
console.log(flipBoolean(1));
console.log(flipBoolean('Hello'));
console.log(flipBoolean(null));
*/

// 3. Write a function whatAmI that takes an input and returns a string describing its type after conversion. If it's a number, return "I'm a number!", if it's a string, return "I'm a string!"
/*
function whatAmI(input) {
    if (typeof input === 'number') {
        return "I'm a number!";
    } else if (typeof input === 'string') {
        return "I'm a string!";
    } else {
        return "I'm neither a number nor a string!";
    }
}

let string1 = whatAmI("Hello!");
console.log(string1); // Output: "I'm a string!"

let num1 = whatAmI(123);
console.log(num1); // Output: "I'm a number!"
*/

// 4. Write a function isItTruthy that takes an input and returns "It's truthy!" if the value is truthy in JavaScript, or "It's falsey!" if it's falsey.

function isItTruthy(value) {
  if (value) {
    return "It's truthy!";
  } else {
    return "It's falsey!";
  }
}

console.log(isItTruthy(true));
// console.log(isItTruthy("ABC"));
// console.log(isItTruthy(false));
// console.log(isItTruthy(null));
// console.log(isItTruthy(""));
// console.log(isItTruthy(undefined));
// console.log(isItTruthy(0));
// console.log(isItTruthy(NaN));
// console.log(isItTruthy());
