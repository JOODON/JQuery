  //기본적인 선택자 선택 및 css선택
  $("h1").css({"color":"red"});
  $("#typo .inner").css({
  "font-size":"200px",
  "background":"#ada4e3",
    "color":"#3f585d"
  });
  //이벤트 속성 마우스를 올리거나 땔 경우
  $("#typo .inner").on('mouseover',function (){
    $(this).css({"background":"#ec7897"});
    });

    $("#typo .inner").stop(true).on('mouseout',function (){
      $(this).css({"background":"#b1ee9d"});
    });
    //클릭 할경우 애니메이션 실행
    $("#typo .inner").click(function (){
    $(this).stop(1).animate({opacity: 0,fontSize:'0px'},1500,"swing",
      function (){
        (this).animate({opacity: 1,fontSize:'200px'},500)
      });
    });


