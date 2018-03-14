//第一页，12s以后让文字消失
$('.page1-p2').css('display','none');
$('.page1-btn').css('display','none');
setTimeout(function(){
    $('.page1-p').css('display','none');
    $('.page1-p2').css('display','block')
},4000);

setTimeout(function(){
    $('.page1-btn').css('display','block');
},8000);