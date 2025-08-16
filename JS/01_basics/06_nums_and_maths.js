/*
const score = 400;
console.log(score);

const balance = new Number(786);
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 23.89666
console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));


console.log(Number.MAX_VALUE);
*/
// +++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(4.6));
console.log(Math.round(4.6));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.6));
console.log(Math.max(4,5,9,3,7));
console.log(Math.min(4,5,9,3,7));



// math.random generates number between [0,1)

console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor((Math.random()*10)+1));

const min = 10;
const max = 20;


// yeh formula hain tu generate number between a range of [min,max]
// (max +min-1) yeh no. between range bata rahe hain or agar ismein +1 nahi hoga 
// toh yeh kabhi bhi hame max value nahi dega
// +min isliye kyoki agar random mein zero aya toh min toh chaiye hi na.

console.log(Math.floor((Math.random()*(max-min+1))+min));
