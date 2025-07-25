const score = 100; 
// console.log(score)  // 100

const balance = new Number(100)
// console.log(balance)  // [Number: 100]

// console.log(score.toString())  // 100, type: string

const stringScore = score.toString();
// console.log(stringScore.length) // 3

// console.log(balance.toFixed(2)) // 100.00

const otherNumber = 54.8948
// console.log(otherNumber.toPrecision(5)) // 54.895
// console.log(otherNumber.toPrecision(3)) // 54.9

const otherNumber1 = 154.8948
// console.log(otherNumber1.toPrecision(3)) // 155

const otherNumber2 = 1154.8948
// console.log(otherNumber2.toPrecision(3)) // 1.15e+3

const hundreds = 1000000
// console.log(hundreds.toLocaleString()) // 1,000,000
// console.log(hundreds.toLocaleString('en-IN')) // 10,00,000




// ******************************************* Maths **************************************************
// console.log(Math)  // Object [Math] {} 
// console.log(Math.abs(-4))  // 4
// console.log(Math.round(4.2))  // 4
// console.log(Math.round(4.6))  // 5
// console.log(Math.ceil(4.2))   // 5
// console.log(Math.floor(4.9))  // 4
// console.log(Math.min(1, 5, 4, 6, 0))  // 0
// console.log(Math.max(5, 6, 7, 1, 9))  // 9

// Math.random() gives random values between 0 and 1
console.log(Math.random()) // 0.9352169254799145
console.log(Math.random()) // 0.9352169254799145
console.log(Math.random()) // 0.3911355011230644


console.log((Math.random()*10) + 1);  // always gives a number greater that 1 (ex- 4.8374601736472846)
console.log(Math.floor(Math.random()*10) + 1); // converts into single digit nearest lower value

// formula to get a value within 10 and 20
const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)  