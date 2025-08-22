// singleton - whean a object is created using constructor it is then called singleton object which basically is unique
// Object.create    //ese singleton wala object create hota hai

// object literals // ise joh object crate hota hai woh singleton nahi hota

const mySym = Symbol("key1")

// object mein ham data key,value pair mein store karte hai jese name jo key hai waise yeh system mein 
//esa string store hoti hai like "name" but hame esa likhne ki zaroort nahi par likh bhi sakhte hai
//or agar likhe jese "full name" toh ham ise . laga ke kabhi bhi call nahi kar sakte phir hame sirf["full name"] is hi tarike se excess kar sakte hain

//agar hame symbol ko esa key excess karna hoto ham [] yeh use karte hain agar yeh nahi lageyngey toh yeh string output dega
const JsUser = {
    name: "Salamn",
    "full name": "Salman Khan",
    [mySym]: "mykey1",
    age: 18,
    location: "Delhi",
    email: "salman@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "salman@chatgpt.com"
//Object.freeze(JsUser)  //freeze -Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
JsUser.email = "salman@microsoft.com"
 console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); //this - se kis bhi objects ke key ko excess kar sakte hain
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());