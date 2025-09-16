// 01 ------------------------------------
const promiseOne = new Promise(function(resolve, reject) {
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()
    }, 1000)
})

promiseOne.then(function() {
    console.log("Promise Consumed")
})

// Output:
// Async task is compelete
// Promise Consumed



// 02 ---------------------------------------
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})

// Output:
// Async task 2
// Async 2 resolved



// 03 --------------------------------------------
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Manisha", email: "manisha.satya@gmail.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
    // console.log(user.username)
    // console.log(user.email)
})

// Output:
// { username: 'Manisha', email: 'manisha.satya@gmail.com' }
// Manisha
// manisha.satya@gmail.com



// 04 -------------------------------------------------------
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "SaMan", password: "Satya@2506"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username
})
.then((myUsername) => {
    console.log(myUsername);
})
.catch(function(error){
    console.log(error);
})
.finally(() => console.log("The promise is either resolved or rejected"))

// Output: error = true
// ERROR: Something went wrong
// The promise is either resolved or rejected

// Output: error = false
// { username: 'SaMan', password: 'Satya@2506' }
// SaMan
// The promise is either resolved or rejected



// 05 ----------------------------------------------------------
const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if(!error) {
            resolve({username: "JavaScript", password: "123"})
        } else {
            reject("ERROR: JS went wrong")
        }
    }, 1000)
})

// async function consumePromiseFive() {
//     const response = await promiseFive
//     console.log(response)
// } 
/* for the error value false if block will be executed in the promise and the upper function will handle it properly
but , for the error value true the else block will be executed in the promise === in the upper function nowhere there 
rejected promise is hadled so error will be occured 
....  To resolver this error we need to use try...catch to handle the resolve and reject state properly
*/

async function consumePromiseFive() {
   try {
    const response = await promiseFive
    console.log(response)
   } catch(error) {
    console.log(error)
   }
}

consumePromiseFive();

// Output: error = true
// ERROR: JS went wrong

// Output: error = false 
// { username: 'JavaScript', password: '123' }


// ------------------------------------------- fetch -------------------------------------------
// 06 --------------------------------------------------------
// async function getAllUsers () {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response)
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log("E:", error)
//     }
// }

// getAllUsers();

// ------------------- Tring same code in then...catch format ------------------------
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data)
})
.catch((error) => console.log(error))