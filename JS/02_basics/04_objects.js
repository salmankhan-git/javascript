// const tinderUser = new Object() //is tarike se constuctor ka use karke singleton object banate hai
const tinderUser = {}  //yeh apna normal tarika using literals

tinderUser.id = "123abc"
tinderUser.name = "Salman"
tinderUser.isLoggedIn = false
//direct {} isme nah likh kar ham ese bhi data dal sakte hain object mein


// console.log(tinderUser);


//nested object
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);
// is tarike se ham nested object excess lkar sakte hai


// combining objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//const obj3 = { obj1, obj2 }      // o/p { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

const obj3 = Object.assign({}, obj1, obj2, obj4)
//assign - Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.
// .assign(target,source) yeh iska syntax rehta hai isliye jab 2 se zada objects hote hain toh ham ek empty object '{}' ko target banake baki sare source ko usmein assign karte hain
// agar ham ek empty object nahi denge toh woh starting wale ko target banake sare source usi mein add kardega or starting wala change hojaye ga

// const obj3 = {...obj1, ...obj2}
// console.log(obj3);

//Array-object //usually database mein esa data rehta hai
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

// console.log(users[1].email);
 // ese excess karte hain array-object ko


// console.log(tinderUser);

//is tarike se ham kisi bhi objects ki sari keys, yah value excess karsakte hain or yeh sabh ek array mein ate hain
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser)); o/p [ '123abc', 'Salman', false ]
// console.log(Object.entries(tinderUser)); o/p [ [ 'id', '123abc' ], [ 'name', 'Salman' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('name'));
// ise ham check kar sakte hain ki object mein given property hain yah nahi 

//+++++++++++++++ De-structure+++++++++++++++

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor // normally ham ese excess karte hain ya course["courseinstructor"]
// agar hame baar bar ipe work karna ho toh uskeliye yeh niche wala use karte hain
const {courseInstructor: instructor} = course

// console.log(courseInstructor); istarah directg call kar sakte hain 
console.log(instructor); // yah agar woh key ka name bhi bada lage toh usey : iske through kuch or name kar ke bhi call kar sakte hain  


// +++++++++++++++++  JSON ++++++++++++
// json- mein both key, value string format mein hoti hai

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }
 
// json ese array-object ke format mein bhi hota hai
[
    {},
    {},
    {}
]