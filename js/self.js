$('.nav-self>ul>li>a').tap(function () { 
  $(this).parent().addClass('active-hide')
  $(this).parent().siblings().removeClass('active-hide')
 })

$('.hide-self li').tap(function () {
  $('.nav-self>ul>li').removeClass('active-hide')
})