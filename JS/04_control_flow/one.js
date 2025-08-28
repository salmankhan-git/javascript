// if
const isUserloggedIn = true
const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

//basically if else statment run the if block only when the condition in the if block is fullfiled or it will run the else block 

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===(this evalute both value and datatype), !==

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);
// // it will not run bcz of block scope

// const balance = 1000

// +++++++++++ short hand for if statement +++++++++++++
// if (balance > 500) console.log("test"),
// console.log("test2");
// but it just reduce the code readability and maintainability


// nested (else if tree)

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }


// how we use in real projects

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}