// Encapsulation, Polymorphism, Abstraction, and Getters/Setters

// Task 1: Encapsulation Using Getters and Setters
// Create a class BankAccount with a private property _balance. Add methods deposit(amount) and withdraw(amount). Use getters and setters to access and modify the _balance while ensuring the balance never goes negative.
/*
class BankAccount {
    // Initialize the private balance variable
    #_balance = 0;

    // Constructor that allows setting an initial balance
    constructor(balance = 0) {
        this.#_balance = balance;
    }

    // Deposit method to add money to the account
    deposit(amount) {
        if (amount > 0) {
            this.#_balance += amount;
        } else {
            console.log("Deposit amount must be positive.");
        }
        return this.#_balance;
    }

    // Withdraw method to subtract money from the account
    withdraw(amount) {
        if (amount > 0 && this.#_balance >= amount) {
            this.#_balance -= amount;
        } else if (amount > this.#_balance) {
            console.log("Insufficient funds.");
        } else {
            console.log("Withdrawal amount must be positive.");
        }
        return this.#_balance;
    }

    // Getter to retrieve the balance
    get balance() {
        return this.#_balance;
    }

    // Setter to modify the balance directly (optional, but not necessary for the problem)
    set balance(amount) {
        if (amount >= 0) {
            this.#_balance = amount;
        } else {
            console.log("Balance cannot be negative.");
        }
    }
}

const myAccount = new BankAccount(0);
console.log(myAccount.balance); // 0
myAccount.deposit(1000);          // Adds 1000
console.log(myAccount.balance); // 1000
myAccount.withdraw(400);        // 600
myAccount.withdraw(1200); // Insufficient funds
console.log(myAccount.balance); // 600
myAccount.withdraw(100);        // Subtracts 100
console.log(myAccount.balance); // 500
*/

// Task 2: Polymorphism with Method Overriding
// Create a class Shape with a method area() that returns 0. Create two subclasses Circle and Rectangle that override the area() method to calculate the area of a circle and a rectangle, respectively.

class Shape {
    // Default area method that returns to 0
    area() {
        return 0;
    }
}

// Subclass Circle that overrides the area method
class Circle extends Shape {
    constructor(radius) {
        super(); // Calls the parent class constructor (Shape)
        this.radius = radius;
    }

    area() {
        return (Math.PI * this.radius * this.radius).toFixed(2); // Round to 2 decimal places
    }
}

// Subclass Rectangle that overrides the area method
class Rectangle extends Shape {
    constructor(width, height) {
        super(); // Calls the parent class constructor (Shape)
        this.width = width;
        this.height = height;
    }

    // Override the area method for Rectangle
    area() {
        return (this.width * this.height).toFixed(2); // Round to 2 decimal places
    }
}

const shape = new Shape();
console.log("Shape area: ", shape.area());

const circle = new Circle(5);
console.log(`Circle area: ${circle.area()}`);

const rectangle = new Rectangle(4, 6);
console.log(`Rectangle area: ${rectangle.area()}`);
