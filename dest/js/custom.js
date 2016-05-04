(function(){
	"use strict";

	//slider
	$(window).load(function() {
    	$('.flexslider').flexslider({
    		animation: "slide",
    		slideshowSpeed: 30000, 
    		useCSS: true,
    		controlNav: false,               
			directionNav: false,
  		});
  	});
})(jQuery);