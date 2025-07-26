// --------------------------------------------------- this ---------------------------------------------------
/* Global Context: Outside of any function or object, this refers to the global object. In a web browser, this is typically the window object.
   In Node.js, it's globalThis.
*/


const user = {
    userName: "Manisha", 
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.userName}, welcome to website`)
        console.log(this)
    }
}

// user.welcomeMessage();
// Output:
// Manisha, welcome to website
// {
//   userName: 'Manisha',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }

user.userName = "Satya"
// user.welcomeMessage();
// Output: 
// Satya, welcome to website
// {
//   userName: 'Satya',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }

// console.log(this)  // {}  (in node this in global holds an empty object) (when we try to run the same code in browser this holds window object)



// ---------------------- this is not accessible in functions

// function chai() {
//     // console.log(this) // runs and holds something
//     const userName = "Manisha"
//     console.log(userName) // Manisha
//     console.log(this.username)  // undefined
// }

// chai();

// ---

// const chai = function() {
//     // console.log(this) // runs and holds something
//     const userName = "Manisha"
//     console.log(userName) // Manisha
//     console.log(this.username)  // undefined
// }

// chai()


// -------------------------------------------------------- Arrow Functions --------------------------------------------------------------------
// this
// const chai = () => {
//     console.log(this)             // {} (different from regular functions)
//     let userName = "Manisha"
//     console.log(this.userName)    // undefined
// }

// chai();


// -------------------------------------------------------   
// const addTwo = (num1, num2) => {           // Explicit return 
//     return num1 + num2  
// }

// or

const addTwo = (num1, num2) => (num1 + num2)    // Implicite return (works exactly same)  -- return statement should be wrapped inside()

console.log(addTwo(4,2)) // 6

