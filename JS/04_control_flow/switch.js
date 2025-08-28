// syntav for switch
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
        // if we dont put break it will run all the other case without checking the value until the default
        // even if you not put break herw the all the underneath cases will get printed but not the default one 
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}