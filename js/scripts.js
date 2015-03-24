//load first banner item
$(function(){
  $('.item').first().addClass('active');
})


//animate elements
$(window).scroll(function() {
    $('#object').each(function(){
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+800) {
            $(this).addClass("slideUp");
        }
    });
});

//Form Success Pop Up Message
$('.pop-message').on('click', function() {
    $(this).hide();
});

//Full Height
/*
$(function(){
    $('.item') .css({'height': (($(window).height()))+'px'});
    $(window).resize(function(){
        $('.item') .css({'height': (($(window).height()))+'px'});
    });
});
*/
