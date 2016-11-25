;(function($, window, undefined) {

	"use strict";

	jQuery(document).ready(function ($) {



		// Owl Carouse Testimonials

		 var owl = $("#owl-demo");
 
		  owl.owlCarousel({
      		
      		pagination : true,
    		paginationNumbers: false,
      		autoPlay: 5000, //Set AutoPlay to 5 seconds
		    items : 1, //10 items above 1000px browser width
		    itemsDesktop : [1000,1], //5 items between 1000px and 901px
		    itemsDesktopSmall : [900,1], // betweem 900px and 601px
		    itemsTablet: [600,1], //2 items between 600 and 0
		    itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
		  });

		  var owl = $("#owl-blog");
 
		  owl.owlCarousel({

		  	  pagination: false,
		  	  autoPlay: 3000, //Set AutoPlay to 3 seconds
		      items : 5, //10 items above 1000px browser width
		      itemsDesktop : [1000,4], //5 items between 1000px and 901px
		      itemsDesktopSmall : [900,2], // betweem 900px and 601px
		      itemsTablet: [600,1], //2 items between 600 and 0
		      itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
		  });

		  var owl = $("#owl-similar");
 
		  owl.owlCarousel({
      		
      		pagination : false,
    		paginationNumbers: false,
      		autoPlay: 5000, //Set AutoPlay to 5 seconds
		    items : 4, //10 items above 1000px browser width
		    itemsDesktop : [1000,3], //5 items between 1000px and 901px
		    itemsDesktopSmall : [900,2], // betweem 900px and 601px
		    itemsTablet: [600,1], //2 items between 600 and 0
		    itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
		  });

		  var owl = $("#owl-clients");
 
		  owl.owlCarousel({

		  	  pagination: true,
		  	  autoPlay: 3000, //Set AutoPlay to 3 seconds
		      items : 6, //10 items above 1000px browser width
		      itemsDesktop : [1000,4], //5 items between 1000px and 901px
		      itemsDesktopSmall : [900,3], // betweem 900px and 601px
		      itemsTablet: [600,2], //2 items between 600 and 0
		      itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
		  });
		 
		  // Custom Navigation Events
		  $(".next").on('click' ,function(){
		    owl.trigger('owl.next');
		  })
		  $(".prev").on('click' ,function(){
		    owl.trigger('owl.prev');
		  })
		  $(".play").on('click', function(){
		    owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
		  })
		  $(".stop").on('click', function(){
		    owl.trigger('owl.stop');
		  })






	



      


	


	



	

		
		


	});

})(jQuery, window);
