// import {message, user as us, test } from"./style.js";
// // we rename the user name with us and etc  with the help of( as )or over shortcut
// console.log(message);
// // user("yahoo baba"); 
// console.log(us("yahoo baba"));
// // document.body. innerHtml = message;
// let a = new test();

// IF WE USE ALL VARIABLES FUNCTIONS CLASSES FROM ONE FILE TO ANOTHER THEN WE USE  SHORTHAND WHICH IS DESCRIB  BELOW
// import* as yahoo from"./style.js" ;

// we rename the user name with us and etc  with the help of( as )or over shortcut
// console.log(yahoo.message);
// user("yahoo baba"); 
// console.log(yahoo.user("yahoo baba"));
// document.body. innerHtml = message;
// let a = new yahoo.test();

// use of default functionality 
// import { default as yahoo } from "./style.js";
// use of shorthand of default functionality
// import yahoo from "./style.js";
 
// yahoo();
// import d{message, user} from"./style.js";
// console.log(message);
// console.log(user("yahoo baba"));
import user from "../bridge.js" ;

console.log(user());
console.log('1 2 3');