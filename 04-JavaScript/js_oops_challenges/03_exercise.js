// Classes, Objects, and Inheritance

// Task 1: Class Inheritance
// Create a class Vehicle with properties make and model, and a method getDetails() that returns a string "Make: [make], Model: [model]". Create a subclass Car that extends Vehicle and adds a method startEngine() that returns "Engine started".
/*
class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    getDetails() {
        return `Make: ${this.make}, Model: ${this.model}`
    }
}

class Car extends Vehicle {
    constructor(make, model) {
        super(make, model);
    }
    startEngine(){
        return `Engine started!`
    }
}

let newCar = new Car("Tata", "Safari")
console.log(newCar.getDetails());
console.log(newCar.startEngine());
*/

// Task 2: Method Overriding in Inheritance
// Extend the Vehicle class from the previous task to include a method move() that returns "The vehicle is moving". Then, override the move() method in the Car class to return "The car is driving".
/*
class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    getDetails() {
        return `Make: ${this.make}, Model: ${this.model}`
    }
    move() {
        return `The vehicle is moving.`
    }
}

class Car extends Vehicle {
     constructor(make, model) {
        super(make, model);
    }
    startEngine(){
        return `Engine started!`
    }
    move(){
        return `The car is driving...`
    }
}

let newCar = new Car("Hyundai", "Verna")
console.log(newCar.getDetails());
console.log(newCar.startEngine());
console.log(newCar.move());
*/

// Task 3: Static Methods in Classes
// Add a static method isVehicle(obj) to the Vehicle class that checks if a given object is an instance of Vehicle. The method should return true if the object is a Vehicle or a subclass of Vehicle, and false otherwise.

class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    getDetails() {
        return `Make: ${this.make}, Model: ${this.model}`;
    }

    move() {
        return "The vehicle is moving";
    }

    // Static method to check if an object is a Vehicle or subclass of Vehicle
    static isVehicle(obj) {
        return obj instanceof Vehicle;
    }
}

// Car class extending Vehicle
class Car extends Vehicle {
    constructor(make, model) {
        super(make, model);
    }

    startEngine() {
        return "Engine started!";
    }

    move() {
        return "The car is driving";
    }
}

let newCar = new Car("Tata", "Safari");
let someObject = {};

// Check if newCar is an instance of Vehicle
console.log(Vehicle.isVehicle(newCar));     // Output: true (since Car is a subclass of Vehicle)
console.log(Vehicle.isVehicle(someObject)); // Output: false (since it's not an instance of Vehicle)
