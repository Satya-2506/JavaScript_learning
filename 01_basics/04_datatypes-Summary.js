// ---------------------------------------- Primitive datatypes ----------------------------------------------
// 7 types : String, Boolean, Number, null, undefined, Symbol, BigInt

// string
const name = "Manisha"

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



// ------------------------------------------------------------------------------------------------------------------------------------------------

// ****************** Stack and Heap memory in JavaScript ***************************

// ------------- Stack (Primitive) --------------------
  
let herName = "Manisha"
let otherName = herName

console.log(herName)     // Manisha
console.log(otherName)  // Manisha

otherName = "Manisha Mohapatra"

console.log(herName)      // Manisha
console.log(otherName)   // Manisha Mohapatra


/* 
when we are creating a primitive type variable it is created in the stack memory.
when we try to assign a variable's value to another variable a copy of the variable gets assigned on the original value
thus when we tried to change the value of the copied variable only the copied value changed not the original value
*/


// --------------- Heap (Non-Primitive) --------------------

let user = {
    email: "user@gmail.com",
    upi: "user@ibl"
}

let anotherUser = user

console.log(user.email)            // user@gmail.com
console.log(anotherUser.email)     // user@gmail.com

anotherUser.email = "satya@gmail.com"

console.log(user.email)            // satya@gmail.com
console.log(anotherUser.email)     // satya@gmail.com


/*
When we create a non-primitive type variable the variable gets in the stack, but the object reference is created in the heap memory
When we try to copy the value to the another variable is gets the reference of the same object (Original object not a copy) from heap

thus when we tried to change the value of the copied variable, original variable also changed
*/