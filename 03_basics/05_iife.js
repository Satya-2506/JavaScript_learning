// Immidiately Invoked Function Expressions (IIFE)
/* An IIFE is a function that is:
Defined and executed immediately
Often used to create a private scope and avoid polluting the global namespace
*/

// function chai() {
//     console.log("DB connected")
// }
// chai() // DB connected

//----------  using IIFE to run the same code  ----------

// (function chai() {
//     console.log("DB connected")
// })(),  // Output: DB connected

// // this will give you error if You do not end the previous iife with a ";"
// (function chai() {
//     console.log("DB connected")
// })()   // Output: DB connected



// ------------------------------------------------------------
(function chai() {
    // named IIFE
    console.log("DB connected")
})();

((name) => {
    // un-named IIFE
    console.log("DB connected to", name)
})("Satya")

// Output: 
// DB connected
// DB connected to Satya