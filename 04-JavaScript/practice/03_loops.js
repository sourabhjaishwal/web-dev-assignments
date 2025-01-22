// Challenges on Loops

// Write a `while` loop that calculates the sum of all numbers from 1 to and stores the result in a variable named `sum`.
/*
let sum = 0;
let i = 1;

while (i <= 5) {
  sum += i; // sum = sum + i
  i++;
}
console.log(sum);
*/

// Write a `while` loop that counts down from 5 to 1 and stored the numbers in an array named `countdown`.
/*
let countdown = [];
let j = 5;

while (j > 0) {
  countdown.push(j);
  j--;
}
console.log(countdown);
*/

// Write a `do-while` loop that prompts a user to enter their favorite tea type unitl they enter "stop". Store each tea type in an array named `teaCollection`.
/*
let teaCollection = [];
let tea;

do {
  tea = prompt(`Enter your favourite tea (type "stop" to finish.)`);
  if (tea !== "stop") {
    teaCollection.push(tea);
  }
} while (tea !== "stop")
*/

// Write a `do-while` loop that adds numbers from 1 to 3 and stores the result in a variable named `total`.
/*
let total = 0;
let k = 1;

do {
    total = total + k;
    k++;
} while (k <= 3);
console.log(total);
*/

// Write a `for` loop that multiplies each element in the array `[2, 4, 6]` by 2 and stores the results in a new array named `multipliedNumbers`.
/*
let multipliedNumbers = [];
let numbers = [2, 4, 6];

for (let i = 0; i < numbers.length; i++) {
    // takeNumber = numbers[i] * 2;
    // multipliedNumbers.push(takeNumber);
    multipliedNumbers.push(numbers[i] * 2)
}
console.log(multipliedNumbers);
*/

// Write a `for` loop that lists all the cities in the array `["Paris", "New York", "Tokyo", "London"]` and stores each city in a new array named `cityList`.

let cities = ["Paris", "New York", "Tokyo", "London"];
let cityList = [];

for (let c = 0; c < cities.length; c++) {
    const myCity = cities[c];
    cityList.push(myCity);
}
console.log(cityList);
