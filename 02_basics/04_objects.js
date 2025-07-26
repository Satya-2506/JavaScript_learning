// singleton
// const tinderUser = new Object()  
// console.log(tinderUser)   // {}

// non singleton
const tinderUser = {}
// console.log(tinderUser)  // {}

tinderUser.id = 101
tinderUser.name = "Satya"
tinderUser["isLoggedIn"] = false;

// console.log(tinderUser)  // { id: 101, name: 'Manisha', isLoggedIn: false }

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Manisha",
            lastName: "Mohapatra"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName)  // Manisha


// ------------------------------------------------------ combining two objects -------------------------------------------------------------------------
const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'c', 4: 'd'}

// -------
// const obj3 = {obj1, obj2}
// console.log(obj3);    // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// ------ Object.assign() ----
// console.log(obj1) // { '1': 'a', '2': 'b' }

const obj3 = Object.assign({}, obj1, obj2)   // Object.assign(target, sources)  // Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object

// Object.assign(obj1, obj2) // this will treat obj1 as the target object and modifies the original object , thus recomend to take an empty object {} as target
// console.log(obj1) // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// console.log(obj3);    // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// ------- (...)using spread operator
const obj4 = {...obj1, ...obj2}
// console.log(obj4)     // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }



// -----------------------------------------------------------------------------------------------------------------------------------------------
const users = [
    {
        id: 1293,
        name: "SaMan"
    },
    {
        id: 1293,
        name: "Manisha"
    },
    {
        id: 1293,
        name: "satya"
    },
    {
        id: 1293,
        name: "SaNisha"
    }
]

// console.log(users[2].name)  // satya



// ------------------------------------------------------------------------------------------------------------------------------------------------

// console.log(tinderUser)  // { id: 101, name: 'Satya', isLoggedIn: false }

// console.log(Object.keys(tinderUser))   // [ 'id', 'name', 'isLoggedIn' ]   // type: object
// // console.log(Object.keys(tinderUser)[1])  // name
// console.log(Object.values(tinderUser))   // [ 101, 'Satya', false ]   // type: object
// console.log(Object.entries(tinderUser))   // [ [ 'id', 101 ], [ 'name', 'Satya' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty("isLoggedIn"))   // true
console.log(tinderUser.hasOwnProperty("isLogged"))   // false