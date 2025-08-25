// FUNCTION basically  creates a reusable block of code designed to perform a specific task

function sayMyName(){
    console.log("S");
    console.log("A");
    console.log("L");
    console.log("M");
    console.log("A");
    console.log("N");
}

// sayMyName() // this the way to execute
// if we only use sayMyName it is the reference and if we also use () then it is the execution

//example
// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }
//addTwoNumbers(3, 5) 
// (number1, number2) yeh joh values hamne di hain ise ham parameters khete hain
// (3, 5) aur in values ko arrgument
// par agar hum ise kisi or variable mein assign karke print kjare toh undefined dega uskeliye haam return use karte hain


// In JavaScript, the return statement is used within a function to perform two primary actions:
// Terminate Function Execution:
// When a return statement is encountered within a function, the execution of that function immediately stops. Any code lines after the return statement within the same function will not be executed.
// Return a Value:
// The return statement specifies a value that the function should pass back to the part of the code that called it. This value can be of any data type, including numbers, strings, booleans, objects, arrays, or even other functions. If no value is explicitly specified after return (i.e., return;), or if a function does not contain a return statement, the function implicitly returns undefined


//eg
/* function greet(name) {
  if (!name) {
    return; // Terminates the function if no name is provided
  }
  console.log("Hello, " + name + "!");
}

greet("Alice"); // Output: Hello, Alice!
greet(); // No output, as the function returns early
*/


function addTwoNumbers(number1, number2){


    // let result = number1 + number2
    // return result
    // is tarike se bhi kar sakte hai or yeh result variable ka scope alag hai yeh dono same nahi hai
    
    //yeh bhi use kar sakte hain
    return number1 + number2
    // or agar ham return ke niche kuch bhi likhe woh ignore hojata hai kyoki ek function bas return tak hi read karta hai isliye agar or kuch bhi likh na ho toh return ke upper likho
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


//isme haam username mein salman value de rahe hai jis ki wajah se jab undefined mein bhi salman print hoga
//par agar ham "" yeh rakhenge toh hamra if block run hoga
//or agar ham (username) sirf ese likh te toh ("") , () dono mein if block run hot kyo ki yeh dono boolmein esa false treat hote hain
function loginUserMessage(username = "salman"){
    if(!username){
        console.log("PLease enter a username");
        return;
        //agar if block run hua toh is return ke baad ka code terminate hojayega or k\agey ka kuch execute nahi hoga
    }
    return `${username} just logged in`
}

console.log(loginUserMessage(''))
console.log(loginUserMessage()) // yeh isliye run horaha hain bcz username mein salman value de rakhi hai
console.log(loginUserMessage("salman"))



// is tarike ka function hum ecommerce ke cart ka subtotal karne ke liye use karte hai
// in mein hamein pata nahi hota ki kitne parameter ane wale hai
// is problem ke liye ham rest operator use karte hain ... (yahi sign spread operator ka bhi hota hai par depend karta hai uskey usage pe)
// function calculateCartPrice(...num1) ab num ke anndar sari valu store hongi o/p mein array miljayega

function calculateCartPrice(val1, val2, ...num1){ 
    // iske accordind phela argument v1 parameter mein or second v2 mein baki sare arguments num1 parameter mein store honge
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))


//function mein object kaise pass kare 
const user = {
    username: "salman",
    prices: 199
}

function handleObject(anyobject){
    // yeh anyobject ek paramete diya hai jisme ham koi bhi object pass kar sakte hai
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

//yah ham object sidha execution ke time sidha esa parameter bhi pass karsakte hain alag se object ko assign karne ki zaroort nahi
handleObject({
    username: "salman",
    price: 399
})

//function mein array kaise pass karte hain

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    // yeh getArray ek parameter diya hai jisme ham koi bhi array pass kar sakte hai
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));

// yaha ham sidha execution ke time array dal sakte hain or declare karne ki koi zaroort nahi
console.log(returnSecondValue([200, 400, 500, 1000]));