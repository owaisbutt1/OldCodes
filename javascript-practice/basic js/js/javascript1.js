// THIS IS PART TWO(2)OF JAVASCRIPT PRACTICE

// NOW WE SEE SCROLL EVENT

// window.addEventListener('scroll',abc);
// function abc(){
//     document.body.style.backgroundcolor='yellow';
// console.log('scrolling.....');
// }
// use of wheel it is a part of scroll
// only for vertical scrolling
// window.addEventListener('wheel',function(event){
//     if(event.deltaY<0 ){
//         console.log('scrolling up.......');
//     }else if(event.deltaY>0){
//         console.log('scrolling down.......');
//     }
// })
// only for vertical scroll in limit means as we need to scroll effect on particular pixels
window.addEventListener('wheel',function(event){
    if(window.pageYOffset>400 ){
        // console.log('over 400px.......');
    document.body.style.background = 'black';
    document.body.style.color = 'white';
    }else{
        // console.log('under 400px .......');
        document.body.style.background = 'white';
    document.body.style.color = 'black';
    }
})


//I LEARN LOOPS FROM THIS VIDEO(https://www.youtube.com/watch?v=hk7_p2rCM0E&list=PLw9zMOoodWb5YB2TqrboVoSBkCKaOsvE_&index=32)
// I LEARN BREAK AND CONTINUE FROM THIS VIDEO(https://www.youtube.com/watch?v=oMSLkOW9HhA&list=PLw9zMOoodWb5YB2TqrboVoSBkCKaOsvE_&index=34)

// NOW WE LEARN ARRRAY
// 1)NOW WE WILL SEE HOW ARRAYS CAN BE WRITTEN
// 1)
var cars = ['bmw','mercedes','lxus'];
// 2)
var car=[];
car[0]='bmw';
car[1]='mercedes';
car[2]='lxus';
// 3)
var crs=new Array('bmw','mercedes','lexus');
// if we need to update specific index of array  then see in below code
var subject=[' math',' urdu',' english','computer'];
subject[0]='bio';
var len=subject.length;
document.getElementById('arr').innerHTML=('<br>'+len);
document.getElementById('abc').innerHTML= subject ;
// if we print specific index then see the code below
var sub=subject[0];
document.getElementById('def').innerHTML=('<br>'+sub);
// for in loop
// 1)
var person={
    firstname:'john',
    lastname:'elia'
}
var text=" ";
for(var x in person){
text+=person[x]+" ";
}
document.getElementById('ghi').innerHTML=(text);
document.getElementById('jkl').innerHTML=("<br>"+person.firstname);
//2)
 var number=[45,76,877,334,11];
var num = "";
for(var y in number){
    num += number[y]+" ";
}
document.getElementById('mno').innerHTML=num+"<br>";

// AFTER THIS I LEARN JS FROM THIS YOUTUBE CHANNEL AND I RECOMMEND TO ALL OF YOU TO LEARN JS FROM THIS CHANNEL YAHOO BABA(https://www.youtube.com/watch?v=Lgxgm-T9cgA&list=PL0b6OzIxLPbx-BZTaWu_AF7hsKo_Fvsnf)
// NOW WE SEE MULTIDIMENSIONAL ARRAY
var multi = [
    ['umeir',22,'male','BSCS'],
    ['irteza',23,'male','BSCS'],
    ['uzair',23,'male','SE'],
    ['habiba','22','female','BBA']
];
// document.write(multi);
var lnth=multi.length;
document.write("<table border='1px'>");
for(var x=0; x<lnth;x++){
    document.write('<tr>');
    var y=multi[x].length;
    for(var z=0; z<y; z++){
        document.write('<td>'+multi[x][z] +' '+'<td>');
    }
    document.write('<br>');
    document.write('<tr>');
}
document.write("</table>");


// NOW WE LEARN METHODS OF ARRAY
// 1) modify & delete array
var modify=['umeir',22,'male',100];
document.write('<br>'+modify);
modify[0]=3223;
modify[3]='BSCS';
document.write('<br>'+modify);
// ( THIS LINE FOR ABOVE CODE )we can see that the value of array is ['umeir',22,'male',100] but after modify its value is look like this [3223,22,'male','BSCS']
// for delete array element  we use above array
delete modify[1];
document.write('<br>'+modify);
// 2)NOW WE SEE SORT AND REVERSE METHOD
var sort = ['ubaid','ikram','raheel','kamar'];
document.write('<br>'+sort+'<br>');
sort.sort();
document.write(sort);
sort.reverse();
document.write('<br>'+sort);
// 3) NOW  WE STUDY POP AND PUSH METHOD & SHIFT AND  UNSHIFT METHOD 

var poush=['apple','orange','banana','mango'];
poush.push('grapes');
document.write('<br>'+poush);
poush.pop();
document.write('<br>'+poush);
poush.shift();
document.write('<br>'+poush);
poush.unshift("peach");
document.write('<br>'+poush);
//   NOW WE SEE CONCAT AND JOIN METHOD
var con1=['rahul','prabhas','shetty'];
var con2=['sunny','bunty','elia'];
var con3=['asim','taha','arif'];
var con=con1.concat(con2,con3);
// document.getElementById('stu').innerHTML=con;
document.getElementById('stu').innerHTML=('<br>'+con);
var join= con1.join('/');
document.getElementById('uvw').innerHTML=('<br>'+join);
// NOW WE SEE SLICE AND SPLICE METHOD
var slice=['rahul','prabhas','shettyyy','asim','taha','arif'];
var slices=slice.slice(1,4);
document.write('<br>'+slice);
var splicee=['rahul','prabhas','shettyyy','asim','taha','arif'];
// var bbbb=splicee.splice(1,0,'abhijet','yousaf');
// document.write('<br>'+bbbb);
splicee.splice(1,0,'abhijet','yousaf');
document.write(splicee);
// I HAVE ONE QUESTION TO RELATED SPLICE METHOD WHY SPLICE IS NOT WORKING WHEN WE DECLARE VARIABLE IN ABOVE CODE
// NXT METHOD IS ISAARRAY WHICH USE TO FIND THAT THE VARIABLE IS ARRAY OR NOT(https://www.youtube.com/watch?v=xxm67NBPvPA&list=PL0b6OzIxLPbx-BZTaWu_AF7hsKo_Fvsnf&index=42)
// NOW WE SEE INDEXOF AND LASTINDEXOF METHOD
var index_find=['sanjay','aman','rehman','rsgrd','aman','rahul'];
//  var index_find1 = index_find.indexOf('aman',2);
// document.write(index_find1);
var index_find2 = index_find.lastIndexOf('aman');
document.write(index_find2);



