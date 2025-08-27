// Immediately Invoked Function Expressions (IIFE)
// primiarily used for scope management and encapsulation
// iife creates their own private scope which help avoiding global scope pollution

// syntax  ()()  // in this the first parenthesis is for funtion and the second one is for exection

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();
// in iife it is must to use semicolon after the line end bcz iife invokes the function but it does not tell where to stop. 

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')