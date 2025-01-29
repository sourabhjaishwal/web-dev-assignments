// Playing with variables

// Using the provided variables a=18 and b=24, perform the following mathematical operations: addition, subtraction, multiplication, division, increment, decrement, and modulus. Do not modify the values of a and `b."

const a = 18;
const b = 24;

// Addition of two values
function add() {
  return (c = a + b);
}
console.log(`Add:`, add());

// Subtract smaller value from larger value
function subtract() {
  return (c = a - b);
}
console.log(`Subtract:`, subtract());

// Multiply both the values
function multiply() {
  return (c = a * b);
}
console.log(`Multiply:`, multiply());

// Divide larger value by small value
function divide() {
  return (c = b / a);
}
console.log(`Divide:`, divide());

// Increase value of a by 1
function increase() {
  return (c = a + 1);
}
console.log(`Increase value of a:`, increase());

// Decrease value of b by 1
function decrease() {
  return (c = b - 1);
}
console.log(`Decrease value of b:`, decrease());

// Divide larger value by smaller value to find the reminder
function reminder() {
  return (c = a % b);
}
console.log(`Reminder:`, reminder());
