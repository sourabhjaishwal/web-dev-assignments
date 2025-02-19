// Common JS

// named export
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

// for exporting functions & variables in common JS (old)
module.exports = {
  add,
  subtract,
  multiply,
};

// create a separate file appC.js
