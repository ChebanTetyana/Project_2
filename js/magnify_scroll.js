'use strict'

$('.galery img').click(function() {
    let src = $(this).attr('src');
    $('.popup img').attr('src',src);
    $('.popup').fadeIn();    
});
$('.close').click(function() {
    $('.popup').fadeOut();
});

$('.galery__add img').click(function() {
    let src = $(this).attr('src');
    $('.popup img').attr('src',src);
    $('.popup').fadeIn();    
});
$('.close').click(function() {
    $('.popup').fadeOut();
});

//--------------Scroll-----------------

let $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});