/// <reference types="../@types/jquery" />
// loading screen
$(function () {
    console.log("hello")
    $(".loader").fadeOut(1000, function () {
        $(".loading").slideUp(1000, function () {
            $('body').css('overflow', 'auto')
            $('.loading').remove()
        })
    })
})
// smooth in scroll
// 1- ====$(document).on('click', 'a[href^="#"]', function (event) {
//     event.preventDefault();
//     $('html, body').animate({scrollTop: $($.attr(this, 'href')).offset().top}, 2000); });
// 2-
$('a').on("click", function (e) {
    let aHref = e.target.getAttribute("href")
    let sectionOffset = $(aHref).offset().top

    $('body,html').animate({ scrollTop: sectionOffset }, 2000)
})


// side menu
$(".openSideList").on("click", function () {
    $(".leftMenu").animate({ width: "22%" }, 1000)
    $(".homeSection").animate({ width: "50%" }, 1000)
})
$(".closeBtn").on("click", function () {
    $(".leftMenu").animate({ width: "0" }, 1000)
    $(".homeSection").animate({ width: "100%" }, 1000)
})
// singer section 
$(".singerSection h3").one("click", function (e) {
    // e.target==this
    $(e.target).next().slideToggle(500)
    $(".singerDesc").not($(e.target).next()).slideup(500)
    // $(e.target).siblings().slideUp(500)

})
// $(".leftMenu a").on("click", function (e) {
//     $(e.target).addClass("active");
//     $(e.target).siblings().removeClass("active")
// })

