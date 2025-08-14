//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// ++++++++++++++++++++++++++++


// stack(primitive)   heap(non-primitve)
/*
stack ke andar joh bhi store hota hai uski sidha value store hoti hai 
or agar ham us variable ko kisi or variable se assign karte hain toh bas usse variable ki copy kardeta hai 
or agar haam uske baad naye variable mein changes kare toh purne wale koh kuch nahi hoga
naya wale badalta hai

wahi heap mein variable toh stack mein hota hai par data sara heap mein hota hai
jis ko woh refer kar raha hota hai agar ham is variable ko kis or variable se assign karte hain
toh naya variable bhi ushi data ko refer karta hai na ki koi naya copy nbanti hai jis ki 
wajah se agar ham naye variable mein changes kare toh  original bhi change hojaye ga
*/

let myYoutubeName="sk"

let myAnotherChannel = myYoutubeName 

myAnotherChannel="salman"
console.log(myYoutubeName);
console.log(myAnotherChannel);

let userOne={
    email:"salman@google.com",
    upi:"ambani@ypl"
}
let userTwo= userOne
userTwo.email="ambani@mail.com"

console.log(userOne);
console.log(userTwo);
