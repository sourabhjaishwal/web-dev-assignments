// Polymorphism

class Bird {
  fly() {
    return `Flying ...`;
  }
}

class Penguin extends Bird {
  fly() {
    return `Penguins can't fly....`;
  }
}

let bird = new Bird();
let penguin = new Penguin();
console.log(bird.fly());
console.log(penguin.fly());

// Static method - only can be called by class itself
/*
class Calculator {
    static add(a, b) {
        return a + b;
    }
}

let miniCal = new Calculator();
// console.log(miniCal.add(1, 2));

console.log(Calculator.add(2, 3));
*/
