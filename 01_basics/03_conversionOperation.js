// ---1
// let score = 33; // value = 33, type = number

// ---2
// let score = "33"; //(string) // value = "33", type = string
// let scoreInNumber = Number(score); // converting string value to number  // value = 33, type = number

// ---3
// let score = "33abc"; //(string) // value = "33abc", type = string
// let scoreInNumber = Number(score); // converting string value to number  // value = NaN (NaN - Not a Number) , type = number 



// ---Output
// console.log(typeof score); 
// console.log(typeof(score)); 

// console.log(scoreInNumber); 
// console.log(typeof scoreInNumber); 

// console.log(typeof NaN)   // number


// ---Summary 
// "33" => 33
// "33abc" => NaN
// true => 1, false => 0


// ---4 
// let value = null // value = null, type = object
// let convertedValue = Number(value)  // value = 0, type = number
// let stringValue = String(value) // value = null, type = string
// let booleanValue = Boolean(value) // value = false, type = boolean


// --5
// let isLoggedIn = 1 
// let booleanIsLoggedIn = Boolean(isLoggedIn)  // value = true, type = boolean

// let isLoggedIn = ""
// let booleanIsLoggedIn = Boolean(isLoggedIn)  // value = false, type = boolean

// let isLoggedIn = "satya"
// let booleanIsLoggedIn = Boolean(isLoggedIn)  // value = true, type = boolean

// let isLoggedIn = null
// let booleanIsLoggedIn = Boolean(isLoggedIn)  // value = false, type = boolean

let isLoggedIn = undefined
let booleanIsLoggedIn = Boolean(isLoggedIn)  // value = false, type = boolean


// ---Output
console.log(booleanIsLoggedIn);
console.log(typeof booleanIsLoggedIn);


// ---summary
// 1 => true , 0 => false
// "" => false
// "sm" => true
// null => false
// undefined => false

