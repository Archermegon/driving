$('.footer>ul>li>a').tap(function () { 
  $(this).parent().siblings().find('a').removeClass('active-a')
  $(this).addClass('active-a')
  $('.footer').css('display','none')
  $('.search-city').css('display', 'block')
 })

$('.search-city>.bot>.title-bot>a').eq(0).tap(function () { 
  $('.footer').css('display', 'block')
  $('.search-city').css('display', 'none')
 })

$('.search-city>.bot>.title-bot>a').eq(2).tap(function () {
  $('.footer').css('display', 'block')
  $('.search-city').css('display', 'none')
})

$('.search-city>.bot>.bot-content>ul:nth-child(1)>li').tap(function () {  
  $(this).addClass('active-bot')
  $(this).siblings().removeClass('active-bot')
  var ind1 = $(this).index()
  $('.search-city>.bot>.bot-content>ul:nth-child(2)>li').eq(ind1).addClass('active-show')
  $('.search-city>.bot>.bot-content>ul:nth-child(2)>li').eq(ind1).siblings().removeClass('active-show')
}) 





