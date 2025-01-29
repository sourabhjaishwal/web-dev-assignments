// Constructor Function and erros - (interview topic)

// function greet (name) {
//     console.log("Hello");
// }
/*
function Person(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
}

function Car (model, manufactureDate, series) {
    this.model = model;
    this.manufactureDate = manufactureDate;
    this.series = series;
}

let myCar = new  Car ("Toyota", "13 Dec 2024", "Etios")
console.log(myCar);


let myNewCar = new Car ("Tata", "12 Nov 2024", "Safari")
console.log(myNewCar);
*/
// this - refers to newly created objects, provides a context

/*
function Tea(type) {
    this.type = type;
    this.describe = function () {
            return `this is a cup of ${this.type}`;
    }
}

let lemonTea = new Tea("lemon tea")
console.log(lemonTea.describe());
*/

/*
function Animal (species) {
    this.species = species
}

Animal.prototype.sound = function () {
    return `${this.species} makes a sound`;
}

let dog = new Animal("Dog")
console.log(dog.sound())
*/

function Drink(name) {
    if (!new.target) {
        throw new Error("Drink must be called with new keyword");
    }
    this.name = name;
}

let tea = new Drink("tea")
let coffee = Drink("coffee")
console.log(tea, coffee);