// THIS and Binding Context

const person = {
  name: "hitesh",
  age: 25,
  greet() {
    console.log(`Hi, I'm ${this.name}`);
  },
};

person.greet();
const greetFunction = person.greet;
greetFunction();

const boundGreet = person.greet.bind({ name: "John" });
boundGreet();

// Learn more about below topics from google search
// bind, call and apply
