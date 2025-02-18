// Prototypal Inheritance

function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`Hello my name is ${this.name}`);
};

let hitesh = new Person("Hitesh");
console.log(hitesh);
hitesh.greet();
