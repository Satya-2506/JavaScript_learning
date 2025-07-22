const accountId = 12345
let accountName = "Satya"
var accountPassword = "2204"
accountCity = "Bhubaneswar"
let accountState;   // Will be initialized as "undefined"

// accountId = 84729  // not allowed(const vairable can't be reassigned)

accountName = "Manisha"
accountPassword = "2506"
accountCity = "Bhadrak"

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId, accountName, accountPassword, accountCity, accountState])