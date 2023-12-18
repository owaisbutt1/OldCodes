// ARROW FUNCTION 
// 
// 
// 
// 
// 
// var name='owais';
// var lasName='butt';
// let welcome=function(names){
//     return`hello ${names}`;
// }
// console.log(lasName);
// console.log(welcome(name));
// let lname=(lastName)=>{return`hello ${lastName}`;}
// console.log(lname(lasName));
// 
// 
// 
// 
// REST OPERATER 
// 
// 
// 
// 
// function welcome(name,degree,...args){
//     var sum=0;
//     for(var i in args){
//         sum+=args[i];
//     } 
//     document.write(
//         `<h1>${name} in ${degree} :${sum}</h1>`
//     );

// }
// welcome('owais','BSCS',20,80,99,33);
// welcome('rahul','BBA',60,50,63,83);
// 
// 
// 
// 
// SPREAD OPERATER 
// 
// 
// 
// 
// Example1
// var arrae=[44,25,12,88];
// console.log(arrae);
// console.log(...arrae);
// the difference we can see in console
// Example2
// var arr=[20,80,99,33];
// var arrs=[60,50,63,83];
// function welcome(name,course,...args){
//         var sum=0;
//         for(var i in args){
//             sum+=args[i];
//         } 
//         document.write(
//             `<h1>${name} in ${course} :${sum}</h1>`
//         );
    
//     }
//     welcome('sayyam','BSCS',...arr);
//     welcome('hamza','BBA',...arrs);
// Example3
// var arr1=[20,43,66,234,5];
// var arr2=arr1;
// //else if 
// arr2=[...arr1];
// // then
// arr1.push(90);
// console.log(arr2);
// console.log(arr1);
// CONCAT TWO ARRAYS BY SPREAD METHOD
var arr3=[54,76,48];
var arr4=[55,22,14];
var arr5=[...arr3,...arr4];
console.log(arr5);
    