$("h1").css({"color":"red"});
$("#typo .inner").css({
  "font-size":"300px",
  "background":"darkslateblue"
});
  $("#typo .inner").on('mouseover',function (){
    $(this).css({"background":"red"});
    });
    $("#typo .inner").on('mouseout',function (){
      $(this).css({"background":"green"});
    });


