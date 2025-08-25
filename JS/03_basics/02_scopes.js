// +++++++++++++++++++ SCOPE +++++++++++++++++++++++
// In javascript there are 3 type of scopes (global, block and local (function) scope)

// global scope
// Variables declared Globally (outside any block or function) have Global Scope.
//Global variables can be accessed from anywhere in a JavaScript program.
//Variables declared with var, let and const are quite similar when declared outside a block.

//block scope
//Before ES6, JavaScript variables could only have Global Scope or Function Scope.
//ES6 introduced two important new JavaScript keywords: let and const.
// These two keywords provide Block Scope in JavaScript.
// Variables declared with let and const inside a code block are "block-scoped," meaning they are only accessible within that block.

var c = 300   // global scope
let a = 300     // global scope
if (true) {
    let a = 10      // block scope
    const b = 20    // block scope
   // var c = 30      // var is not a block scope so yeh is block ke bhar bhi excessible hai or agar hamm "c" ko print karenge toh 30 hoga kyoki js line by line interpret karti hai or var block scope nahi hai toh yeh excessible hoga phir o/p 30 ayega
    console.log("INNER: " ,a);
    //in this upper line we are printing the variable "a" which is in the block
    
}

console.log(a);
// console.log(b);
// console.log(c);


//Local Scope
//Variables declared within a JavaScript function, are LOCAL to the function:
//Local variables have Function Scope:
// They can only be accessed from within the function.
// Variables with the same name can be used in different functions.

// code outside can NOT use carName
function myFunction() {
  let carName = "Volvo";
  // code here CAN use carName
}
// we can only usethe name  "carName" in different function 
 


// nested function mein sirf child function parent function ke variable ko excess kar sakta hai
// bcz child function ke liye parent function ka variable as global variable hojat hai 

function one(){
    const username = "salman"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); /
    //yeh upper ki line error de gi kyo ki parent function child ka variable nahi call kar sakta hai
    // jese upper padha function scope 

     two()
}
// one()



//nested loop

//nested loop mein sirf child function parent loop ke variable ko excess kar sakta hai
// bcz child loop ke liye parent loop ka variable as global variable hojat hai 

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
        //yeh print hojaye ga 
    }
    // console.log(website);
    //yeh nahi hoga print bcz function scope
}

// console.log(username);
// nahi hoga print bcz funtion scope


// ++++++++++++++++++ interesting ++++++++++++++++++
//hoisting
// we will learn later
console.log(addone(5))
function addone(num){
    return num + 1
}
// yeh function toh print hojaye ga 


console.log(addTwo(5));
const addTwo = function(num){
    return num + 2
}
// yeh function print nahi hoga 
    