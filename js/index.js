
$('.choice>ul>li>a').tap(function () {
  $(this).parent().siblings().removeClass('active-li')
  $(this).parent().addClass('active-li')
  $(this).parent().siblings().find('a').removeClass('active')
  $(this).addClass('active')
  var ind = $(this).parent().index()
  if(ind === 0){
    $('.main').css('display','block')
    $('.hudong').css('display', 'none')
  }
  if (ind === 1) {
    $('.main').css('display', 'none')
    $('.hudong').css('display', 'block')
  }
})

$('.fenlei>ul>li').tap(function () { 
  $(this).addClass('active-content')
  $(this).siblings().removeClass('active-content')
  var indFen = $(this).index()
    $('.content>ul>li').eq(indFen).addClass('activeShow')
  if(indFen === 0){
    $('.content>ul>li').addClass('activeShow')
  }else{
    $('.content>ul>li').eq(indFen-1).addClass('activeShow')
    $('.content>ul>li').eq(indFen-1).siblings().removeClass('activeShow')
  }
 })

$('.banner>ul:nth-child(2)>li').swipe(function () {
  var ind1 = $(this).index()
  $(this).siblings().removeClass('active-img')
  $(this).addClass('active-img')
})

$('.footer>ul>li>a').tap(function () {
  $(this).parent().siblings().find('a').removeClass('active-a')
  $(this).addClass('active-a')
})