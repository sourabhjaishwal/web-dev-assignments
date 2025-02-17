// Asynchronous Javascript

// whatever code we have written until now, it will run line-by-line and in a synchronous way (regular code)

// asynchronous = having a pause in a program
// these usecases takes time to complete
// example: network calls (from backend, server, database)
// example: write/read files
// example: time related functions

console.log("chaicode");

function sayHello() {
  console.log("I would like to say Hello!");
}

setTimeout(() => {
  sayHello();
}, 5000);

for (let index = 0; index < 10; index++) {
  console.log(index);
}
