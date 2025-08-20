// arrays
// it uses shallow copy (which uses the same reference point) wahi heap wala scene
// deep copy (which not uses the same reference point)


/*
const myArr=["salman",786,"khan",true,null,undefined]
const myFam=["salman","umaid","sam","salu"]
console.log(myArr[5]);
*/
const myArr2 = new Array(9,8,4,1)
// console.log(myArr2[2]);


//array methods

// myArr2.push(7)
// console.log(myArr2);   //o/p [ 9, 8, 4, 1, 7 ]


// myArr2.pop()
// console.log(myArr2);                [ 9, 8, 4]

// myArr2.unshift(9)    // yeh array ke start mein aad kardega 9 par 
                     // bekar hai kyoki sari value shift karke add ho raha hai isliye 
                     // jabb  badi  array hogi toh slow ho sakta hai

// myArr2.shift()    //Removes the first element from an array and returns it 

// console.log(myArr2.includes(5));// Determines whether an array includes a certain element, returning true or false as appropriate
                    
// console.log(myArr2.indexOf(2)); //Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

// const newArr= myArr2.join()//Adds all the elements of an array into a string, separated by the specified separator string.

// slice, splice
//slice = Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.
//splice = Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

                                        // OUTPUT
console.log("A ", myArr2);              //A  [ 9, 8, 4, 1 ]

const myn1 = myArr2.slice(1, 3)         

console.log(myn1);                      //[8,4] slice mein end wal nahi include hota or original mein bhi koi change nahi hota
console.log("B ", myArr2);              //B  [ 9, 8, 4, 1 ]


const myn2 = myArr2.splice(1, 3)        
console.log("C ", myArr2);              //C  [ 9 ] splice mein end bhi include hota hai par yeh original aaray se bhi delete hojata hai jitna bhi splice hua hai
console.log(myn2);                      //[ 8, 4, 1 ]