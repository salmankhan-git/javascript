// for-in loop
//by this loop we can use object as iterator
// The for...in loop in JavaScript iterates over the enumerable string properties of an object. 
// It provides a way to access each key (property name) of an object. 
// basically the major difference is it iterates on the key aspect whereas for-of works on the value
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(key) // this give the index as output
    // console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

for (const key in map) {
    // console.log(key);
}
// these will not print any thing as maps these loop works on key 