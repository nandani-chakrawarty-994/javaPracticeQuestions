
// SECTION 1: OOPS Thinking with Objects

// 1.Create an object called laptop that contains brand, price, and a start method that prints “Laptop started”.

let laptop = {
    brand: 'Dell',
    price: 70000,
    start: function(){
        console.log('Laptop Started')
    },

    // 2.Add one more method to the same object that increases the price by 10 percent.
    increase: function(price) {
        this.price = this.price + (this.price * (10/100))
        return this.price
    }
}
// laptop.start();
// console.log(laptop.increase())
// console.log(laptop.price)

//3.Now imagine you need 10 laptops with same structure but different data.
//Write down (in words or code) what problems you will face if you keep using plain objects.

let laptop1 = {
    brand: "Dell Inspiron",
    price: 50000
};

let laptop2 = {
    brand: "HP Pavilion",
    price: 60000
};

let laptop3 = {
    brand: "Lenovo IdeaPad",
    price: 45000
};

let laptop4 = {
    brand: "Acer Aspire",
    price: 55000
};

let laptop5 = {
    brand: "Asus VivoBook",
    price: 52000
};

let laptop6 = {
    brand: "Apple MacBook Air M1",
    price: 80000
};

let laptop7 = {
    brand: "Apple MacBook Air M2",
    price: 100000
};

let laptop8 = {
    brand: "MSI Modern",
    price: 58000
};

let laptop9 = {
    brand: "Samsung Galaxy Book",
    price: 70000
};

let laptop10 = {
    brand: "Dell XPS",
    price: 140000
};


// some issues in this code becouse more objects cretaed and number of lines increase
// and this code is not reusible
// If we keep using plain objects to create multiple laptops, we will face:
// Code duplication
// Manual repetitive work
// Risk of inconsistent structure
// Hard to update or add new properties
// No reusability
// Difficult to maintain large number of objects

// SECTION 2: Classes and Objects (Reinforcement)
// 4.Create a class named Employee that stores:
// name
// salary
// Add a method showDetails that prints name and salary.
class Employee{
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    showDetails() {
        console.log(`Employee name is ${this.name} and salary ${this.salary}`)
    }
}

let empl1 = new Employee('kartik', 30000)
// empl1.showDetails();
let empl2 = new Employee('nandani', 20000)
// empl2.showDetails();
let empl3 = new Employee('xyz', 10000)
// empl3.showDetails();

//6.Explain in your own words:
//Why is class considered a better option than writing similar objects again and again?

// A class is better because it avoids repetition, keeps structure consistent, allows reusability, makes updates easier, and keeps all objects clean and organized.
// With classes, you write code once and create unlimited objects with the same structure.


// SECTION 3: Constructor and Initialization
// 	7.	Create a class named BankAccount.
// Its constructor should accept accountHolderName and balance.
// 	8.	Inside the constructor, store both values using this.
// 	9.	Add a method deposit(amount) that increases the balance.
// 	10.	Create two bank accounts and deposit money into only one.
// Observe and explain why the second account is not affected.

class BankAccount {
    constructor(accountHolderName,balance) {
        this.accountHolderName = accountHolderName
        this.balance = balance
    }
    deposit(balance) {
        this.balance = this.balance + 1000
        return this.balance;
    }
}
// let BankAccount1 = new BankAccount('kartik', 40000);
// BankAccount1.deposit()
// console.log(BankAccount1)
// let BankAccount2 = new BankAccount('nandani', 60000);
// console.log(BankAccount2)

// Because each object created from a class has its own memory and properties.
// Changing acc1 updates only acc1, not acc2.

// SECTION 4: Understanding this (Very Important)
// 	11.	Create an object named profile with a property username and a method printName that logs this.username.
// 	12.	Call the method normally and observe the output.
// 	13.	Store the method in a separate variable and call it.
// Observe what happens to this and explain why.
// 	14.	Modify the code so that this works correctly again.

let profile = {
    username: 'kartik',
    // printName:  function(){
    //     console.log(this.username)
    // }
    printName: () => {
        console.log(profile.username)
    }

}
// let print = profile.printName.bind(profile)
let print = profile.printName
//print()

//When stored in a variable, the method loses its original object reference, so this becomes undefined. Using bind(), arrow functions, or call/apply fixes this.

// SECTION 5: Constructor Function and Prototype
// 	15.	Create a constructor function called Vehicle that accepts type and wheels.
// 	16.	Add a method describe inside the constructor and observe memory behavior when multiple objects are created.
// 	17.	Move the same method to Vehicle.prototype and repeat the test.
// 	18.	Explain why the prototype approach is preferred.

function Vehicle(type, wheels) {
    this.type = type
    this.wheels = wheels
    // add manually method
    // this.describe = function() {
    //     console.log(`type is ${this.type} and wheels ${this.wheels}`)
    // }
}
//add method to prototype
Vehicle.prototype.describe = function() {
    console.log(`type is ${this.type} and wheels ${this.wheels}`)
}
let obj1 = new Vehicle('car', 4);
let obj2 = new Vehicle('bike', 2)
obj1.describe()
obj2.describe()

// Placing methods on the prototype is preferred because it saves memory (one copy for all objects), ensures reusability, and makes updates easier for all objects created from the constructor.


// SECTION 6: call Method Practice
// 	19.	Create a function showBrand that prints this.brand.
// 	20.	Create two different objects with brand values.
// 	21.	Use call to execute showBrand for both objects.
// 	22.	Explain what problem call is solving here.
function showBrand() {
    console.log(this.brand)
}
let brand1 ={
    brand: 'Dell'
}
let brand2 = {
    brand: 'Hp'
}
showBrand()
showBrand.call(brand1)
showBrand.call(brand2)

// call() helps a function borrow an object’s properties by setting its this value manually.
// It allows us to use one function for multiple objects without rewriting the function.

// SECTION 7: apply Method Practice
// 	23.	Create a function introduce that accepts two arguments: city and role, and prints name, city, and role using this.name.
// 	24.	Create an object with a name property.
// 	25.	Use apply to call introduce using the object and an array of arguments.
// 	26.	Explain in simple words how apply differs from call.

function introduce (city, role) {
    console.log(this.name, city, role)
}
let naam = {
    name: 'shivaay'
}
introduce.apply(naam, ['jabalpur', 'developer'])

// apply() is similar to call(), but it accepts arguments as an array instead of separate values. It allows a function to use another object’s properties.

// call() → function call karte waqt alag-alag arguments pass karte ho
// apply() → function call karte waqt array of arguments pass karte ho
// Dono me this manually set hota hai

// SECTION 8: bind Method Practice
// 	27.	Create a function greet that prints “Hello” followed by this.name.
// 	28.	Bind this function to an object and store the returned function in a variable.
// 	29.	Call the bound function later and observe the output.
// 	30.	Explain why bind is useful when functions are executed later or inside callbacks.

function greet(){
    console.log('Hello ' + this.name)
}
let hello = {
    name: 'kartik'
}
let newFunc = greet.bind(hello)
newFunc()

// bind() is useful because it lets you permanently attach a specific object to a function, ensuring that this points correctly even when the function is called later or used as a callback.