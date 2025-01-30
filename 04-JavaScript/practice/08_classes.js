// Classes, Objects in JS

// object-oriented programming - ability to create objects
// 1. Classes & Objects
// 2. Encapsulation
// 3. Inheritance
// 4. Abstraction
// 5. Polymorphism

// We need to create objects which are instances of the classes.

// Object literal
/*
let car = {
    make: "Toyota",
    model: "Etios",
    year: "2020",
    start: function () {
        return `${this.make} car got started in ${this.year}`;
    },
};
console.log(car.start());
*/

/*
function Person(name, age) {
    this.name = name;
    this.age = age;
}

let john = new Person("John", 21);
console.log(john.name);
*/

// Prototype chain
/*
function Animal(type) {
    this.type = type;
}

Animal.prototype.speak = function () {
        return `${this.type} makes a sound`
}

Array.prototype.hitesh = function () {
    return `Custom method ${this}`
}

let myArray = [1, 2, 4, 5]
console.log(myArray.hitesh())
*/

// classes
class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  start() {
    return `${this.model} is a car from ${this.make} from the year ${this.year}`;
  }
}
