$(document).ready(function(){
  $('.project-slider').slick({
    autoplay: false,
    arrows: false,
    slidesToShow: 3,
    responsive: [
    {
    	breakpoint: 800,
    	settings: {
    		slidesToShow: 2
    	}
    },
    {
    	breakpoint: 500,
    	settings: {
    		slidesToShow: 1
    	}
    }
    ]
  });

  $('.steps').slick({
    arrows: false,
    slidesToShow: 3,
    responsive: [
    {
    	breakpoint: 700,
    	settings: {
    		slidesToShow: 2
	    }
	  },
   	{
    	breakpoint: 500,
    	settings: {
    		slidesToShow: 1
    	}
    }
    ]
  });

  $('.project__images').fotorama();
});