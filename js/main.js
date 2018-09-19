// Get height of screen for header
$(document).ready(function(){
    $('.header').height($(window).height());
});

// Get height of screen for container sizing
$(document).ready(function(){
    $('.container').height($(window).height());
});


// Scroll to id
$(".navbar a").click(function(){
    $("body,html").animate({
        scrollTop:$("#" + $(this).data('value')).offset().top
    },1000)

});

// Header button -> scroll down
$(".header button").click(function(){
    $("body,html").animate({
        scrollTop:$("#" + $(this).data('value')).offset().top
    },1000)

});
