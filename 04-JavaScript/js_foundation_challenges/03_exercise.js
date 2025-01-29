// Arrays and Methods
// Utilise the inbuilt methods of arrays in Javascript to solve the below tasks:

// 1. Array Filtering: Write a function filterNumbers(arr) that returns only numbers from a mixed array
/*
function filterNumber(arr) {
    return arr.filter(item => typeof item === 'number')
}

let myArr = [1, 'hello', 3, true, 5, null, 7]
const numbers = filterNumber(myArr)
console.log(numbers)
*/

// 2. Array Reversal: Write a function reverseArray(arr) that reverses the array
/*
function reverseArray(arr) {
    return arr.reverse()
}

let fruits = ["apple", "orange", "banana", "kiwi", "watermelon"]
let reverseFruits = reverseArray(fruits)
console.log(reverseFruits)
*/

// 3. Find Maximum in an Array: Write a function findMax(arr) that returns the largest number in the array
/*
function findMax(arr) {
    let max = arr[0]
    for (let item of arr) {
        if (item > max) {
            max = item;
        }
    }
    return max;
}

let numbers = [10, 40, 50, 35, 90, 75]
let maxNumber = findMax(numbers)
console.log(`Max Number is: ${maxNumber}!`)
*/

// 4. Remove Duplicates from an Array: Write a function removeDuplicates(arr) that returns a new array with all duplicates removed
/*
function removeDuplicates(arr) {
    let uniqueArray = []
       arr.forEach(function (item) {
        if (!uniqueArray.includes(item)) {
            uniqueArray.push(item);
        }
    });
    return uniqueArray;
}

let numbers = [10, 30, 40, 20, 10, 30, 60, 70, 70, 90]
let newNumbers = removeDuplicates(numbers);
console.log(newNumbers);
console.log(numbers);
*/

// 5. Write a function flattenArray(arr) that takes a nested array and `returns a single flattened array

function flattenArray(arr) {
    return arr.flat();
}

let nestedArray = [ [10, 20, 30], [40, 50, 60], [70, 80, 90], [10, 30, 50], [60, 80, 100]];

let newArray = flattenArray(nestedArray);
console.log(newArray);
console.log(nestedArray);