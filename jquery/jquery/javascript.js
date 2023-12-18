$(document).ready(function () {
  //  var a= $("#box").html();
  //   console.log(a);

  //    var b = $(".test").css("border","2px solid red");
  //   console.log(b);

  // SEE SELECTOR  BY CLICK THIS LINK( https://www.youtube.com/watch?v=yyVHXIciUtg&list=PL0b6OzIxLPbzSyiC0PFaqeabe1aGhfrbW&index=5  )
  // $("li:first-child").css("border","2px solid red");

  // if we target in some li means which is not a last or first then we target as i write in below i am going to target 3rd li as we now index is strt from 0
  // $("ul li:eq(2)").css("border","2px solid red");

  // GREATERTHAN 2
  // $("ul li:gt (2)").css("border","2px solid red");

  // LESSTHAN 2
  // $("ul li:lt(2)").css("border","2px solid red");

  //   $("#box").click(function () {
  //     $("#box").css("background-color", "green");
  // var c =$("#box").html();
  // console.log(c);
  //   });
  //   $("#box").dblclick(function () {
  //     $("#box").css("background-color", "orange");
  // var d =$("#box").html();
  // console.log(d);
  //   });

  //   $("#box").contextmenu(function () {
  //     $("#box").css("background-color", "red");
  // var e=$("#box").html();
  // console.log(e);
  //   });
  //   WE  CAN ALSO USE THIS KEYWORD MOUSEMOVE IS ALSO AN EVENT

  //   $("#box").mouseenter(function () {
  //     $(this).css("background-color", "tan");
  //     var f = $("#box").html();
  //     console.log(f);
  //   });
  //   $("#box").mouseleave(function () {
  //     $(this).css("background-color", "yellow");
  //     var g = $("#box").html();
  //     console.log(g);
  //   });
  // KEYEVENTS
  //   $("body").keypress(function () {
  //     $(this).css("background-color", "grey");
  //   });
  //   $("body").keyup(function () {
  //     $(this).css("background-color", "blue");
  //   });
  //   $("body").keydown(function () {
  //     $(this).css("background-color", "brown");
  //   });

  // $("#sname,#semail,#scountry").focus(function(){
  //     $(this).css("background-color","yellow");
  // });
  // $("#sname,#semail,#scountry").blur(function(){
  //     $(this).css("background-color","green");
  // });
  // $("#scountry").change(function(){
  //     var h = $(this).val();
  //     $("#div1").html(h);
  // });
  // $("#sname,#semail").select(function(){
  //      $(this).css("background-color","red");
  // });

  // $("#sform").submit(function(){
  //     alert("form submited");
  // });

  // $("#sform").submit(function(){
  //         alert("form submit");
  //     });
  //     $("#inputtest1").keydown(function(){
  //        alert(this.value);
  //     });
  //     $("#inputtest2").keyup(function(){
  //         alert(this.value);
  //      });
  //      $("#inputtest3").keypress(function(){
  //         alert(this.value);
  //      });
  //      $(window).scroll(function(){
  //         console.log("page is scrolling");
  //      });
  //      $("#rree").scroll(function(){
  //         console.log("page is scrolling");
  //      });
  //      $(window).resize(function(){
  //         console.log("page is resizing");
  //      });

  //   $('#addtag').html("");
  // in below function we print value in document html page
  $("#sform").submit(function () {
    var j = $("#sname").val();
    var k = $("#semail").val();
    var l = $("#scountry").val();
    $(".addtag").html(j + "<br>" + k + l);
  });

  //   ADD AND REMOVE CLASSES
  $("#button_add_class").click(function () {
    $("#box2").addClass("rere");
  });
  //   in below we remove the class which we make in upper function
  $("#button_remove_class").click(function () {
    $("#box2").removeClass("rere");
  });
  //   CSS METHOD
  //   if we see css method then we use $("#..").css({"background":"pink","color:red"})
  // NOW WE USE ON/OFF METHOD
  //  $("#box3").on({
  //     "click":function(){
  //       $(this).css({"background-color":"green","height":"300px"});
  //     },
  //     "mouseover":function(){
  //       $(this).css({"background-color":"yellow","height":"300px"});
  //     },
  //     "mouseout":function(){
  //       $(this).css({"background-color":"grey","height":"200px"});
  //     }
  //  });
  $("#pre").click(function () {
    $("#box3").prepend("<h2>yahoo baba</h2>");
  });
  $("#app").click(function () {
    $("#box3").append("<h2>yahoo baba</h2>");
  });
  // APPENDTO() AND PREPENDTO() IS SAME AS APPEND AND PREPEND AND ALSO WORK AS SAME D\IFFERNECE IS THAT IN APPEND AND PREPEND (TO) THE SELECTOR IS COME AFTER AND CONTENT THAT WE WANT TO ADD WILL COME FIRST

  // AFTER AND BEFORE METHOD IS SAME AS APPEND AND PREPED METHOD THE DIFFERENCE IS ONLY THAT AFTER AND BEFORE IS USE TO ADD SOMETHING BEFORE AND AFTER AND DIV AND APPEND AND PREPEND IS USED TO ADD SOMETHING IN DIV BEDFORE AND AFTER SOME DATRA

  //NOW WE USE EMPTY AND REMOVE METHOD
  $("#empty").click(function () {
    $("#box4").empty();
  });
  $("#remove").click(function () {
    $("#box4").remove();
  });
  // NOW WE DISCUSS CLONE METHOD IN WHICH WE LEARN THAT HOW TO COPY OBJECT(HTML ELEMENTS) FROM ONE DIV TO ANOTHER
  $("#clonebtn").click(function () {
    $("#box4 h1").clone().appendTo("#clone");
  });
  // NOW WE DISCUSSS REPLACEWITH AND REPLACEALL IN REPLACEALL WEE CAN  NOT REPLACE TAGS WITH ONLY SIMPLE TEXT
  $("#replace").click(function () {
    // $("#box4 p:last").replaceWith("<h2>yahoo baba</h2>")
    $("<h2>yahoo baba</h2>").replaceAll("#box4 p:last");
  });

  $("#wrap").click(function () {
    $("#box5 p").wrap('<div id="stylewrap"></div>');
  });
  $("#unwrap").click(function () {
    $("#box5 p").unwrap();
  });
  // NOW WE USE WRAPALL AND WRAPINNER
  $("#wrapall").click(function () {
    $("#box6 p").wrapAll("<div id='umeir'></div>");
  });
  $("#wrapinner").click(function () {
    $("#box6 p").wrapInner("<span id='umeiry'></span>");
  });
  $("#wi").html("<h1>widths</h1>");
  $("#width").click(function () {
    var m = $("#box7").width();
    var n = $("#box7").innerWidth();
    var o = $("#box7").outerWidth();
    var p = $("#box7").outerWidth(true);
    $("#wi").append("<br>" + m + "<br>" + n + "<br>" + o + "<br>" + p);
  });
  $("#wj").html("<h1>heights</h1>");
  $("#height").click(function () {
    var q = $("#box7").height();
    var r = $("#box7").innerHeight();
    var s = $("#box7").outerHeight();
    var t = $("#box7").outerHeight(true);
    $("#wj").append("<br>" + q + "<br>" + r + "<br>" + s + "<br>" + t);
  });
  //  NOW WE LEARN POSITION AND OFFSET METHOD THE DIFFERENCE IS THAT POSITION TAKE ITS POSITION FROM ITS PARENT BUT OFFSET OBJECT TAKE ITS POSITION FROM THE VIEWPORT(ACCORDING TO SCREEN)

  $("#position").click(function () {
    console.log($("#box8 h1").position());
  });
  $("#offset").click(function () {
    console.log($("#box8 h1 ").offset());
  });
  $("#setoff").click(function () {
    $("#box8").offset({ top: 0, left: 0 });
  });
  // NOW WE USE SCROLLTOP AND SCROLLLEFT
  // $(window).scroll(function(){
  //   $("#box9").html("");
  //   $("#box9").prepend("scrollleft and scrolltop");
  //   $("#box9").append("<br>"+$(window).scrollTop());
  //   $("#box9").append("<br>"+$(window).scrollLeft());
  // ($(window).scrollLeft());
  // });
  // WE CAN ALSO SCROLL WITH BUTTON
  $("#scrolltop").click(function () {
    $(window).scrollTop(200);
  });
  $("#scrollleft").click(function () {
    $(window).scrollLeft(200);
  });
  //  WE  HAVE HASCLASSS METHOD WHICH WORKING IS THAT TO FIND A CLASS
  $("#hasclass").click(function () {
    var u = $("#hasclases").hasClass("qwwq");
    if (u == true) {
      $("#hasclases").text("true");
    } else {
      $("#hasclases").text("No");
    }
  });
  // now we study hide/show/toggle method
  $("#show").click(function(){
    $("#hidsho").show("fast");
  });
  $("#hide").click(function(){
    $("#hidsho").hide(2000,function(){
console.log("now it is hide");
    });
  });
  $("#toggle").click(function(){
    $("#hidsho").toggle(2000,function(){
console.log("now it is toggle");
    });
  });
  // NOW WE DISCUSS FADIEN FADEOUT FADE TOGGLE FADETO
  $("#fadein").click(function(){
    $("#fadinout").fadeIn("slow");
  });
  $("#fadeout").click(function(){
    $("#fadinout").fadeOut("slow");
  });
  $("#fadetoggle").click(function(){
    $("#fadinout").fadeToggle("slow",function(){
      console.log("div is toggle")
    });
  });
  $("#fadeto").click(function(){
    $("#fadinout").fadeTo("slow",0.1,function(){
      console.log("hi fadeto");
    });
  });
// now we discuss slideup slidedown slide toggle
$("#slideupbtn").click(function(){
  $("#slide").slideUp();
});
$("#slidedownbtn").click(function(){
  $("#slide").slideDown();
});
$("#slidetogglebtn").click(function(){
  $("#slide").slideToggle(3000,function(){
    console.log("hy toggle");
  });
});

$("#animate").click(function(){
  $("#box10").animate({left:'350px',width:'+=330px'},2000,function(){
console.log("hi animation");
  })
  $("#box10").animate({top:'150px'})
  $("#box10").animate({width:'+=150px'})
  $("#box10").animate({transform:'rotate(120deg)'})
});
// HERE WE STUDY STOP METHOD TO STOP ANIMATION
$("#stop").click(function(){
$("#box10").stop();
});
// NOW WE STUDY METHOD CHAINING TO ADD METHODS IN ONE LINE
$("#methodchaining").click(function(){
  $("#box11").css({"background":"pink"}).slideUp("slow").slideDown();
});

// NOW WE DISCUSS ANCESTORS METHOD 
$("#prent").click(function(){
  $("#child_3").parent().css('background-color','red');
});
// IN PARENTS METHOD WE CAN TAKE ONLY ONE PARENT ALSO BY GIVE ITS ID IN PARENTS METHOD
$('#parents').click(function(){
  $("#child_3").parents('#great_grand_parent').css('background','red');
});
$('#parentsUntil').click(function(){
  $("#child_2").parentsUntil('#grand_parent').css('background','red');
});
// offsetparent is used for position relative
$('#offsetparent').click(function(){
  $("#child_2").offsetParent().css('background','red');
});
// NOW WE SEE DESENSTOR METHOD
$('#children').click(function(){
  $("#inner").children("#child_C").css('background','red')
  $("#main_outer").find('.check').css('background','red')
});
// now in below we learn siblings method
// WE CAN TARGET SPECIFIC SIBLING
$("#siblingsspecific").click(function(){
  $("#child_B").siblings('#child_A').css('background','red')
});
$("#siblings").click(function(){
  $("#child_C").siblings().css('background','red')
});
$("#next").click(function(){
  $("#child_B").next().css('background','red')
});
$("#nextAll").click(function(){
  $("#child_B").nextAll().css('background','red')
});
$("#nextUntil").click(function(){
  $("#child_B").nextUntil('.until').css('background','red')
});
$("#prev").click(function(){
  $("#child_B").prev().css('background','red')
});
$("#prevAll").click(function(){
  $("#child_B").prevAll().css('background','red')
});
$("#prevUntil").click(function(){
  $("#child_D").prevUntil('.prevuntil').css('background','red')
});
$("#A").click(function(){
  $("#box20").text("A");
});
$("#B").click(function(){
  $("#box20").text("B");
});
$("#C").click(function(){
  $("#box20").text("C");
});
$("#D").click(function(){
  $("#box20").text("D");
});

});
