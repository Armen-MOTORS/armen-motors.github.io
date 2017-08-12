;
// anchor
$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});



// SECTION SLIDER

$(".section-featured-articles-bxslider").bxSlider({
    slideSelector: $(".section-featured-articles-slide"),
    infiniteLoop: false,
    hideControlOnEnd: true,
    slideMargin: 30,
    slideWidth: 370,
    maxSlides: 3,
    moveSlides: 3,
    pager: false
});

$(".section-featured-articles-slide").mouseenter(function () {
    $(this).find(".slide-active").css('opacity', '1')
});

$(".section-featured-articles-slide").mouseleave(function () {
    $(this).find(".slide-active").css('opacity', '0')
});