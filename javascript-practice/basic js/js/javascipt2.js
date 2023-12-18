// var a=['aman','nouman','ghalib','mohsin'];
// var b=a.includes('aman');
// document.getElementById('a').innerHTML=('<br>'+b);
// 
// 
// 
// 
// 
// NOW WE SEE OBJECTS in which we put arrays ,multipule functions ,nested objects AND & we have another way to write object for example (var person=new Object();=>person.fname='owais';=>person.lname='butt';)
// var c= {
//     fname:'owais',
//     lname:'butt',
//     age:23,
//     email:'hellowais@gmail.com',
//     favmovie:['dhoom','race','iron man'],
//     salery:function(){
//         return 25000;
//     },
//     fullname:function(){
//         return this.fname +' ' + this.lname;
//     },
//     living:{
//         city:'lahore',
//         province:'punjab',
//         country:'pakistan'
//     }
// }
// document.getElementById('b').innerHTML=(c.fname);
// console.log(c);
// console.log(c.fname);
// console.log(c.favmovie);
// console.log(c.favmovie[1]);
// console.log(c.salery());
// console.log(c.fullname())
// console.log(c.living);
// console.log(c.living.city);
// 
//
//  
// 
// 
// NOW WE SEE FOR IN LOOP
// var d={
//     fname:'owais',
//     lname:'butt',
//     age:23
// }
// for(var key in d){
//     document.write(key+':'+d[key]+'<br>');
// }
// 
// 
//
//  
// 
// NOW WE SEE MAP METHOD IN OBJECT
// var e=[
//     {fname:'yahoo',lname:'baba'},
//     {fname:'kinza',lname:'mehar'},
//     {fname:'allama',lname:'iqbal'}
// ];
// var f=e.map(test);
// console.log(f);
// function test(x){
// return x.fname  +" "+x.lname;
// }
// 
// 
// 
//
//  
//  NOW WE SEE STRINGS METHODS
// var string="javascript is Great is a Language";
// WE SEE METHODS ONE BY ONE 
// 1)
// var g=string.length;
// 2)
// var g=string.toLowerCase();
// 3)
// var g=string.toUpperCase();
// 4)includes method is case sensitive
// var g=string.includes('javaScripT');
// var g=string.includes('Great');
// var g=string.includes('ipt');
// 5)startsWith is casesensitive
// var g=string.startsWith('java');
// var g=string.startsWith('javascript');
// var g=string.startsWith('ipt');
// 6)endsWith is casesensitive
// var g=string.endsWith('Language');
// var g=string.endsWith('uage');
// var g=string.endsWith('language');
// 7)search method return the position odf word if it don't find the word it return -1
// var g=string.search('is');
// var g=string.search('sdsis');
// 8)
// var g=string.lastIndexOf('is');
// var g=string.indexOf('is');
// var g =string.replace('javascript','php');
// var g =string.replace(/is/g,'are');
// 9)trim method is use to remove spaces from the string it is mostly use in form when user fill the form
// var g =string.trim();
// alert(string);
// 10) use to concat or join multiple arrays
// var string1='heloo buddy ';
// var string2='how are you';
// var string3=' where u from?';
// var g=string1.concat(string2,string3);
// 11)split
// var g=string.split(' ');
// 12)repeat
// var g=string.repeat(2);
// 13)slice
// var g=string.slice(0,10);
// var g=string.slice(10,13);
// 14)substr is like slice only one difference between them is the last index is counted in substr
// var g=string.substr(2,15);
// 15)substring
// var g=string.substring(2,15);
// console.log(g);
// 
// 
// 
// 
// 
// NOW WE SEE JS NUMBER METHODS 
// 1)Number
// var h= '101';
// var num=Number(h);
// console.log(num+22);
// 2) parseInt give us a n integer withoutb decimal
// var h='10.345 44.55';
// var h='10.5 years';
// var h='he was 60';
// var num=parseInt(h);
// console.log(num);
// 3)parsefloat give us integer with decimal
// var h='10.5 years';
// var num=parseFloat(h);
// console.log(num);
// 4)isFinite if value is finite it give true otherwise it give false
// var h=Infinity;
// var h=100;
// var num=isFinite(h);
// console.log(num);
// 5)isInteger is use to check the varaiable is integer only not float or not
// var h=100;
// var h='100';
// var h=100-20;
// var num=Number.isInteger(h);
// console.log(num);
// 6)toFixed it just give value not roundfigure but toPrecision give us roundfigure value 
// var h=5.56789;
// var num=h.toFixed(4);
// document.write(num);
// console.log(num);
// 
// 
// 
// 
// 
// NOW WE DISCUSS MATH METHODS
// 1)ceil stepup the value
// var i=Math.ceil(2.45);
// var i=Math.ceil(10.10);
// var i=Math.ceil(-10.10);
// var i=Math.ceil(-50.10);
// 2)floor stepdown the value
// var i=Math.floor(10.10);
// var i=Math.floor(-50.10);
// 3)round it round value to stepup and stepdown on bases of points
// var i=Math.round(3.49);
// var i=Math.round(3.50);
// 4)trunc give only integer value and ignore the vaalue after point
// var i=Math.trunc(3.50);
// var i=Math.trunc(44.66);
// 5)max function
// var i=Math.max(10.3,43.88,21.55);
// var i=Math.max(4,77,123,876,3333,677878,3452345432,543523452452345,567657345635635,66666666699);
// 5)min function
// var i=Math.min(10.3,43.88,21.55);
// var i=Math.min(33,44,21,79,99);
// 6)sqrt
// var i=Math.sqrt(25);
// var i=Math.cbrt(25);
// var i=Math.pow(3,4);
// var i=Math.pow(2,5);
// console.log(i);
// 
// 
// 
// 
// 
//NOW WE LEARN DATE METHODS IN THESE METHOD DAY AND MONTH IS START FROM 0 0DAY MEAN SUNDAY 0MONTH MEA N JAN
// var j=new Date();
// console.log(j.toDateString());
// console.log(j.getDate());
// console.log(j.getFullYear());
// var j=new Date('december 17 2002');
// console.log(j.getDay());
// console.log(j.getMonth());
// console.log(j.getHours());
// console.log(j.getMinutes());
// console.log(j.getSeconds());
// console.log(j.getMilliseconds());
// console.log(j.getDate()+ "/"+j.getMonth()+"/"+j.getFullYear());
// her e we see set date
// j.setDate(20);
// document.write(j);
// j.setFullYear(2024);
// document.write(j);
// j.setMonth(12);
// document.write(j);
// j.setHours(14);
// document.write(j);
// console.log(j.setMinutes());
// console.log(j.setSeconds());
// console.log(j.setMilliseconds());
//console.log(j);
// 
// 
// 
// 
// 
// 
// NOW WE LEARN DOM
// innerText
// var k;
// k=document.getElementById("aside").innerText;
// console.log(k);
// innerHTML
// var l;
// l=document.getElementById("aside").innerHTML;
// console.log(l);
// getattribute
// var m;
// m=document.getElementById('h1').getAttribute('style');
// m=document.getElementById('h1').attributes;
// m=document.getElementById('h1').attributes[1].name;
// m=document.getElementById('h1').attributes[2].value;
// console.log(m);
//  NOW WE SEE DOM SET METHOD
// INNERHTML
// document.getElementById('h1').innerText='i am debugger';
// INNERHTML
// document.getElementById('wow').innerHTML='<h1>i am debugger</h1>';
// SETATTRIBUTE
// document.getElementById('wow').onclick=WOW;
// function WOW(){
    // document.getElementById('wow').setAttribute('class','WOW');
// }
// 1)
// document.getElementById('wow').addEventListener('mouseout',function(){
//     document.getElementById('wow').setAttribute('class','chng');
// });
// 2)
// document.getElementById('wow').addEventListener('mouseout',hi);
// function hi(){
//     document.getElementById('wow').setAttribute('class','chng');
// };
// 3)
// document.getElementById('wow').onmouseout=function how(){
// document.getElementById('wow').setAttribute('class','chng');
// }
//  ATTRIBUTE
// document.getElementById('h2').attributes[1].value ='chngs';
// REMOVEATTRIBUTE
// document.getElementById('h2').removeAttribute('class');
// NOW WE LEARN QUERYSELECTOR
//(https://www.youtube.com/watch?v=Tmn1kTysDOQ&list=PL0b6OzIxLPbx-BZTaWu_AF7hsKo_Fvsnf&index=65)
// NOW WE LEARN DOM CSS STYLING METHODS
// document.querySelector('.mycss').style.border='5px solid red';
// document.querySelector('.mycss').className="cssmy";
// console.log(n);
// 
// 
// 
// 
// 
// 
// NOW WE SEE TRAVERSAL METHOD
// 1) the difference between parentnode and parent element is that parentnode always return value
// document.getElementById('parent').parentElement.style.background="red";
// var o=document.getElementById('parent').parentElement.style.background;
// var o=document.getElementById('parent').parentElement;
// console.log(o);
// var oo=document.getElementById('main').parentNode;
// var oo=document.getElementById('main').parentElement;
// console.log(oo);
// 
// 
// 2) NOW WE SEE CHILDREN AND CHILDNODE
// var p= document.getElementById('parent').children;
// var p= document.getElementById('parent').children[1];
// document.getElementById('parent').children[1].style.background='purple';
// document.getElementById('parent').children[2].style.background='purple';
// var p=document.getElementById('parent').children[2].style.background;
// var p=document.getElementById('parent').children[2].innerHTML;
//  var p=document.getElementById('parent').children[2].innerHTML="<h5>hello buddy</h5>";
// console.log(p);
// CHILDNODE ALWAYS TAKE SPACES AND ENTERS AS A TEXT AND COUNT AS A CHILD this  is only thew difference between children and childnodes
// var pp= document.getElementById('parent').childNodes;
// console.log(pp);
// 
// 
// 3)FIRSTELEMENTCHILD,LASTELEMENTCHILD ,FIRSTCHILD (SAME AS CHILDNODES)
// document.getElementById('parent').firstElementChild.style.background='red';
// var q=document.getElementById('parent').firstElementChild.style.background;
//  var q=document.getElementById('parent').firstElementChild.innerHTML;
// var q=document.getElementById('parent').firstElementChild;
// var q=document.getElementById('parent').lastElementChild.style.background='red';
// var q=document.getElementById('parent').lastElementChild.innerHTML;
// var q=document.getElementById('parent').firstChild;
// var q=document.getElementById('parent').lastChild;
// console.log(q);
// 4)NEXTELEMENTSIBLING,NEXTSIBLING,PREVIOUSELEMENTSIBLING,PREVIOUSSIBLING(PREVIOUSSIBLING,NEXTSIBLING BEHAVE LIKE CHILDNODE TAKE ENTER SPACES AS A SIBLING)
// var r=document.getElementById('child-2').nextElementSibling;
// var r=document.getElementById('child-2').previousElementSibling;
// document.getElementById('child-2').previousElementSibling.style.background='red';
// var r=document.getElementById('child-2').previousElementSibling.innerHTML;
// var r=document.getElementById('child-2').nextSibling;
// var r=document.getElementById('child-2').previousSibling;
// console.log(r);
// // 
// 
// 
// 
// 
// 
// NOW WE SEE CREATE METHODS
// 1)createElement
// var newElement=document.createElement("h1");
// console.log(newElement);
// var newtext=document.createTextNode("this is text");
// console.log(newtext);
// var newcomment=document.createComment("this is comment");
// console.log(newcomment);
// newElement.appendChild(newtext);
// var attach=document.querySelector('#attach').appendChild(newElement);
// var app=document.getElementById('b11');
// app.insertBefore(newElement,app.children[1]);
// console.log(attach);
// 
// 
// 
// 
// 
// ADJECENT METHODS
// 1)insertAdjacentElement
// var s=document.createElement('h2');
// var ss=document.createTextNode('this is h2 heading');
// s.appendChild(ss);
// var sssss=document.querySelector('#adjacent').insertAdjacentElement("afterend",s);
// 1)insertAdjacentHTML
// var t= document.querySelector('#adjacent-1');
// var tt='<h1>hi i am heading</h1>';
// t.insertAdjacentHTML('afterend',tt);
// var ttt='hi i am text';
// t.insertAdjacentText('afterbegin',ttt);
// 
// 
// 
// 
// 
// REPLACECHILD
// var u=document.querySelector('#replace-or-remove');
// var u1=document.createElement("li");
// var u2=document.createTextNode('melon');
// u1.appendChild(u2);
// u.replaceChild(u1,u.children[0]);
// console.log(u1);
// REMOVECHILD
// u.removeChild(u.children[2]);
// 
// 
// 
// 
// 
// CLONENODE METHOD
// var v=document.querySelector("#replace-or-remove").children[1];
// var v1=v.cloneNode(true);
// var v2=document.querySelector("#list1");
// v2.insertBefore(v1,v2.children[3]);
// console.log(v2);
// 
// 
// 
// 
// 
// CONTAIN METHOD 
// var methodTest=document.querySelector('#parentContain');
// var con=document.querySelector('#contain');
// var conn=methodTest.contains(con);
// console.log(conn);
























