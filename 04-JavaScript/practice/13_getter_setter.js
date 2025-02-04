// Getters and setters

class Employee {
  #salary; // Private field
  constructor(name, salary) {
    if (salary < 0) {
      throw new Error("Salary cannot be in negative.");
    }
    this.name = name;
    this.#salary = salary; // Initialize private field
  }

  get salary() {
    return this.#salary; // Allow salary to be accessed
  }

  set salary(value) {
    if (value < 0) {
      console.error("Invalid salary");
    } else {
      this.#salary = value; // Correctly set the private field
    }
  }
}

let emp1 = new Employee("Alice", 50000); // Fix negative salary
console.log(emp1.salary); // Get salary via getter
emp1.salary = 65000; // Set new salary
console.log(emp1.salary); // Get updated salary
