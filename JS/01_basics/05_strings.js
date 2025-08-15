const name = "salman"
const repoCount = 50
// string concationation :sidha add karte jo par yeh readable nahi hota 

// console.log(name+repoCount+" value");  

// string interpolation : yeah `  ${string}  `  yeh method readble or accha bhi hota hai

// console.log(`helllo my name is ${name} and my repo-count is ${repoCount} `);


const channelName = new String("salmankh")

console.log(channelName.toUpperCase());
console.log(channelName.charAt(3));
console.log(channelName.indexOf("k"));
console.log(channelName.substring(0,6));
console.log(channelName.slice(-8,-2));

const boss = String("   salman    ")
console.log(boss.trim());


const url= "https://salman.-google.com"
console.log(url.replace("-",""));
console.log(url.split("-"));
console.log(url.split("").reverse().join());

