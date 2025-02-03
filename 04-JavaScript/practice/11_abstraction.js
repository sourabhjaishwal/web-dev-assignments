// Abstraction

class CoffeeMachine {
  start() {
    // complex calculation
    return `Staring the Machine...`;
  }
  brewCoffee() {
    // complex calculation
    return `Brewing coffee...`;
  }
  pressStartButton() {
    let msgOne = this.start();
    let msgTwo = this.brewCoffee();
    return `${msgOne} + ${msgTwo}`;
  }
}

let myMachine = new CoffeeMachine();
// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());
console.log(myMachine.pressStartButton());
