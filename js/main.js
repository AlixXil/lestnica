$(document).ready(function(){
  $('.project-slider').slick({
    autoplay: true,
    arrows: false,
    slidesToShow: 3
  });
  $('.project__images').fotorama();
});