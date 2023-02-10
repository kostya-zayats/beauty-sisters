$(document).ready(function(){
  $('.slick-slider').slick({
    arrows: false
  });

  $('.slick-slider-action-prev').click(function(){
    $(".slick-slider").slick('slickPrev');
  });

  $('.slick-slider-action-next').click(function(){
    $(".slick-slider").slick('slickNext');
  });

  $('.nav-open-btn').click(function(){
    $(this).toggleClass('opened');
    $('.nav-actions').toggleClass('opened');
  });
});