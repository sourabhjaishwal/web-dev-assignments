// Prototypes

// Javascript is a prototype based language, but acts as a class-object or OOPS based language (has a mask on it)
// Whenever we create a data, it would be of arrays, strings, or objects, the prototype will be generated automatically behind the scenes
// Prototype means = extra properties or functionality for any given datatype, provide a huge list of properties or functionality.

/*
let computer = {cpu: 12,}
let lenovo = {
    screen: "HD",
    __proto__: computer,
}
let dell = {storage: "1TB"}
let tomHardware = {}

console.log(`computer`, computer.__proto__)
// __proto__    ->    (dunder - underscore)

console.log(`lenovo`, computer.__proto__)
*/

let car = {tyres: 4, engine: "V8 engine", exhaust: 2}
let tesla = {
    driver: "AI",
}

Object.setPrototypeOf(tesla, car)  // explicit
console.log(`tesla`, Object.getPrototypeOf(tesla))