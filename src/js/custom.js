(function(){
	"use strict";

	//slider

	$(window).load(function() {
    	$('.flexslider').flexslider({
    		animation: "slide",
    		slideshowSpeed: 3000,
        controlNav: false,              
        directionNav: false,  
  		});
  	});

  	//carousel

  	$(".owl-carousel").owlCarousel({
	  	loop:true,
	  	items:4,
	  	autoplay:false,
		autoplayTimeout:5000,
		autoplayHoverPause:true,
		responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	        },
	        768:{
	            items:2,
	        },
	        1024:{
	            items:4,
	        }
	    }
  	});

  	//set same height

  	    var highestBox = 0;
        var highestBox1;
        $('.services-in img').each(function(){  
                if($(this).height() > highestBox){  
                highestBox = $(this).height(); 
                highestBox1 = highestBox;
		        }
		   	return highestBox1;
    	}); 

    	$('.services-in img').height(highestBox1);

    //set same width

    	var minwidth = 100;
    	var minwidth1; 

    	$('.services-in img').each(function(){  
                if($(this).width() < minwidth){  
                minwidth = $(this).width(); 
                minwidth1 = minwidth;
		        }
		   	return minwidth1;
    	}); 

    	$('.services-in img').width(minwidth1);

})(jQuery);

