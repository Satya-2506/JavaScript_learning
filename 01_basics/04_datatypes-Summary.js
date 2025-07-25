// ---------------------------------------- Primitive datatypes ----------------------------------------------
// 7 types : String, Boolean, Number, null, undefined, Symbol, BigInt

// string
const name = "Manisha"
const husbandName = "Satya";

// Number
const score = 100;
const scoreValue = 100.3

// boolean, null, undefined
const isLoggedIn = false;
const temp = null;
let userEmail; 

// symbol
const id = Symbol("123")
const anotherId = Symbol("123")

// console.log(id === anotherId)  // false 
// console.log(id == anotherId)   // false 


// ------------------- Non-primitive datatypes (Reference type) -----------------------------
// Array, Objects, Functions

// Array
const heros = ["shaktiman", "naagraj", "doga"]

// Object
let myObj ={
    name: "Satya",
    wifeName: "Manisha",
    age: 23
}

// Function
const myFunction = function() {
    console.log("Hello, world!")
}

// checking "typeof"
// console.log(typeof name)         // string
// console.log(typeof score)        // number
// console.log(typeof isLoggedIn)   // boolean
// console.log(typeof temp)         // object
// console.log(typeof userEmail)    // undefined
// console.log(typeof id)           // symbol
// console.log(typeof heros)        // object
// console.log(typeof myObj)        // object
// console.log(typeof myFunction)   // function


/*
Javascript is a dynamically typed language
-- We do not need to declare the datatype when creating variables in JS
-- Variable types are determined at run time automatically
*/
