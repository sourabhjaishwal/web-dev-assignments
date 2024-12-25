// Challenges on Array

// Declare an array named 'teaFlavors' that contains the strings "green tea", "black tea", and "oolong tea". Access the first element of the array and store it in a variable named "firstTea".
/*
let teaFlavors = ['green tea', 'black tea', 'oolong tea'];
let firstTea = teaFlavors[0];
console.log(firstTea);
*/

// Declare an array named 'cities' containing "London", "Tokyo", "Paris" and "New York". Access the third element in the array, and store in a variable named "favoriteCity".
/*
let cities = ["London", "Tokyo", "Paris", "New York"];
favoriteCity = cities[2];
console.log(favoriteCity);
*/

// You have an array named "teaTypes" containing "herbal tea", "white tea", "masala chai" and "ginger tea". Change the second element of the array to "jasmine tea".
/*
let teaTypes = new Array("herbal tea", "white tea", "masala chai", "ginger tea");
teaTypes[1] = "jasmine tea";
console.log(teaTypes)
*/

// Declare an array named "citiesVisited" containing "Mumbai" and "Sydney". Add "Berlin" to the array using the "push" method
/*
let citiesVisited = ["Mumbai", "Sydney"];
console.log(citiesVisited)
// citiesVisited[2] = "Berlin";
// citiesVisited[citiesVisited.length] = "Berlin";
citiesVisited.push("Berlin");
console.log(citiesVisited)
*/

// You have an araay named "teaOrders" with "chai", "iced tea", "matcha" and "earl grey". Remove the last element of the array using the "pop" method and store it in a variable named "lastOrder".
/*
let teaOrders = ["chai", "iced tea", "matcha", "earl grey"];
console.log(teaOrders);
let lastOrder = teaOrders.pop();
console.log(teaOrders);
console.log(lastOrder);
*/

// You have an array named "popularTeas" containing "green tea", "oolong tea" and "chai". Create a soft copy of this array and name it as "softCopyTeas".
/*
let popularTeas = ["green tea", "oolong tea", "chai"];
let softCopyTeas = popularTeas;
popularTeas.pop();
console.log(softCopyTeas);
console.log(popularTeas);
*/

// You have an array named "topCities" containing "Berlin", "Singapore" and "New York". Create a hard copy of this array named "hardCopyCities".
/*
let topCities = ["Berlin", "Singapore", "New York"];
let hardCopyCities = [...topCities];  // rest and spread operator
let hardCopyCities = topCities.slice();  // another method to create copy
topCities.pop();
console.log(topCities);
console.log(hardCopyCities);
*/

//You have 2 arrays: "europianCities" containing "Paris" and "Rome" and "asianCities" containing "Tokyo" and "Bangkok". Merge these two arrays into a new array named "worldCities".
/*
let europeanCities = ["Paris", "Rome"];
let asianCities = ["Tokyo", "Bangkok"];
let worldCities = europeanCities.concat(asianCities);
console.log(worldCities);
*/

// You have an array named "teaMenu" containing "masala chai", "oolong tea", "black tea", "herbal tea", "green tea" and "eral grey". Find the length of the array and store in a new variable named "menuLength".
/*
let teaMenu = ["masala chai", "oolong tea", "black tea", "herbal tea", "green tea", "eral grey"];
console.log(teaMenu);
let menuLength = teaMenu.length;
console.log(menuLength);
*/

// You have an array named "cityBucketList" containing "Korea", "London", "San Francisco", "Cape Town", "Melborne" and "Vancouver". Check if "London" is in the array and store the result in a variable named "isLondonInList". Next check Vancouver is in the array and store in variable named "isVancouverInList".

let cityBucketList = ["Korea", "London", "San Francisco", "Cape Town", "Vancouver"];
console.log(cityBucketList);
let isLondonInList = cityBucketList.includes("London");
console.log(isLondonInList);

let isVancouverInList = cityBucketList.includes("Vancouver");
console.log(isVancouverInList);

