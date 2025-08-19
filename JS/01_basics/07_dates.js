// DATE
/*
let myDates = new Date();
                                                            // OUTPUT        
 console.log(myDates);                                     //2025-08-17T17:47:17.819Z
 console.log(myDates.toString());                          //Sun Aug 17 2025 23:17:17 GMT+0530 (India Standard Time)                             
 console.log(myDates.toISOString());                       //2025-08-17T17:47:17.819Z                 
 console.log(myDates.toJSON());                            //2025-08-17T17:47:17.819Z
 console.log(myDates.toDateString());                      //Sun Aug 17 2025     
 console.log(myDates.toLocaleDateString());                //17/8/2025
 console.log(myDates.toTimeString());                      //23:17:17 GMT+0530 (India Standard Time)                         
 
//  let myCreatedDate = new Date(2025, 0, 25)  //is mein month 0 se start hai
//  let myCreatedDate = new Date(2025, 0, 25,5,46)
//  let myCreatedDate = new Date("2025-01-14")

*/
 let myCreatedDate = new Date("08-24-2004")
  console.log(myCreatedDate.toLocaleString()); 

  let myTimeStamp = Date.now() // yeh date.now current date im millisecond from default date
  console.log(myTimeStamp);
  console.log(myCreatedDate.getTime()); // .gettime bhi date bata raha hai in ms from given value
  console.log(Math.round(Date.now()/1000)); // yeh second mein hain
  
  let newDate = new Date()
  console.log(newDate);
  console.log(newDate.getMonth());  // is mein +1 isliye kyoki date mein month 0 se start hota hai 
  console.log(newDate.getDay());

  // isko normally ese use karte hai
  //   `${newDate.getDay()} and the time....`

  newDate.toLocaleString('default',{
    weekday:"long",
    })
  