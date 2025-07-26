// // var c = 300      // Global scope variable

// if (true) {      // block scope 
//     let a = 10;
//     let b = 20;
//     var c = 30;
// }

// // console.log(a) // a is not defined
// // console.log(b)  // b is not defined
// console.log(c)  // 30  (initiall 300, but reassigned inside the block 30)


//----------------------------------------------------------------------------------------------------------------

let c = 300      // Global scope variable
let a = 10;

if (true) {      // block scope 
    // console.log("Global a accessing inside block, a:", a) // Global a accessing inside block, a: 10
    let b = 20;
    let c = 30;
    // console.log("Inner c:", c)   // Inner c: 30
}

// console.log("Outer c:", c)   // Outer c: 300
// console.log("block scope variable in global scope, b: ", b)  // b is not defined (can not access the block scope variable)



// ----------------------------------------------------------------------------------------------------------------------------------------------
// ---
function one() {
    const userName = "Satya"
     
    function two() {
        const website = "youtube"
        console.log(userName)      // Satya
    }
 
    // console.log(website)  // website is not defined  (can not access child scope elements in parent scope)
    two()
}

// one()  


// --- 
if (true) {
    const userName = "Manisha"
    if(userName === "Manisha") {
        const website = " youtube"
        // console.log(userName + website)    // Manisha youtube
    }
    // console.log(website)    // ReferenceError: website is not defined
}
// console.log(userName)    // ReferenceError: userName is not defined



// ----------------------------------- Interesting ---------------------------------------
// Hoisting in JS

console.log(addOne(5))  // 6  (can access the function before declaration)

function addOne(num) {
    return num + 1
}


console.log(addTwo(5)) // ReferenceError: Cannot access 'addTwo' before initialization

const addTwo = function(num) {
    return num + 2
}


