var swiper = new Swiper('.swiper-container-menu', {
  slidesPerView: 'auto',
  loop: true,
  navigation: {
    nextEl: '.menu_next',
    prevEl: '.menu_prev',
  },
	spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination-menu',
    clickable: true,
  },
});
$(".cuantminus").click(function(){
  if($(this).siblings("input").val()>0){
    $(this).siblings("input").val(+$(this).siblings("input").val()-1)
  }
})
$(".cuantplus").click(function(){
    $(this).siblings("input").val(+$(this).siblings("input").val()+1)
})
var swiper = new Swiper('.swiper-container-otziv', {
  slidesPerView: 'auto',
  loop: true,
  navigation: {
    nextEl: '.otziv_next',
    prevEl: '.otziv_prev',
  },
	spaceBetween: 40,
  pagination: {
    el: '.swiper-pagination-otziv',
    clickable: true,
  },
});
var menu = 0;
$(".open_menu").click(function(){
  if(menu==0){
    $(".span2").hide()
    $(".span1").css("transform", "rotate(45deg)")
    $(".span3").css("transform", "rotate(-45deg)")
    $(".span3").css("margin-top", "-7px")
    $(".header_conr_right").slideDown(500)
    menu=1
  }
  else{
    $(".span2").show()
    $(".span1").css("transform", "rotate(0)")
    $(".span3").css("transform", "rotate(0)")
    $(".span3").css("margin-top", "0")
    $(".header_conr_right").slideUp(500)
    menu=0
  }
})
var listmenu = 0
$(".menu_page_cont_flex_list_title").click(function(){
  if(listmenu==0){
    $(".list_menu").slideDown(500)
    listmenu=1
  }
  else{
    $(".list_menu").slideUp(500)
    listmenu=0
  }
})
