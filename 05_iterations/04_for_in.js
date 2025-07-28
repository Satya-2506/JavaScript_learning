// for in

// Objects
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

//---  
for (const key in myObject) {
    // console.log(key);
}
// Output: 
// js
// cpp
// rb
// swift

// --- 
for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}
// Output: 
// js shortcut is for javascript
// cpp shortcut is for C++
// rb shortcut is for ruby
// swift shortcut is for swift by apple


// ------------------------------------------------------------------------------------------
//Array
const programming = ["js", "rb", "py", "java", "cpp"]

// ---
for (const key in programming) {
    // console.log(key);
}
// Output: 
// 0
// 1
// 2
// 3
// 4

// ---
for (const key in programming) {
    // console.log(programming[key]);
}
// Output: 
// js
// rb
// py
// java
// cpp


// ------------------------------------------------------------------------------------------
//Map

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// for (const key in map) {   // No output 
//     console.log(key);
// }