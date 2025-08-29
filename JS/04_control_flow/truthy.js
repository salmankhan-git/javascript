// In JavaScript, a "truthy" value is any value that is considered true when evaluated in a Boolean context, 
// such as within an if statement, a while loop condition, or a logical operation (like && or ||). 
// Essentially, if a value is not explicitly defined as "falsy," it is considered "truthy.

const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN,document.all (a legacy feature in browsers)

//truthy values
// "0", 'false', " ", [], {}, function(){},symbols,date object,any non-zero number,BigInt values other than 0n

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}
// Object.keys(emptyObj) basically it is converting object keys in array

// Nullish Coalescing Operator (??): null undefined
// The nullish coalescing operator (??) in JavaScript is a logical operator that provides a way
//  to handle default values specifically when the left-hand operand is null or undefined

let val1;
// val1 = 5 ?? 10          // 5 will get assigned
// val1 = null ?? 10       // 10 wiil get assigned
// val1 = undefined ?? 10  // 10 wiil get assigned
// val1 = "" ?? 10         // "" wiil get assigned bcz not null or undefined
// val1 = null ?? 10 ?? 20 // 10 will get assigned
// console.log(val1);

// Terniary Operator
// The ternary operator is often used as a shorthand for simple if...else statements, 
// particularly when assigning values to variables based on a condition, or for rendering dynamic content.

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
                        // or
// by a variable too
let message = iceTeaPrice <= 80 ? "less than 80" : "more than 80"
console.log(message);
