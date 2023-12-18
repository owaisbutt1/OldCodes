// console.log('this is tutorial 58');
// settimeout -->allows us to run the function once after the intervalof time 
// cleartimeout--> allows us to run the function repeatedly after the interval of time 
function  greet(name,age){
    console.log('hello good morning '+ name + " " + age );
}
// timeOut = setTimeout(greet, 5000 , " harry ", 18); 
// console.log(timeOut);
// clearTimeout(timeOut);
// setTimeout(greet(), timeout);-->wrong as it is calling the function inside settimeout 
intervalId =  setInterval(greet,5000 , " harry ", 18);
clearInterval(intervalId);

// var result = document.getElementById("myid");
// console.log(result.parentElement);
var result = document.getElementById("myid");
console.log(result.childNodes);
// we use  below code for previous sibling and previouselementsibling
var res = document.getElementById('myid3');
// console.log(res.lastElementChild.previousElementSibling);
res.lastElementChild.previousElementSibling.textContent = "i am learning DOM";
var neNode = document.createElement("h2");
console.log(neNode);
var neTextnode = document.createTextNode("text created by javascript");
console.log(neTextnode);
var neCommentnode = document.createComment("this is new comment");
console.log(neCommentnode);
// now we r going to append html element which is already exist in html body we append it to in other tag or div etc 
// var myidd = document.getElementById("myid5");
// console.log(myidd);
var mysec = document.getElementById("mysec");
console.log(mysec);
var myh1 = document.getElementById("myh1");
console.log(myh1);
mysec.appendChild(myh1);
console.log(myid5);
// now here w append new element in html body
var nwNode = document.createElement("h2");
var targetNode = document.getElementById("myid6");
targetNode.appendChild(nwNode);
console.log(targetNode);
// now we are going to create the new text node and append it 
var trgtNode = document.getElementById("myid6");
var nTNode = document.createTextNode("hi everyone");
trgtNode.appendChild(nTNode);
console.log(trgtNode);
var targtNode = document.getElementById("myid6");
var nCNode = document.createComment("comment from js");
targtNode.appendChild(nCNode);
console.log(targtNode);

// in below we are going to create element IN WHICH WE put some text + comment

var nELEMENT = document.createElement("h2");

// below way is also use to write the text in element 
// nELEMENT.textContent = "hi guys";
// console.log(nELEMENT);
var nTEXT = document.createTextNode("hi guys");


var nCOMMENT = document.createComment("i am hide from webpage");
nELEMENT.appendChild(nTEXT);
nELEMENT.appendChild(nCOMMENT);
// console.log(nCOMMENT);
// console.log(nELEMENT);
var taargeetNode = document.getElementById("myid6");
taargeetNode.appendChild(nELEMENT);
// taargeetNode.appendChild(nCOMMENT);
console.log(taargeetNode);

// now below we create document fragment 

var df = document.createDocumentFragment();
var hNode = document.createElement("h3");
var pNode = document.createElement("p");
hNode.textContent = "h3 from js";
pNode.textContent = "p from js";
console.log(hNode);
console.log(pNode);
df.appendChild(hNode);
df.appendChild(pNode);
console.log(df);
var divappend = document.getElementById("myid7");
divappend.appendChild(df);
var qwqw = document.getElementById("myid8");
qwqw.appendChild(document.createTextNode("hello"));
qwqw.appendChild(document.createTextNode("my name"));
qwqw.appendChild(document.createTextNode("is awais"));
// normalize method OF DOM 
qwqw.normalize();
// insert before method of DOM  of new element
console.log(qwqw.childNodes);
var parntNod = document.getElementById("myul")
 var neliNode = document.createElement("li");
 neliNode.textContent = "backbone js";
 var reffNode = document.getElementById("myang");
parntNod.insertBefore(neliNode, reffNode) ;
console.log(parntNod);
// insert before method of DOM  of existing element
 var parntNod1 = document.getElementById("myul1");
 var exliNode = document.getElementById("myd31");
var  reffNode1 = document.getElementById("myang1");
var texxtNode = document.createTextNode("hello world");
var reffNode2 = document.getElementById("react1");
parntNod1.insertBefore(texxtNode,reffNode2);
parntNod1.insertBefore(myd31,myang1); 
console.log(parntNod1);
// insert bedore method one element from one parent to other 
var parntNod2 = document.getElementById("myul2");
var exliNode1 = document.getElementById("csharp");
var  reffNode1 = document.getElementById("cprogram");
parntNod2.insertBefore(csharp,cprogram);
console.log(parntNod2);

// nowwe are going to use insertadjacent element
var parntNod3 = document.getElementById("mydiv");
var H = document.getElementById("myh2");
var NEWelement = document.createElement("span"); 
NEWelement.textContent = "this is span";
H.insertAdjacentElement("afterbegin",NEWelement);
// h.insertAdjacenELEMENT("  beforebegin",NEWelement);
console.log(parntNod3);

// now we are going to use insertAdjacentHTML
var parntNod4 = document.getElementById("mydiv1");
var I = document.getElementById("myh5");
var MYHTML = "<span>hello geekyshows</span>";
// I.insertAdjacentHTML("beforebegin",MYHTML);
I.insertAdjacentHTML("afterbegin",MYHTML);
console.log(parntNod4);

// now we are going to use insertadjacenttext

var parntNod5 = document.getElementById("mydiv2");
var J = document.getElementById("myh8");
var ttxt = "hello geekyshows";
J.insertAdjacentText("beforebegin",ttxt);
J.insertAdjacentText("afterbegin",ttxt);
J.insertAdjacentText("beforeend",ttxt);
J.insertAdjacentText("afterend",ttxt);
console.log(parntNod5);

// now below we are going to use innerHTML
var parntNod6 = document.getElementById("myul3");
// below line 146 is use to  replace the code from html  
// parntNod6.innerHTML = "";
parntNod6.innerHTML = "<li>hamza</li><li>nouman</li><li>atif</li><li>haider</li>";
console.log(parntNod6.innerHTML);

// now we are going to use outerHTML 

var parntNod7 = document.getElementById("mydiv3");
var K = document.getElementById("myul4");
K.outerHTML = "<p>this is paragraph</p>";
console.log(parntNod7);

// now we are going to use innerText
var L= document.getElementById("myul5");
L.innerText= "this is text";
console.log(L.innerText);
// console.log(asd.childNodes);

// how to copy nod ein javascript

 var M = document.getElementById("myul6");
//  var duplicateNode = M.cloneNode(false);
var duplicateNode = M.cloneNode(true);
var N = document.getElementById("mydiv5");
N.appendChild( duplicateNode);
console.log(N);
 console.log(duplicateNode);

//  now we are going to learn the method that how to delete or remove the node from the tree

var O = document.getElementById("myul7");
var i = document.getElementById("items2");
O.removeChild(i);
// if we have no id of element than we use this way which is escrib below
// O.removeChild(O.firstElementChild);
// we have one other way whichc is describ below the index is follow the upper remove child
O.removeChild(O.childNodes[6]);

// now we are going to show replace of node and other explanation i am show in below 
var P = document.getElementById("myul8");
var Q = document.getElementById("items1");
var nwchild = document.createElement("li");
nwchild.textContent = "item N";
P.replaceChild(nwchild,Q);

// now we are going to replace node with existing node 
var R = document.getElementById("myul8");
var S = document.getElementById("items5");
var pan = document.getElementById("myspan");
R.replaceChild(pan,S);
// now we see modifying text nodes we use one variable in each method so we can comment out one by one to see the result
// frst text nodes length 
// var T = document.getElementById("qaqa");
// console.log(T.firstChild.length);

// second text nodes data 
// var T = document.getElementById("qaqa");
// console.log(T.firstChild.data);
// we can also set data in it 
// T.firstChild.data = "i am new data";

// nownwe are going to learn how to append  data in nodes 
// var T = document.getElementById("qaqa");
// T.firstChild.appendData(" world");

// now we are going to learn how to delete data in nodes 
// var T = document.getElementById("qaqa");
// T.firstChild.deleteData(0,7);

// now we are going to learn how to insert  data in nodes 
// var T = document.getElementById("qaqa");
// T.firstChild.insertData(4,"hello");

// now we see the replace data method in nodes 
// var T = document.getElementById("qaqa");
// T.firstChild.replaceData(0,4, "helllooooo");

// now we atre goimg to see how we can split txt in  nodes  we can not see it in web page but see in console.log
// var T = document.getElementById("qaqa");
// T.firstChild.splitText(3);
// console.log(T);

// now we are going to see substring data method means if we have big name such as geeky shows and we need only geeky then we use it 
var T = document.getElementById("qaqa");
var qsqs= T.firstChild.substringData(0,3);
console.log (qsqs);

// now we are going to use properties of attributes set and get attributes
var para = document.getElementById("frstid");
// para.setAttribute('class','myclassgeekyshows');
// have one other way to set attributes
para.className = 'myclassgeekyshows';
var getattribute = para.getAttribute('id');
// console.log(getattribute);
// one other way to get attribute 
console.log(para.id);
para.style.fontStyle = 'italic';
console.log(para);
// how to add attribute in html tag 
para.setAttribute('title','mytitle');
console.log(para);

// now we see remove attribute and has attribute 
var para2 = document.getElementById("scndid");
// first is  remove attribute 
// para2.removeAttribute('class');
// second is has attribute 
 var has = para2.hasAttribute('id');
console.log(has );

// now we are going to see css DOM mapping 
var pgraph = document.getElementById('thirdid');
pgraph.style.backgroundColor = "red";
console.log("pgraph",pgraph);

// now we are going to change css class with the help of javascript 
var chngclass = document.getElementById("fourthid");
chngclass.className = "class2";
// console.log(chngclass);

// now here we are going to use learn DOM tokenlist in which we  study classlist  in javascript 
var rfrf = document.getElementById("fifthid");
var elementClass = rfrf.classList;
// below console use for index and find the class on that index 
// console.log(elementClass[0]);
// in below we have one another way to find the value of classes   
           console.log(elementClass.item(0));
// console.log(elementClass);
// now in below we are going to find the lenght of classes in element 
// console.log(elementClass.length);
// now in below we are going to see the values of classes means how many classes are in class attribute  
// console.log(elementClass.value);
// in below we are use .add to add class in class attribute  we can add multipule of classes in  class attribute
           elementClass.add("class6","class7","class8","class9");
             console.log(elementClass);

// in below we are use .remove to add class in class attribute  we can remove multipule of classes in  class attribute
            elementClass.remove("class6")
        console.log(elementClass);

// in below we are going to learn replace classes from old class to new class so let go to the code
    //  elementClass.replace("class3","class5");
    //  console.log(elementClass);

    // now we are going to use addEventListener 
    function disp1(){
        alert("button clicked 1");
    }
    function disp2(){
        alert("button clicked 2");
    }
    var btn = document.getElementById("mybutton");
    btn.addEventListener("click",disp1);
    btn.addEventListener("click",disp2);

    btn.removeEventListener("click",disp2);