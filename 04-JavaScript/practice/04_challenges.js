// Ten Challenges to learn all kind of loops

// 1. Write a `for` loop that loops through the array `["green tea", "black tea", "chai", "oolong tea"]` and stops the loop when it finds `"chai"`. Store all teas before `"chai"` in a new array named `selectedTeas`.
/*
let teas = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = [];

for (let i = 0; i < teas.length; i++) {
    if (teas[i] === 'chai') {
        break;
    }
    selectedTeas.push(teas[i]);
}
console.log(selectedTeas);
*/

// 2. Write a `for` loop that loops through the array `["London", "New York", "Paris", "Berlin"]` and skips the loop when it finds `"Paris"`. Store the other cities in a new array named `visitedCities`.
/*
let cities = ["London", "New York", "Paris", "Berlin"];
let visitedCities = [];

for (let c = 0; c < cities.length; c++) {
    if (cities[c] === 'Paris') {
        continue;
    }
    visitedCities.push(cities[c])
}
console.log(visitedCities);
*/

// 3. Use a `for-of` loop to iterate through the array `[1, 2, 3, 4, 5]` and stop when number 4 is found. Store the numbers before `4` in an array named `smallNumbers`.
/*
let numbers = [1, ,2 ,3 ,4 ,5]; 
let smallNumbers = [];

for (const num  of numbers) {
    if (num === 4) {
        break;
    }
    smallNumbers.push(num);
}
console.log(smallNumbers);
*/

// 4. Use a `for-of` loop to iterate through the array `["chai", "green tea", "herbal tea", "oolong tea", "black tea", "masala chai"]` and skip `"herbal tea"` and store in an array named `skippedTea`. Store the other teas in an array named `preferredTeas`.
/*
let teas = ["chai", "green tea", "herbal tea", "oolong tea", "black tea", "masala chai"];
let preferredTeas = [];
let skippedTea = [];

for (let myTea of teas) {
    if (myTea === 'herbal tea') {
        skippedTea.push(myTea);
        continue;
    }
    preferredTeas.push(myTea)
}
console.log(preferredTeas);
console.log(skippedTea);
*/

// 5. Use a `for-in` loop to loop through an object containing city populations. Stop the loop when the population of `"Berlin"` is found and store all previous cities populations in a new object `cityNewPopulations`.
/*
let citiesPopulation = {
    "London": 8900000,
    "New York": 8400000,
    "Paris": 2200000,
    "Berlin": 3500000
};
*/

/*
let citiesPopulation = {
    "London": 8900000,
    "New York": 8400000,
    "Berlin": 3500000,
    "Paris": 2200000
};

let cityNewPopulations = {};

for (const city in citiesPopulation) {
    if (city === 'Berlin') {
        break;
    }
//    key = value
    cityNewPopulations[city] = citiesPopulation[city]
}
console.log(cityNewPopulations)
*/

// 6. Use a `for-in` loop to loop through an object containing city populations. Skip any city with a poupulation below 3 million and store the rest in a new object named `largeCitites`.
/*
let worldCities = {
    "Sydney": 5000000,
    "Tokyo": 9000000,
    "Berlin": 3500000,
    "Paris": 2200000
};
*/

/*
let worldCities = {
    "Sydney": 5000000,
    "Tokyo": 9000000,
    "Berlin": 3500000,
    "Paris": 2200000
};

let largeCitites = {};

for (const city in worldCities) {
    if (worldCities[city] < 3000000) {
        continue;
    }
    largeCitites[city] = worldCities[city]
}
console.log(largeCitites)
*/

// 7. Write a `forEach` loop that iterates through the aaray `["earl grey", "green tea", "masala chai", "black tea"]`. Stop the loop when `"masala chai"` is found, and store all previous tea types in an array named `availableTeas`.
/*
let teaTypes = ["earl grey", "green tea", "masala chai", "black tea"];
let availableTeas = [];

teaTypes.forEach(function(tea) {
    if (tea === 'masala chai') {
        return;
    } else {
        availableTeas.push(tea);
    }
});
console.log(availableTeas);
*/

// 8. Write a `forEach` loop that iterates through the aaray `["Berlin", "Tokyo", "Sydney", "Paris"]`. Skip `"Sydney"` and store the other cities in a new array named `travelledCities`.
/*
let myWorldCities = ["Berlin", "Tokyo", "Sydney", "Paris"];
let travelledCities = [];

myWorldCities.forEach(city => {
    if (city === 'Sydney') {
        return;
    }
    travelledCities.push(city);
});
console.log(travelledCities);
*/

// 9. Write a `for` loop that iterates through the array `[2, 5, 7, 9, 11]`. Skip the value `7` and multiply the rest by 2. Store the results in a new array named `doubledNumbers`.
/*
let numbers = [2, 5, 7, 9, 11];
let doubledNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 7) {
        continue;
    }
    doubledNumbers.push(numbers[i] * 2);
}
console.log(doubledNumbers);
*/

// 10. Use a `for-of` loop to iterate through the array `["chai", "green tea", "black tea", "jasmine tea", "herbal tea"]`, and stop when the length of the cuurent tea name is greter than 10. Store the teas iterated over in an array named `shortTeas`.

let teaTypes = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];
let shortTeas = [];

for (let tea of teaTypes) {
    if (tea.length > 10) {
        break;
    }
    shortTeas.push(tea);
}
console.log(shortTeas);