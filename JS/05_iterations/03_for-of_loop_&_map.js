// for of loop
// these loop dont need any condition or increment .
// The for...of loop in JavaScript provides a concise way to iterate over the values of iterable objects.

//these(forof, forin) loop are applied on arrays mainly with strings or objects inside it
// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps
// The Map object (data structure): This is a built-in JavaScript object that stores key-value pairs. 
// Unlike plain JavaScript objects, Map objects can use any data type (including objects or functions) 
// as keys, not just strings or symbols. They also maintain the insertion order of elements and 
// offer better performance for frequent additions or deletions of data, especially with large datasets.

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);                                          o/p 
//                                                         Map(3) {
//                                                         'IN' => 'India',
//                                                         'USA' => 'United States of America',
//                                                         'Fr' => 'France'
//                                                         }

// destructuring of map [ key, value]
for (const [key, value]of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {
    // console.log(key, ':-', value);
}
// we cannot use object as an iterator in for-of loop