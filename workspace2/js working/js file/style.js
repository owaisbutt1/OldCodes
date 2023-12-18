//this is single line comment
// document.write("<b> frst text of js </b> < br>");
// document.write("<b> second text of js </b>");

// var myname="owais";
// document.write( "my firstname is ");
// document.write(myname);

// we can assign value after declare variable with multiple variable

// var firstname , lastname , myage;
// firstname="owais";
// lastname="butt";
// myage=22;
// document.write("my first name is ");
// document.write( firstname );
// document.write("<br> my last name is ");
// document.write(lastname);
// document.write("<br>i am ");
// document.write(myage);
// document.write(" year old");

// there are two type of data type :primitive and non-primitive
// primitive data type have string,number,boolean,null,undefined
// non-primitive have object,array

/// ///////////////////////////////////////////////IN BELOW WE USE NEW CODE /////////////////////////////////////////////////////////  ///
// var x = ["apple,mango,banana"];
// document.write("<br> <br>");
// document.write(x);
// document.write("<br> <br>");
// document.write(typeof x);








// WE USE NEW CODE FOR ARITHEMATIC OPERATOR

// var x=5;
// y=5;
// c= a + b;
// c= a - b;
// c=a/b;
// c=a*b;
// a++;
// a--;
// a+=b
// document.write( a + b);
// console.log(x==y);
// console.log(x!=y);




// var time=24;
// if(time>1 && time<12) {
//     document.write("good morning")
// }
// else if( time>12 && time<17){
//     document.write("good evening")
// }
// else if( time>17 && time<23){
//     document.write("good night")
// }
// else{
//     document.write("bye")
// }







// conditional ternary operater in javascript this is shorthand of if else statement

// var age =15;
// var drive=age>=18 ?'yes drive' :'no drive';
// document.write(drive);







// use of switch in javaqscript
// var month = 1;
// switch(month){
//     case(1):document.write('january')
//      break;
//     case(2):document.write('february')
//      break;
//     case(3):document.write('march')
//     break;
//     case(4):document.write('april')
//      break;
//     case(5):document.write('may')
//     break;
//     case(6):document.write('june')
//     break;
//     case(7):document.write('july')
//     break;
//     case(8):document.write('august')
//      break;
//     case(9):document.write('september')
//      break;
//     case(10):document.write('october')
//      break;
//     case(11):document.write('november')
//      break;
//     case(12):document.write('december')
//      break;
//     default:document.write('please enter valid month number');
// }






// use of alert box
// var a=10;
// var b=20;
// if(a>b){
// alert('A is greater than B');
// }
// else{
//     alert('B is greater than A');
// }





// use of confirmbox
//  var a=confirm('do u like this website?');
//  if(a){
//   alert('thanks to like this website');
//  }
//  else{
//      alert('its ok');
//  }





// /////////////////////////use  of promptbox
//  var a=prompt('enter your month number');
// // alert( ' welcome ' + a);
// switch(true){
//     case(a==1):document.write('january')
//     break;
//     case(a==2):document.write('february')
//     break;
//     case(a==3):document.write('march')
//     break;
//     case(a==4):document.write('aprail')
//     break;
//     case(a==5):document.write('may')
//     break;
//     case(a==6):document.write('june')
//     break;
//     case(a==7):document.write('july')
//     break;
//     case(a==8):document.write('august')
//     break;
//     case(a==9):document.write('september')
//     break;
//     case(a==10):document.write('october')
//     break;
//     case(a==11):document.write('november')
//     break;
//     case(a==12):document.write('december')
//     break;
//     default:alert('plz enter valid month number');

// }





// use of function
// function myintro() {
//   document.write("i am awais butt");
//   document.write("<br>");
//   document.write("u can call me awais sir");
//   document.write("<br>");
//   document.write("i am falconer ");
//   document.write("<br>");
//   document.write("<br>");
// }
// myintro();
// myintro();
// myintro();
// myintro();





// now we use  functions with parameter
// function fullname(fname='istekar',lname='hussain'){
//     document.write ('hello ' + fname + ' ' +lname +'<br>')

// };
// fullname();
// fullname('milkha','singh'); 
// fullname('muhammad','ali'); 

// this is also example of fuctions with parameter

// function sum(a,b){
//     document.write (a + b + '<br>')

// };
// sum(20,34); 
// sum(10,21);
// sum(40,21);
// sum(97,31); 





// now we use function return
// function fullname(fname,lname){
//     var a = 'hello ' + fname + ' - ' +lname +'<br>';
//     return a;
// };
 
// var b= fullname('muhammad','ali'); 
// document.write(b);

// i have one other example of function return

// document.write('total subject - 5 <br> total marks - 500 <br>')
// function sumMarks(urdu,eng,math,physics,chemistry){
//     var a = urdu+eng+math+physics+chemistry;
//     return a;
// };
// var b = sumMarks(50,50,90,90,90);
// document.write('mark obtain - ' + b + '<br>') ;
// function percentage(tm){
//     var c=tm/500*100;
//     return c;
// };
// var d=percentage(b);
// document.write('percentage  - ' + d + '%');



function fun(){
    alert('event activated')
}
var mywindow;
function openwindow() {
   mywindow = window.open("http://www.google.com"," ","width=500px,height=500px","left=150px,top=300px");
}
function closewindow(){
   mywindow.close();
}




var body=document.getElementById('body');
var button=document.getElementById('button');
button.onclick= function(){
if ( body.className =="black"){
   body.className="white";
   button.className="black";
}
else{
   body.className="black";
   button.className="white";
}
};



// window.addEventListener('wheel',function(event){
//    if(event.deltaY < 0){
//       console.log('scrolling UP....');
//    }
//    else if(event.deltaY > 0){
//       console.log('scrolling down....');
//    }
 
// })

// this is also part of above code rellated with scroll event

// window.addEventListener('scroll',function(){
//    if(window.pageYOffset > 400){
//       console.log('over 400px....');
//       document.body.style.background='black';
//       document.body.style.color='blue';
//    }
//    else {
//       console.log('under 400px....');
//       document.body.style.background='white';
//       document.body.style.color='black';
//    }
 
// })


// now use of loops
// for( let i=1; i<=5; i++){
//    document.write( i + '<br>');
// }
// have one example of for loop


// for( let i=1; i<=10; i++){
//    if(i%2===0)
//    document.write( i + '<br>')
// }

// use of break and continue statement in loops
//  for( let i=1; i<=10; i++){
//    if(i==7){   continue;
//    }
//    document.write( i + '<br>');

// }
// for( let i=1; i<=10; i++){
//    if(i==7){ break;
//    }
//    document.write(i + '<br>');

// }


// let i=1;
// while(i<=5){
//    document.write(i +'<br>');
//    i++;
// }


// let i=1;
// do{
//    document.write(i+ '<br>');
//    i++;
// }while(i<=5);

// one example of do while loop
// let password;
// do{
//    password = prompt('what is the password?');
// }while(password !=='awais butt');



// now we use array methods

// let software=['illustrator','photoshop','corel','in design'];
// console.log(software);

// now we use method of join 
// let textarray=software.join(' ');
// let textarray=software.join('-');
// let software2=['premiere','audition','corel','in design'];
// let newsoftware=software.concat(software2);/* here we use other software3 etc */
// console.log(newsoftware);

// console.log( textarray);/*this is for only join method */


//  if we attached one other element in last of array now we use this method that is describ in below

// software.push('premiere');

//  if we attached one other element in  starting ofarray now we use this method that is describ in below
// software.unshift('premiere');

// if we remove last element than we use  this method in below how many time we apply pop on thats time elements will remove

// software.pop();
// software.pop();

// if we remove first element than we use this method in below

// software.shift();
// if we remove elements from  between of the elements than we apply this method that aare apply in below splice have two properties to remove elements from 0 or 
// software.splice(1,2);

// we can blank array by two ways
// software.length=[];
// software=0;
// now we see particular position of element
// let position = software.indexOf('corel');
// console.log(position);


// use property to find lenghth of array which is describ below

// console.log(software.length);

// now we use  new variable
// let text='my name is owais butt';
// let wordarray=text.split(' ');
// // console.log(wordarray);
// console.log(wordarray[2]);

// now we see multidimention array 
// let software=[
//    ['illustrator','photoshop'],
//    ['corel','in design']
// ];
// console.log(software[0][1]); /* 0 mein 1  */

// now we discuss object

// let  person={
   // firstName: 'owais' ,
   // lastName : 'butt',
   // age : 22,
   // hobbies:['falconery','jogging','muscle building'],
   // living:{
   //    city:'lahore',
   //    province:'punjab',
   //    country:'pakistan'
   // }
   // salary: function(){
      // return 20000 }
      // fullName:function(){
         // return this.firstName+' '+ this.lastName;
      // }
// };
// now we put two properties of object in one function 
// console.log(person.fullName());
// we put array in objectin above as a hobbies
// console.log(person.hobbies[1] );

// we canalso put object in object and print it value which is describe in below
// console.log(person.living.city);

// we put function in object in above and its result in below
// console.log(person.salary());

// console.log(person );


// if we change property in object first write name the object and .property and put =and put value 
// person.firstName='faizzan';

// if we add propeerty in object first write object name put . and property name put= and after that put value 
// person.email='awaisbutt@gmail.com';

// if we dellete property then wrtie delete give space and then write object name and put . and then write value 
// delete person.age;
// if we see undefined value in form of true or false then write  in operater in console or document.write
// console.log('mail' in person);
// console.log('age' in person);

// console.log(person.firstName);

// for print property and value both we use below code 
// for(let key in person){
//    console.log(key + ':'+ person[key]);
// }




// now we use new variable for math object
// 1 Math.round for round figure
// var x= Math.round (5.7);
// console.log(x);

// 2 Math.ceil  for heighest value
// var x= Math.ceil (5.1);
// console.log(x);

// 3 Math.floor for lowest value
// var x= Math.floor (5.9);
// console.log(x);

// 4 Math.trunc for only print before point value
// var x= Math.trunc (5.1);
// console.log(x);

// 5 Math.pow for put power of value suppose power of 2 is 3 is written as(2,3)
// var x= Math.pow (2,3);
// console.log(x);

// 6 Math.sqrt for find square root of value
// var x= Math.sqrt (100);
// console.log(x);

// 7 Math.min to find minimum value
// var x= Math.min (10,50,100);
// console.log(x);

// 7 Math.min to find maximum value
// var x= Math.max (10,50,100);
// console.log(x);

// we took new var for date method and new date is always written as it  is
// var d= new Date();
// console.log(d.toDateString());

// console.log(d.getFullYear());
/* in above getFullYear is written as it is */
// console.log(d.getMonth());
// in above getMonth ias written as it is
// console.log(d.getDate());

// console.log(d.getHours());

// console.log(d.getMinutes());

// console.log(d.getSeconds());

// console.log(d.getMilliseconds());

// console.log(d.getDay());



