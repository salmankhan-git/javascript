let score = "33abc"

console.log( typeof score);
// yah ise method karke bhi likh sakte hai
console.log((typeof score));

// yaha hum kisi score ke dataype ko convert kar rahai hai number mein
let valueInNumber = Number(score)

console.log(typeof valueInNumber);
console.log(valueInNumber);


// "33"=>33
// "33abc"=>NaN
// "true"=>1; // "false"=0
// "null"=>0
// "undefined"=>NaN

let isLoggedIn = ""

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1=> true;
// 0=> false;
// ""=> false;
// "hitesh"=> true;


let someNumber = 89
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber)


