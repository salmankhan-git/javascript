// DATE

let myDates = new Date();
                                                            // OUTPUT        
 console.log(myDates);                                     //2025-08-17T17:47:17.819Z
 console.log(myDates.toString());                          //Sun Aug 17 2025 23:17:17 GMT+0530 (India Standard Time)                             
 console.log(myDates.toISOString());                       //2025-08-17T17:47:17.819Z                 
 console.log(myDates.toJSON());                            //2025-08-17T17:47:17.819Z
 console.log(myDates.toDateString());                      //Sun Aug 17 2025     
 console.log(myDates.toLocaleDateString());                //17/8/2025
 console.log(myDates.toTimeString());                      //23:17:17 GMT+0530 (India Standard Time)                         
 
//  let myCreatedDate = new Date(2025, 0, 25)
//  let myCreatedDate = new Date(2025, 0, 25,5,46)
//  let myCreatedDate = new Date("2025-01-14")
 let myCreatedDate = new Date("08-24-2004")
  console.log(myCreatedDate.toLocaleString()); 