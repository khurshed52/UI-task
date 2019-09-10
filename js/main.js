
(function ($) {
    "use strict";

 $('#hamburger').click(function() {
      $('.menu').slideToggle(300);
    });

    $('.venobox').venobox({
      titleattr: 'data-title'
  });

  $('.venobox_custom').venobox({
    framewidth: '600px',       
    frameheight: '400px',      
    border: '5px',            
    bgcolor: '#5dff5e',       
    titleattr: 'data-title',   
    numeratio: false,           
    infinigall: false         
});   

sal({
  threshold: 1,
  once: false,
});

    /*[ slider]
    ===========================================================*/
    $('#fixSlider').owlCarousel({
        loop: true,
        margin: 20,
        autoplay: true,
        nav:true,
        navText: [
          '<i class="fa fa-chevron-left"></i>',
          '<i class="fa fa-chevron-right"></i>'
        ],
    
        dots:false,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 2
          },
          1000: {
            items: 5,
            nav:true
          }
        }
      });

   /*[ top]
    ===========================================================*/

$(window).scroll(function() {
  if ($(this).scrollTop() >= 50) {       
      $('#return-to-top').fadeIn(200);   
  } else {
      $('#return-to-top').fadeOut(200);   
  }
});
$('#return-to-top').click(function() {      
  $('body,html').animate({
      scrollTop : 0                     
  }, 500);
});

})(jQuery);