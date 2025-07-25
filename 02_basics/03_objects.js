// singleton
// object.creat

// object literals 
const mySym = Symbol("key1")  // symobl declaration inside the object depends on this

const JsUser = {
    name: "Satya",
    "full name": "Satya Ranjan Mohanty",
    age: 23,
    location: "Bhadrak",
    email: "satya@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    [mySym]: "mykey1"      // Sysbol declaration in side the object
}

// console.log(JsUser.email)      // satya@google.com
// console.log(JsUser["email"])   // satya@google.com

// console.log(JsUser["full name"])  // Satya Ranjan Mohanty
// // console.log(JsUser.full name) // error  // Thus accessing the elements of object using (.) is not recomended

// console.log(JsUser[mySym])  // mykey1
// console.log(mySym)          // Symbol(key1)

// JsUser.email = "satya@microsoft.com"
// console.log(JsUser["email"])
// JsUser["email"] = "satya@netflix.com"
// console.log(JsUser["email"])

// Object.freeze(JsUser)
// JsUser["email"] = "satya@amazon.com"
// console.log(JsUser)
// Output: 
// {
//   name: 'Satya',
//   'full name': 'Satya Ranjan Mohanty',
//   age: 23,
//   location: 'Bhadrak',
//   email: 'satya@google.com',                 // unchanged
//   isLoggedIn: false,
//   lastLoginDays: [ 'Monday', 'Saturday' ],
//   [Symbol(key1)]: 'mykey1'                   // Symbol
// }


JsUser.greeting = function() {
    console.log("Hello, JS user")
}


JsUser.greeting()   // Hello, JS user
console.log(JsUser.greeting())  // Hello, JS user
// undefined
console.log(JsUser.greeting)    // [Function (anonymous)]


JsUser.greetingTwo = function() {
    console.log(`Hello, JS user, ${this.name}`)
}
JsUser.greetingTwo()   // Hello, JS user, Satya
