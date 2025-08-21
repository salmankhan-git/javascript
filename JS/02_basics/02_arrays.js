const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//push jis array pe lagta hai usi mein modifications kar rah hota hai
// marvel_heros.push(dc_heros)   //directly push karenge toh woh array ke andar array banadega
// console.log(marvel_heros)
// console.log(marvel_heros[3][1]); ise haam array ke andar wale array ke elment ko excess karte hai

//concat- Combines two or more arrays. This method returns a new array without modifying any existing arrays. 
// isliye conact ko show karne ke liye koi naya variable bana pad ta hai
// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// spread - yeh multiple array ko ek sath kardeta hai like concat usin ...
// const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// flat - Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// yeh new array deta hai isliye woh new variable mein assign karne se show hota hai
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Hitesh")) // isArray-  bas check karega method ke andar jo run ho raha hai woh array hai t/f
console.log(Array.from("Hitesh")) // from- Creates an array from an iterable object.
console.log(Array.from({name: "hitesh"})) // interesting yaha hamne define nahi kiya ki ham kis ka array banaye sare keys(name) yah valus("hitesh")

let score1 = 100
let score2 = 200
let score3 = 300

//of - Returns a new array from a set of elements.

// Array.from():
// Creates a new, shallow-copied Array instance from an array-like or iterable object.
// Array.of():
// Creates a new Array instance with a variable number of arguments as elements. 

console.log(Array.of(score1, score2, score3));