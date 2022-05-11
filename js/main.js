// $(function (){
//   $("h1").css('color','blue');

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

//   $("#typo .inner").css({
//     textDecoration:"underline",
//     borderBottom:"5px solid red",
//     transform:"rotate(45deg)",
//     opacity:"0.5"
//   });
//

//제이쿼리의 기본 문법 $(`선택자`).css(`속성`,`값`);

// 실행 지점 제어  on메서드를 사용.
// $(function () {
//   $("h1").css('color','blue');
//   $(`#typo`).on(`mouseover`,function (){
//   $(`#typo`).css(`background-color`,`green`)
//   });
//   $(`#typo`).on(`mouseout`,function (){
//     $(`#typo`).css(`background-color`,`red`)
//   });
// });

//


$(function () {
  $("h1").css('color','blue');
  $(`#typo, h1`).mouseover(function (){
    $(this).css(`background-color`,`green`)
  })
    .mouseout(function (){
      $(this).css(`background-color`,`red`)
    });
});
// 이벤트 타입 해당시점
// key down :요소에 초점을 맞춘상태에서 키보드의 키를 눌렀을떄
// key up:요소에 초점을 맞춘상태에서 키보드의 키를 땜
// focus:요소에 포커스가 일치했을떄 (포커스가 있는 요소만)
// blur:포커스를 잃어버렸을때
// change:입력 내용이 변경되었을떄
// resize:크기가 다시 성절했을떄
// scorll:요소를 스크롤 했을때
