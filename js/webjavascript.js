$(document).ready(function(){
	$(".fadein").delay(300).animate({opacity: 1 }, 1200);


  $('#aboutone.aboutsubtitle').click(function(e){    
  $('#two, #three').fadeOut(10, function(){
      $('#one').fadeIn('slow');
  });
});
  $('#abouttwo.aboutsubtitle').click(function(e){    
  $('#one, #three').fadeOut(10, function(){
      $('#two').fadeIn('slow');
  });
});
  $('#aboutthree.aboutsubtitle').click(function(e){    
  $('#one, #two').fadeOut(10, function(){
      $('#three').fadeIn('slow');
  });
});

$('#aboutone.aboutsubtitle').on('click', function(e){
  e.preventDefault();
  $(this).css('border-color', '#e29589', 
  'border-bottom-width', '2px',
  'border-bottom-style', 'solid',
    );
});

});



    // $('#btn-bk').click(function(e){    
    //     $('#bank, #btn-bk').fadeOut('slow', function(){
    //         $('#fancy, #btn').fadeIn('slow');
    //     });
    // });


$(function() {
  $('.smoothScroll').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 400); // The number here represents the speed of the scroll in milliseconds
        return false;
      }
    }
  });
});

