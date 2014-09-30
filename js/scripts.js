//load first banner item
$(function(){
  $('.item').first().addClass('active');
})

//Smooth Anchor Link
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


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


//Full Height
/*
$(function(){
    $('.item') .css({'height': (($(window).height()))+'px'});
    $(window).resize(function(){
        $('.item') .css({'height': (($(window).height()))+'px'});
    });
});
*/