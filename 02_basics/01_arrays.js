// Array
const myArr = [0, 1, 2, 3, 4, 5]
const names = ["Manisha", "Satya", "Sarmistha", "Samay", "Soumya", "Ankita", "Ipsita"]

const myArr2 = new Array(2, 4, 5, 6, 7)
// console.log(myArr[3])  // 3
// console.log(names[0])  // Manisha


// --------------------------------- Array methods --------------------------------------------------------
myArr.push(6)  // adds Element at the end of the array
// console.log(myArr) // [0, 1, 2, 3, 4, 5, 6]

myArr.pop()  // removes the last element of the array
// console.log(myArr) // [0, 1, 2, 3, 4, 5]

myArr.unshift(9) // adds element at the starting of the array
// console.log(myArr) // [9, 0, 1, 2, 3, 4, 5]
 
myArr.shift() // removes the first element of the array
// console.log(myArr) // [0, 1, 2, 3, 4, 5]

// console.log(myArr.includes(9))  // false  (cheaks wheater the array includes the element or not)

// console.log(myArr.indexOf(9))   // -1   (It shows the element is not present in the array)
// console.log(myArr.indexOf(4))   // 4

const newArr = myArr.join("-")  // Adds all the elements of an array into a string, separated by the specified separator string.
// console.log(newArr)  // 0-1-2-3-4-5
// console.log(typeof newArr)  // string


// -------------------- slice, splice --------------------------- 

console.log("A ", myArr)        // A  [ 0, 1, 2, 3, 4, 5 ]

// --------- slice --------------
const myn1 = myArr.slice(1, 3)  // eturns a copy of a section of an array, The end index is exclusive (does not manipulate the original array)
console.log(myn1)               // [ 1, 2 ]
console.log("B ", myArr)        // B  [ 0, 1, 2, 3, 4, 5 ]


// ----------- splice -----------
// const myn2 = myArr.splice(1, 3) // Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
// console.log(myn2)               // [ 1, 2, 3 ]
// console.log("C ", myArr)        // C  [ 0, 4, 5 ]

const myn2 = myArr.splice(1, 3, 20, 30)
console.log(myn2)                  // [ 1, 2, 3 ]
console.log("C ", myArr)           // C  [ 0, 20, 30, 4, 5 ]