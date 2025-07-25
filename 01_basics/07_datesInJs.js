let myDate = new Date()
// console.log(myDate) // 2025-07-25T10:57:09.103Z
// console.log(myDate.toString())  // Fri Jul 25 2025 10:57:57 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()) // Fri Jul 25 2025
// console.log(myDate.toLocaleString()) // 7/25/2025, 11:07:41 AM
// console.log(typeof myDate) // object


// let myCreatedDate = new Date(2003, 3, 22)
let myCreatedDate2 = new Date(2003, 3, 22, 4, 9)
// console.log(myCreatedDate.toLocaleString()) // 4/22/2003, 12:00:00 AM
// console.log(myCreatedDate2.toLocaleString()) // 4/22/2003, 4:09:00 AM

// let myCreatedDate3 = new Date("2003-04-22")
// let myCreatedDate3 = new Date("2003-jan-22")
// let myCreatedDate3 = new Date("10-Jan-2003")
let myCreatedDate3 = new Date("Jan-10-2003")
// console.log(myCreatedDate3.toLocaleDateString()) // 4/22/2003



let myTimeStamp = Date.now()

// console.log(myTimeStamp)  // 1753442415420 (Mili-second value)
// console.log(myCreatedDate2.getTime()) // 1050984540000

// console.log(Math.floor(Date.now() / 1000))  // converting milisecond to second


let newDate = new Date()
// console.log(newDate.getDate()) // 25
// console.log(newDate.getDay())  // 5 
// console.log(newDate.getMonth() + 1) // 7


console.log(newDate.toLocaleString('default', {weekday: 'long'})) //Friday