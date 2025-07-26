// Rest Operator(...)
// ---
// function claculateCartValue(...props) {  // Rest Operator
//     return props
// }

// console.log(claculateCartValue(300, 400, 200))   //  [ 300, 400, 200 ]

// ---
function claculateCartValue(val1, val2, ...props) {  // Rest Operator
    return props
}

// console.log(claculateCartValue(300, 400, 200, 600, 1000, 2000))   //  [ 200, 600, 1000, 2000 ]



//---------------------------------------------------------------------------------------------------------------------------------------------------
// Passing Object to a function 
const user = {
    userName: "Manisha", 
    city: "Bhadrak"
}

function handleObject(anyObject) {
    console.log(`User name is ${anyObject.userName} and city is ${anyObject.city}`)  
}

// handleObject(user);  // User name is Manisha and city is Bhadrak

// handleObject({
//     userName: "Satya", 
//     city: "Prachi Nagar"
// });                 // User name is Satya and city is Prachi Nagar



// ------------------------------------------------------------------------------------------------------------------------------------------------------
// Passing array to a function

const myNewArray = [100, 200, 300, 400]

function returnSecondValue(getArray) {
    return getArray[1]
}
 
console.log(returnSecondValue(myNewArray))   // 200
console.log(returnSecondValue([200, 400, 600, 8000, 199]))  // 400