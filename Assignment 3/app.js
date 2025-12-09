
// ******************* section 1 Objects and OOPS Thinking (Foundation)

// question 1 -----------
// 1. Create a user object that stores name and email and has a login method which prints “User logged in”.
// let obj = {
//     name: "xyz",
//     email: "xyz.@gamil.com",
//     login: function(){
//         console.log("User login")
//     }
// }
// console.log(obj.name);
// console.log(obj['name']);
// obj.login();
// obj['login']();
// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(obj)

// questions 2 ----------
// 2.Imagine you now have 5 users.
// First, think how you would manage them without using a class.
// Then convert the same logic using a class and observe how the code becomes cleaner. Write code for both approaches.
// without class

// let obj1 = {
//     name: "kartik",
//     email: "xyz.@gamil.com",
//     login: function(){
//         console.log('User Login')
//     }
// }
// let obj2 = {
//     name: "kartik",
//     email: "xyz.@gamil.com",
//     login: function(){
//         console.log('User Login')
//     }
// }
// let obj3 = {
//     name: "kartik",
//     email: "xyz.@gamil.com",
//     login: function(){
//         console.log('User Login')
//     }
// }
// let obj4 = {
//     name: "kartik",
//     email: "xyz.@gamil.com",
//     login: function(){
//         console.log('User Login')
//     }
// }
// let obj5 = {
//     name: "kartik",
//     email: "xyz.@gamil.com",
//     login: function(){
//         console.log('User Login')
//     }
// }

// // with the class
// class User{
//     constructor(name,email) {
//         this.name = name
//         this.email = email
//     }
//     login() {
//         console.log(`${this.name} logged in`)
//     }
// }
// let user1 = new User("kartik", "xyz@gmail.com");
// let user2 = new User('nandani', "abc@gmail.com");
// let user3 = new User('xyv', "xyy@gmail.com");
// let user4 = new User('abc', "xzz@gmail.com");
// let user5 = new User('xyz', "zzz@gmail.com");

// user3.login()

// question 3 ---------
// 3.Create a product object that stores name and price and has a method which returns the final price after discount.
class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }
    discount() {
        return this.price-300
    }
}

// let product = new Product('kartik', 1000)
// let product2 = new Product('kartik', 2000)
// console.log(product2.discount())

// let a = 10;
// let b = ++a;
// console.log(a);
// console.log(b)


// **************************** section 2 Classes and Objects ***
// question 4,5 -------------------
// 4.Create a Car class with the following:
// brand
// speed
// a drive method that prints the car brand and speed
// 5.Create two different car objects from the same class and verify that their data is different.

class Car {
    constructor(brand, speed) {
        this.brand = brand;
        this.speed = speed
    }
    drive() {
        console.log(`${this.brand} is speed ${this.speed} km/h`)
    }
}

let car1 = new Car('BMW M8', 305);
let car2 = new Car("Toyota", 80);

// console.log(car1.brand, car1.speed);
// console.log(car2.brand, car2.speed);
// car1.drive()
// car2.drive()


// question 6----------
// 6.	Answer this in your own words:
// If classes did not exist, how would you write this logic and what problems might occur when the project becomes large?

// if classes not exits so number of code line is high and problem code is repeatable 
// classes are help to code is simple and reuseble classes very helpfull for the program.

// **************** section 3 Constructor and this keyword ***

// question 7 ---------
// 7.	Create a Student class whose constructor accepts name and roll number.
// Add a method introduce that prints both values.


class Student {
    constructor(name, rollNum) {
        this.name = name;
        this.rollNum = rollNum;
    }
    introduce() {
        console.log(`Hi, I am ${this.name} and my roll number is ${this.rollNumber}.`)
    }
}

let student1 = new Student('Kartik', '12345')
let student2 = new Student('nandani', '112233')

// student1.introduce();
// student2.introduce();

// question 8 ----
// 8.	Inside the constructor, set values using this.
// Then try removing this and notice what error occurs and why.
class Obj {
    constructor (name, rollNum){
       this.name = name;
       this.rollNum = rollNum
    }
    intro() {
        console.log(`${this.name} my roll Number is ${this.rollNum}`)
    }
}
let std = new Obj('kartik', '123344')
// std.intro()
// this stores values inside the object.
// Without this, values are not saved, so you get undefined.

// question 9 -------
// 9.	Create an object with two methods:
// One method using a normal function
// One method using an arrow function
// Inside both, print this and observe the difference.

let obj = {
    name: 'kartik',
    method1: function() {
        console.log(this)
    },
    method2: () => {
        console.log(this)
    }
}
// obj.method1()
// obj.method2()
// console.log(this)

// Normal function binds its own this → points to the object
// Arrow function does NOT bind this → takes this from outside (global)

// *********** section 4 Constructor Functions and Prototypes
// question 10 -------
// 10.	Create a User constructor function (do not use class syntax).
function User(name, age) {
    this.name = name;
    this.age = age;

    this.intro = () => {
        console.log(`my name is ${this.name} and age ${this.age}`)
    }

    this.logout = () => {
        console.log('logout')
    }

    User.prototype.login = function(){
        console.log('User login')
    }

 
}

let u1 = new User('kartik', 22)
let u2 = new User('nandani', 21)

// u1.intro()
// User.prototype.login = function() {
//     console.log('User login')
// }

// console.log(u1.login === u2.login)
// console.log(u1.logout === u2.logout)
// console.log(u2)


// section 5 call, apply, bind
// 13.	Create a function that prints this.name.
// 14.	Create an object that contains a name property.
    // Use call to run the function using the object
    // Use apply to run the function using the object
    // Use bind to create a new function and then call it
// 15.	Borrow a method from one object and run it for another object using call.
function abc() {
    console.log(this.name)
}
let user = {
    name: 'kartik'
}
// abc.call(user)
// abc.apply(user, [1,2,3])
// let naam = abc.bind(user)
// naam()

let person1 = {
    name: 'nandani',
    showName: function() {
        console.log('My name is ' + this.name)
    }
}
let person2 = {
    name: "kartik"
}
person1.showName()
person1.showName.call(person2)
