// use of document.getElementsByClassName

var did = document.getElementById('heading1');
// this is for chng text in DOM 
// did.textContent= 'computer courses';
// did.innerText= 'pro courses';
console.log(did);
// with the help of innerHtml we chng tag on that place which we need innerHTMLis written as it is
// did.innerHTML='<h1>hello</h1>' ;
// use of css in DOM 
var dib = document.getElementById('div1')
dib.style.borderBottom = '1px solid blue';

// use of document.getElementsByClassName


/*  var items = document.getElementsByClassName('ankr1');
items[1].textContent = 'animation';
items[2].textContent = 'digital marketing';
items[3].textContent = 'graphics';
// console.log(items[]);
// now here we  use of css in js with  DOM  and these are written as it is
items[2].style.fontWeight ='bold';
items[3].style.color = 'red';
items[1].style.backgroundColor = 'yellow';
// for chng in whole div items we use loopsnow here we use for loop 
for( var i=0; i<items.length; i++){
    items[i].style.backgroundColor='yellow';
} */





// use of document.getElementsByTagName


/*var ankers = document.getElementsByTagName('a');
ankers[1].textContent = 'animation';
ankers[2].textContent = 'digital marketing';
ankers[3].textContent = 'graphics';
// console.log(items[]);
// now here we  use of css in js with  DOM  and these are written as it is
ankers[2].style.fontWeight ='bold';
ankers[3].style.color = 'red';
ankers[1].style.backgroundColor = 'yellow';
// for chng in whole div items we use loops now here we use for loop 
for( var i=0; i<ankers.length; i++){
    ankers[i].style.backgroundColor='yellow';
}*/



// now i am going to use query selector it is always pick only first class items and ignore all of these class those are written after first class we can use paseudo classes last-child,first-child,nth-child() etc in queryselector in ('for example items are clssname and paseudo class is used after its')  one of other method is  to  use queryselector all  and ('only classname')
// for tagName

var paraline = document.querySelector('#paraline');
paraline.style.color = 'white';
paraline.style.fontWeight = 'bold';
// for classname 

// use of lasst-child in queryselector bcz queryselector only access firsrt classname due to this we use paseudo class 
var ankerrss = document.querySelector('.ankr1:last-child');
ankerrss.style.color = 'red';
// var ankerrss = document.querySelectorAll('.ankr1');
// ankerrss[1].style.color = 'red';

// for tagname
// var input =document.querySelector('input');
// input.value = 'enter your name';
// var button = document.querySelector('input[type="submit"]');
// button.value='press';
// button.style.backgroundColor = 'red';

// now we are going to use queryselectorAll
var all = document.querySelectorAll('tr');
for (var i=0; i<all.length; i++){
    all[i].style.color='purple';
}
// we are also use paseudo classes
var all = document.querySelectorAll('tr:nth-child(odd)');
for (var i=0; i<all.length; i++){
    all[i].style.color='purple';
    all[i].style.backgroundColor='orange';
}







// now we r going to create element in html with the help of js 
// create div
var newDiv = document.createElement('div');

//  add class
 newDiv.className = 'box';

//  add id 
newDiv.id = 'textbox';

// create text in it 
var newDivtext = document.createTextNode('i will teach all of these  courses.');
newDiv.appendChild(newDivtext);

var container = document.querySelector('#parent');
var form = document.querySelector('form');
newDiv.style.color='red';
container.insertBefore(newDiv , form) ;
// document.cookie= "name=value; expires=date; domain=domain; path=path; secure";
// document.cookie= "name=value; max-age=inSecond; domain=domain; path=path; secure";
// ex:-
// document.cookie= "username=geeky; expires=Monday,13-may-2022; domain=domain; path=path; secure";
// document.cookie= "username=geeky; max-age="+60*60*24*10; domain=domain; path=path; secure;
// document.cookie= "username=geeky; max-age="+60*60*24*10+";path=/";
// document.cookie= "username=geeky;"
// document.cookie= "username=geeky; path=path";
// document.cookie= "userid=owais; expires=Friday, 20-may-2022 09:00:00 UTC"; 

// alert(document.cookie);
function setCookies(){
    document.cookie= "name=" + document.myform.name.value;
    document.cookie= "email=" + document.myform.email.value;
    document.cookie= "language=" + document.myform.lang.value;
}
// alert(document.cookie);
function getCookies(event){
    event.preventDefault();
    var cookiesArray = document.cookie.split(";");
    for (var i=0; i<cookiesArray.length; i++){
        var valueArray=cookiesArray[i].split("=");
        // alert(valueArray);
        if(valueArray[0].trim()=='name'){
            document.myform.name.value=valueArray[1];
        }
        if(valueArray[0].trim()=='email'){
            document.myform.email.value=valueArray[1];
        }
        if(valueArray[0].trim()=='language'){
            document.myform.lang.value=valueArray[1];
        }
    }
    console.log(cookiesArray);
}
// NOW HERE USE  OF MODULE


//   let message = "ES6 modules";
//   function user(name){
    // return `hello ${name}`;
    // console.log(`hello ${name}`);
// }
// export {user};
//   class test{  
    // constructor(){
        // console.log("constructor method");
    // }
// }
// shorthand of export is written below
// export{ message,user,test };
// export default function (){
//   console.log("hello")  
// }
// export{ message,user};
// THIS IS FOR MODULE'S LAST FEATURE FOR USE MULTIPLE FILES

function user(){
    return `hello`;
}
export {user};