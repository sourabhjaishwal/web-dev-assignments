// Prototypal Inheritance in JavaScript
/*
Task 1: Create Inheritance Using Prototypes
Create a constructor Animal with a method makeSound(). Then create a constructor Dog that inherits from Animal and adds a method bark()
*/

/*
// Animal constructor
function Animal(name) {
    this.name = name;  // Initialize name
}

// Animal method - makeSound
Animal.prototype.makeSound = function () {
    console.log(`${this.name} makes a sound.`);  // Log the animal sound
};

// Dog constructor inherits from Animal
function Dog(name) {
    Animal.call(this, name);  // Call Animal constructor to set 'name'
}

// Set Dog prototype to inherit from Animal prototype
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;  // Set the constructor back to Dog

// Dog-specific method - bark
Dog.prototype.bark = function () {
    console.log(`${this.name} barks!, Woof! Woof!`);  // Log the barking sound
};

// Create a new Dog instance
const myDog = new Dog("Jonny");

// Call methods on the Dog instance
myDog.makeSound();  // Inherited from Animal
myDog.bark();       // Specific to Dog
*/

/*
Task 2: Shape and Rectangle Inheritance
Create a constructor function Shape that takes color as a parameter and has a method getColor() that returns the color.
Create another constructor Rectangle that inherits from Shape and adds properties width and height. Add a method getArea() to Rectangle that returns the area of the rectangle.
*/

// Constructor function for Shape
function Shape(color) {
  this.color = color; // Initialize color property
}

// Shape method - getColor
Shape.prototype.getColor = function () {
  return this.color; // Return the color of the shape
};

// Create an instance of Shape
const myShape = new Shape("blue");
console.log(myShape.getColor()); // Output: blue

// Constructor function for Rectangle, inheriting from Shape
function Rectangle(width, height, color) {
  Shape.call(this, color); // Call the Shape constructor to initialize the color
  this.width = width; // Initialize width property
  this.height = height; // Initialize height property
}

// Set Rectangle prototype to inherit from Shape
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle; // Correct the constructor pointer

// Add getArea method to Rectangle prototype
Rectangle.prototype.getArea = function () {
  return this.width * this.height; // Calculate and return the area of the rectangle
};

// Create an instance of Rectangle
const myRectangle = new Rectangle(3, 4, "red");
console.log(myRectangle.getArea()); // Output: 12 (3 * 4)
console.log(myRectangle.getColor()); // Output: red (inherited from Shape)
