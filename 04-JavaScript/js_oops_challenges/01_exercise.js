// Prototype Chaining
/*
Create a constructor function Animal that has a method speak() that return 'Animal speaking'.
Then create another constructor Dog that inherits from Animal using prototypes.
The Dog constructor should add a method bark() that returns 'Woof!'. Demonstrate the prototype chain between Dog and Animal.
*/

// Step 1: Create the Animal constructor function
function Animal() {
    // Animal doesn't need specific properties for now
  }
  
  Animal.prototype.speak = function() {
    return 'Animal speaking';
  };
  
  // Step 2: Create the Dog constructor function that inherits from Animal
  function Dog() {
    // Call Animal constructor (not required for this case, but good for extending functionality)
    Animal.call(this); // If needed, call Animal constructor to inherit properties
  }
  
  // Step 3: Set up inheritance (Dog inherits from Animal)
  Dog.prototype = Object.create(Animal.prototype);
  
  // Step 4: Set the constructor back to Dog
  Dog.prototype.constructor = Dog;
  
  // Step 5: Add the bark() method to Dog
  Dog.prototype.bark = function() {
    return 'Woof!';
  };
  
  // Demonstrating the prototype chain
  
  // Create an instance of Dog
  const myDog = new Dog();
  
  // Calling methods from both Dog and Animal
  console.log(myDog.speak()); // Inherited from Animal, Output: 'Animal speaking'
  console.log(myDog.bark());  // Defined in Dog, Output: 'Woof!'
  
  // Check prototype chain
  console.log(myDog instanceof Dog);      // true
  console.log(myDog instanceof Animal);   // true
  console.log(myDog.constructor);         // Function Dog() { ... }
  console.log(Object.getPrototypeOf(myDog));   // Dog { bark: [Function (anonymous)] }
  console.log(Object.getPrototypeOf(Object.getPrototypeOf(myDog)));  // Animal { speak: [Function (anonymous)] }
  