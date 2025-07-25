let name = "Satya"
let repoCount = 50

// Concatication 
// console.log(name + " " + repoCount + " Value"); // not recomended (outdated)
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)



// Exploring string functions 
const gameName = "Need-For-Speed"

console.log(gameName[4])      // F
console.log(gameName.__proto__)  // {} (You can chaeck the browser console - string-Prototypes)

console.log(gameName.length)  // 12 
console.log(gameName.toUpperCase())  // NEEDFORSPEED (does not change the original value)

console.log(gameName.charAt(2))     // e
console.log(gameName.indexOf("s"))  // -1 (this shows the character not present in the string)
console.log(gameName.indexOf("S"))  // 7

const newString = gameName.substring(0, 4)  // substring(start index, length)
console.log(newString)   // Need 

const anotherString = gameName.slice(3, 8)  // slice(start index, end index + 1)
console.log(anotherString)  // d-For
 
const newStringOne = "   Satya   "
console.log(newStringOne)           //    Satya   
console.log(newStringOne.trim());   // Satya  (trim() used to remove white spaces)

const url = "https://satya.com/satya%20mohanty"
console.log(url.replace("%20", "-"))   //https://satya.com/satya-mohanty

console.log(url.includes("com"))     // true
console.log(url.includes("Manisha")) // false

const names = "Satya Manisha Sarmistha Samay Soumya Ankita Ipsita"
console.log(names.split(" "))   // ['Satya', 'Manisha', 'Sarmistha', 'Samay', 'Soumya', 'Ankita', 'Ipsita]

