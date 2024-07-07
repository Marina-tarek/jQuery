/// <reference types="../@types/jquery" />
// loading screen
$(function () {
    console.log("hello")
    $(".loader").fadeOut(1000, function () {
        $(".loading").slideUp(1000, function (e) {
            $('body').css('overflow', 'auto')
            $('.loading').remove()
        })
    })
})
//====> smooth in scroll
// 1- ====$(document).on('click', 'a[href^="#"]', function (event) { event.preventDefault();
//     $('html, body').animate({scrollTop: $($.attr(this, 'href')).offset().top}, 2000); });
// 2-
$('a[href^="#"]').on("click", function (e) {
    let aHref = e.target.getAttribute("href")
    let sectionOffset = $(aHref).offset().top
    $('body,html').animate({ scrollTop: sectionOffset }, 2000)
})

//====> side color
$('aside i').on("click", function () {
    $('.sidebar-color').animate({ width: 'toggle', paddingInline: 'toggle' }, 500)
    ///// another method give sidebar-color outer div to work on width only
})
$(".color-box").on("click", function (e) {
    let currentColorBg = $(e.target).css("background-color")   //color
    $("h2,h3,span,a,.singerDesc").css('color', currentColorBg)
})
//====> side menu
$(".openSideList").on("click", function () {
    $(".leftMenu").animate({ width: "22%" }, 500)
    $(".homeSection").animate({ width: "50%" }, 500)
    $("#duration .container").animate({ width: "50%" }, 500)
    $(".time").animate({ padding: "10" }, 500)
})
$(".closeBtn").on("click", function () {
    $(".leftMenu").animate({ width: "0" }, 500)
    $(".homeSection").animate({ width: "100%" }, 500)
    $("#duration .container").animate({ width: "100%" }, 500)
    $(".time").animate({ padding: "50" }, 500)
})
//====> singer section 
$(".singerSection h3").on("click", function slideDown(e) {
$(e.target).next().slideToggle(500);
$(".singerDesc").not($(e.target).next()).slideUp(500)
})


//====> duration section
function makeTimer() {
    let endTime = new Date("9 february 2025 8:00:00");
    endTime = (Date.parse(endTime) / 1000);
    let now = new Date();
    now = (Date.parse(now) / 1000);
    let timeLeft = endTime - now;
    let days = Math.floor(timeLeft / (24 * 60 * 60));
    let hours = Math.floor((timeLeft - (days * (24 * 60 * 60))) / 3600);
    let minutes = Math.floor((timeLeft - (days * (24 * 60 * 60)) - (hours * 3600)) / 60);
    let seconds = Math.floor((timeLeft - (days * (24 * 60 * 60)) - (hours * 3600) - (minutes * 60)));

    $(".days").text(days)
    $(".hours").text(hours)
    $(".minutes").text(minutes)
    $(".seconds").text(seconds)
}
setInterval(function () { makeTimer(); }, 1000);



// ====> chars Number (textarea)
$("textarea").on("keyup", function (e) {
    let maxlength = 100
    // let content=$('textarea').val()  to know value (what writen in textare)
    let charsLenght = $('textarea').val().length  ///to know lenght (number)
    let charsRemain = maxlength - charsLenght
    // console.log(charsRemain);
    if (charsRemain == 0) {
        $("#charsRemain").text(`your available character finished`)
    } else {
        $("#charsRemain").html(charsRemain)
    }
})
