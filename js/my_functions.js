$(document).ready(function(){

// --------------Back-to-top
if ($('.back-to-top').length) {
    var scrollTrigger = 800;
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('.back-to-top').fadeIn();
            } else {
                $('.back-to-top').fadeOut();
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('.back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}
// --------------Slider
$('.banner').slick({
    autoplay:true,
    autoplaySpeed:5000,
    arrows:false,
    fade:true,
    touchMove:true,
    touchThreshold:5,
    dots:true
});

// --------------Search
$('.icon-search').click(function(){

    if($('.icon-search').hasClass('fa-search')){
       $('.icon-search'). removeClass('fa-search').addClass('fa-close');
       $('#bg-form').fadeIn('400'); 
       $('#searchform').fadeIn('400'); 
   }else if ($('.icon-search').hasClass('fa-close')) {
    $('.icon-search'). removeClass('fa-close').addClass('fa-search');
    $('#bg-form').fadeOut('400'); 
    $('#searchform').fadeOut('400'); 
}
});

// --------------Meun Retratil
$('.menu-retract').click(function(){
    if($('.menu-retract').hasClass('fa-bars')){
        $('.menu-retract').removeClass('fa-bars').addClass('fa-close').css({color: '#fff'});
        $('.menu').fadeIn('400');
        $('.bg-menu-retract').css({
            transform: 'translateX(0%)'
        });
    }else if ($('.menu-retract').hasClass('fa-close')) {
        $('.menu-retract').removeClass('fa-close').addClass('fa-bars').css({color: '#000'});
       $('.menu').fadeOut('400');
       $('.bg-menu-retract').css({
        transform: 'translateX(100%)'
    });
   }
});
});