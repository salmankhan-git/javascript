let score = "33abc"

console.log( typeof score);
// yah ise method karke bhi likh sakte hai
console.log((typeof score));

// yaha hum kisi score ke dataype ko convert kar rahai hai number mein
let valueInNumber = Number(score)

console.log(typeof valueInNumber);  //number
console.log(valueInNumber);  //NaN

//converting string into number examples
// "33"=>33
// "33abc"=>NaN
// "true"=>1; // "false"=0
// "null"=>0
// "undefined"=>NaN

let isLoggedIn = ""

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

//converting string into boolean examples
// 1=> true;
// 0=> false;
// ""=> false;
// "hitesh"=> true;
// "kuch bhi likha ho"=>true;
//  null=>false
//  undefined=>false

let someNumber = 89
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber)



// **************** Operations ***************************
let value = 3
let negValue = -value
console.log(negValue);

// console.log(2+2);
// console.log(2*2);
// console.log(2-2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);


let str1 = "hello"
let str2 = "salman"

let str3 = str1 + str2;
                            //      Output
console.log("1"+2)          //      12
console.log("1"+"2")        //      12
console.log(1+"2")          //      12
console.log("1"+2+2)        //      122
console.log(2+1+"2")        //      32

console.log(+true)          //      1
console.log(+"")            //      0
console.log(+undefined)     //      NaN
console.log(+null)          //      0


let gameCounter = 100
gameCounter++;
console.log(gameCounter)