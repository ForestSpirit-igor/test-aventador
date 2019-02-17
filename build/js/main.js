jQuery(function($){

  $('.carousel-st').owlCarousel({
    loop            : true,
    nav             : true,
    navText         : false,
    dots            : false,
    items           : 1,
    smartSpeed      : 500,
    autoplay        : false,
    autoplayTimeout : 5000,
    mouseDrag       : false
  });

  $(".open-fancy").fancybox({
    fitToView       : false,
    autoSize        : false,
    closeClick      : false
  });

});

