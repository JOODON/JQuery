$(function (){
  $("h1").css('color','blue');

  // $("#typo .inner").css('text-decoration',"underline");//자식 선택자를 선택할때는 공백
  //
  // $("#typo .inner").css('border-bottom',"5px solid red");//아래 보더를 5px 색깔은 레드
  //
  // $("#typo .inner").css("transform","rotate(45deg)");//각도를 45도 기우리기
  //
  // $("#typo .inner").css("opacity","0.5");//글씨 투명도 줄이기

  // $("#typo .inner").css({
  //   'text-decoration':"underline",
  //   'border-bottom':"5px solid red",
  //   "transform":"rotate(45deg)",
  //   "opacity":"0.5"
  // });

  $("#typo .inner").css({
    textDecoration:"underline",
    borderBottom:"5px solid red",
    transform:"rotate(45deg)",
    opacity:"0.5"
  });
});

//제이쿼리의 기본 문법 $(`선택자`).css(`속성`,`값`);
