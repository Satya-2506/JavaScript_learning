// --- 01
function printMyName() {
    console.log("Satya")
}

// printMyName() // Satya
// console.log(printMyName)  // [Function: printMyName]

// --- 02
function addTwoNumbers(num1, num2) {    // here num1 and num2 are parameters
    // console.log(num1 + num2)
}

// addTwoNumbers(3, 4) // 7     // Here 3, 4 are arguments
// const result = addTwoNumbers(5, 3)  // 8
// console.log(result)  // undefined

// --- 03
function addThreeNumbers(num1, num2, num3) {
    // let result = num1 + num2 + num3
    // return result

    return num1 + num2 + num3
}

const result = addThreeNumbers(5, 6, 3) 
// console.log("Result:", result) // Result: 14


// --- 04
// function loginUserMessage(userName) {
//     return `${userName} just logged in`
// }

// console.log(loginUserMessage("Manisha"))   // Manisha just logged in
// console.log(loginUserMessage())   // undefined just logged in

// ---
// function loginUserMessage(userName) {
//     if(!userName) {
//         console.log("Please enter a valid username")
//         return 
//     }
//     return `${userName} just logged in`
// }

// console.log(loginUserMessage())   // Please enter a valid username

// ---
function loginUserMessage(userName = "Satya") {   // giving a default value to user name
    if(!userName) {                               // this if block will never be executed here because userName has a default value
        console.log("Please enter a valid username")     
        return 
    }
    return `${userName} just logged in`
}

console.log(loginUserMessage())   // Satya just logged in
console.log(loginUserMessage("Manisha"))   // Manisha just logged in