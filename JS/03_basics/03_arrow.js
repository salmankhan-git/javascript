/*                     THIS KEYWORD
In JavaScript, the this keyword refers to an object.
The this keyword refers to different objects depending on how it is used:

Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an object method, this refers to the object.
In an event, this refers to the element that received the event.
Methods like call(), apply(), and bind() can refer this to any object.

Global Context:
Outside of any function, in a browser environment, this refers to the window object.
In Node.js, this refers to the global object.
In strict mode, this in the global context is undefined*/

const user = {
    username: "salman",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this); // yeh pura user oject  print karega
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); // in node this keyword is empty {}

/*
function chai(){
    let username = "salu"
    console.log(this.username);
//  'this' keyword refers to object in this function it will be undefined 
}
chai()
*/

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
//          'this' keyword refers to object in this function it will be undefined too 
//           by declaring the function with a varible doesnot change any thing

//     console.log(this);
//   in both function if we only print this it will have some global value, microservices and other properties
// }


//+++++++++++++ Arrow Function ++++++++++

const chai =  () => {
    let username = "hitesh"
    console.log(this.username);
    // o/p undefined
    console.log(this);
    // o/p {}
}
chai()


//  BASIC ARROW FUNCTION
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//  IMPLICIT RETURN - when their is a single expresion we dont need to use curly braces and return keyword. if by mistake Curly braces is used then we have to use return keyword

// const addTwo = (num1, num2) =>  num1 + num2
//            OR
// const addTwo = (num1, num2) => ( num1 + num2 )

// IMPLICIT RETURN special case : returning an object literal in thi we has to use the paranthesis ()normally its our choice

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))

// used in loop which  we will cover soon 

// const myArray = [2, 5, 3, 7, 8]
// myArray.forEach(() => ())