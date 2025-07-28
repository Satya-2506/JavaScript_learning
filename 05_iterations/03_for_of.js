// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

//------------------------------------------------------------
// String
const greetings = "Hello Manisha"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}
// Output: 
// Each char is H
// Each char is e
// Each char is l
// Each char is l
// Each char is o
// Each char is  
// Each char is M
// Each char is a
// Each char is n
// Each char is i
// Each char is s
// Each char is h
// Each char is a

//-------------------------------------------------------------
// Maps
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// --- 
// console.log(map);

// Output: 
// Map(3) {
//   'IN' => 'India',
//   'USA' => 'United States of America',
//   'Fr' => 'France'
// }

// ---
for (const key of map) {
    // console.log(key);
}
// Output: 
// [ 'IN', 'India' ]
// [ 'USA', 'United States of America' ]
// [ 'Fr', 'France' ]


// ---
for (const [key, value] of map) {
    // console.log(key, ':-', value);
}
// Output:
// IN :- India
// USA :- United States of America
// Fr :- France

//------------------------------------------------------------
// Object
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {    // Error (for iterating through object (for in) loop is recomended) 
//     console.log(key, ':-', value); 
// }

// Output: 
// TypeError: myObject is not iterable