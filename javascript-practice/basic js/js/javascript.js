// I   GOING   TO   LEARN   JS   FROM   YOUTUBE   CHANNEL   HUSSAIN   SIR   ITS   LINK   IS   HERE  

document.write(" <h1>hi buddy</h1>");
// USE OF VARIALE
var firstname ="owais";
document.write("<h1> my firstname is "+firstname+"</h1>");
// NOW WE SEE ARITHMETIC OPERATER IT IS WORK ON NUMBERS
document.write("<br>"+ 5);
var a= 2;
a++;
var b=7;
var c=b/a;

document.write("<br>"+a);
document.write("<br>"+a*b);
document.write("<br>"+c);
// NOW WE SEE ASSIGNMENT OPERATER
var d=123;
var e=453;
// firstly it add it and then multiply it 
d+=e;
d*=e;
document.write("<br>"+d+"<br>");
//  NOW WE SEE COMPARISON OPERATER
// <=,>=,==,!=
var f=8;
var g=9;
document.write(f!==g);
document.write(f<g +"<br>");
// NOW WE STUDY IF ELSE IF STATMENT
var time=20;

if(time>=1 && time<=11){
    document.write("<br>good morning");
}else if(time>=12 && time<=15){
    document.write("<br>good afternoon");
}else if(time>=16 && time<=19){
    document.write("<br>good evening");
}else{
    document.write("<br>good night");
}
// ITS ALTERNATE TO DO LIKE THIS
var mode;
if(time>=1 && time<=11){
   mode= "good morning";
}else if(time>=12 && time<=15){
    mode= "good afternoon";
}else if(time>=16 && time<=19){
    mode= "good evening";
}else{
    mode= "good night";
}
document.write("<br>"+mode);
// NOW WE SEE SWITCH CASE
var h=12;
switch(true){
case (h>=1 && h<=11):document.write("<br>good morning")
break;
case(h>=12 && h<=15):document.write("<br>good afternoon")
break;
case(h>=16 && h<=19):document.write("<br>good evening")
break;
// default:document.write("<br>plz enter valid month")
}
//  NOW WE SEE ALERTBOX
var i=39;
var j= 97;
// if(i>j){
//     alert("i is greterthan j");
// }else{
//     alert("j is greaterthan i");
// }
// NOW WE SEE CONFIRM BOX
// var k =confirm("do you like our website?");
// if(k){
//     alert("thanks to like our web");
// }else{
//     alert("it's ok");
// }
// NOW WE SEE PROMPT BOX
// var l=prompt("enter month numer");
// switch(true){
//     case l==1:var m=("january")
//     break;
//     case l==2:var m=("february")
//     break;
//     case l==3:var m=("march")
//     break;
//     case l==4:var m=("april")
//     break;
//     case l==5:var m=("may")
//     break;
//     case l==6:var m=("june")
//     break;
//     case l==7:var m=("july")
//     break;
//     case l==8:var m=("august")
//     break;
//     case l==9:var m=("september")
//     break;
//     case l==10:var m=("october")
//     break;
//     case l==11:var m=("november")
//     break;
//     case l==12:var m=("december")
//     break;
//     default:document.write("enter valid month number")
// }
// document.write("<br>"+m);
// NOW WE SEE FUNCTIONS
function sum(n=3,o=4){
    document.write("<br>");
    document.write(n+o);

}
sum(6,5);
// NOW WE STUDY RETURN VALUE IN FUNCTION
function subjects(math,chemistry,physics,urdu,english){
    var p=math+chemistry+physics+urdu+english;
    return p;
}
var q=subjects(60,70,50,60,80);
document.write("<br> total marks:"+q);
function percentage(tm){
    var p = tm/500*100;
    return p;
}
 var r=percentage(q);
document.write("<br> total percentage:"+r+"%");
// NOW WE STUDY MOUSE EVENTS
function fun(){
    alert("hi onclick mouse event");
}
function fun1(){
    alert("hi oncontextmenu mouse event");
}
function fun2(){
    alert("hi ondblclick mouse event");
}
function fun3(){
    alert("hi onmousedown mouse event");
}
function fun4(){
    alert("hi onmouseup mouse event");
}
//  NOW WE SEE WINDOW EVENTS
var mywindow;
function windowopen(){
    mywindow=window.open("https://www.google.com/","_blank","width=350px,height=300px,left=300px,top=200px");
}
function windowclose(){
    mywindow.close();
}
// NOW WE SEE ADDEVENTLISNER
//  IN BELOW WE SEE EVENTS ONLY AND AFTER THIS WE DO THIS WITH ADDEVENTLISTNER
// document.getElementById('img1').onmouseover=abc;
// function abc(){
//     document.getElementById("img1").style.filter='grayscale(100%)';
// }
// document.getElementById('img1').onmouseout=xyz;
// function xyz(){
//     document.getElementById("img1").style.filter='grayscale(0%)';
// }

//      NOW  BELOW WE USE ADDEVENTLISNER
document.getElementById('img1').addEventListener('mouseover',def);
function def(){
    document.getElementById('img1').style.filter ='grayscale(100%)';
}
document.getElementById('img1').addEventListener('mouseout',uvw);
function uvw(){
    document.getElementById('img1').style.filter ='grayscale(0%)';
}