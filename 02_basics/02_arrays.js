const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// ------------------ Diff. btw. pust, concat,  --------------------
// push
// marvel_heros.push(dc_heros);    // it will push the entire dc_heros array as an single element to the marvel_heros array
// console.log(marvel_heros)       // [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3][2]) // batman


// concat 
const all_heros = marvel_heros.concat(dc_heros)  // Combines two or more arrays. This method returns a new array without modifying any existing arrays.
// console.log(all_heros)  // [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]


// Spread operator(...)
const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros)   //  // [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]


// ----------------------------------------------------------------------------------------------------------------------------

// flat 
const another_array = [0, 1 , 2, 3, [4, 5], 6, [7, [8, 9]]]
const real_another_array = another_array.flat(1)    // flat(depth) - 1,2,3,.. (infinity)
// console.log(real_another_array)  // [ 0, 1, 2, 3, 4, 5, 6, 7, [ 8, 9 ] ]
  


// console.log(Array.isArray("Satya"))  // false
// console.log(Array.from("Manisha"))   //  ['M', 'a', 'n', 'i', 's', 'h', 'a']
// console.log(Array.from({name: "Satya"}))   //  Interesting 


let score1 = 100
let score2 = 200
let score3 = 300 
console.log(Array.of(score1, score2, score3))  // [ 100, 200, 300 ]