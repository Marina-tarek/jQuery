/// <reference types="../@types/jquery" />


$(".openSideList").on("click",function(){
    $(".leftMenu").animate({width:"22%"},1000)
    $(".homeSection").animate({width:"50%"},1000)
})
$(".closeBtn").on("click",function(){
    $(".leftMenu").animate({width:"0"},1000)
    $(".homeSection").animate({width:"100%"},1000)
})

$(".singerSection h3").one("click",function(){
    $(".singerDesc").slideToggle(2000)
})