// Inheritance in JS

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

// Inheritance
class Car extends Vehicle {
  drive() {
    return `${this.make} : This is an inheritance example!`;
  };
}

let myCar = new Car("Toyota", "Etios", 2021);
console.log(myCar.start());
console.log(myCar.drive());

let newCar = new Vehicle("Tata", "Safari", 2018);
console.log(newCar.make);
