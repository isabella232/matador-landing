	//HTML5 MARKUP
	document.createElement('article');
    document.createElement('section');
    document.createElement('aside');
    document.createElement('hgroup');
    document.createElement('nav');
    document.createElement('header'); 
    document.createElement('footer');
    document.createElement('figure');
    document.createElement('figcaption'); 

	// JQUERY DOCUMENT READY FUNCTIONS
	$(document).ready(function()
	{
			
		//WOW
		new WOW().init();
	
		// SCROLL FUNCTIONS
		$('.scroll').click(function(){
		    $('html, body').animate({
		        scrollTop: $( $.attr(this, 'href') ).offset().top
		    }, 500);
		    
		    $('#overlay').hide();
			$('body').removeClass('noscroll');
			$('.c-hamburger').removeClass('is-active');
			$('#header').removeClass('transparent');
			$('#logo').show();
			$('#logoAlt').hide();
			action = 1;
					    
		});
		   			
	});
	
	// MOBILE BUTTON
	(function() {
		"use strict";
		var toggles = document.querySelectorAll(".c-hamburger");
		
		for (var i = toggles.length - 1; i >= 0; i--) {
			var toggle = toggles[i];
			toggleHandler(toggle);
		};
	
		function toggleHandler(toggle) {
			toggle.addEventListener( "click", function(e) {
				e.preventDefault();
				(this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
			});
		}
		
	})();
	
	// MOBILE MENU
	var action = 1;
	
	$('.c-hamburger').on('click', showmenu);
	
	function showmenu() {
		if( action == 1 ) { 
			$('#logo').hide();
			$('#logoAlt').show();
			$('#overlay').fadeIn();
			$('#header').addClass('transparent');
			$('body').addClass('noscroll');
			action = 2;
		} else {
			$('#logo').show();
			$('#logoAlt').hide();
			$('#overlay').fadeOut();
			$('#header').removeClass('transparent');
			$('body').removeClass('noscroll');
			action = 1;
		}
	}
	
	// HEADER FRUNCTIONS
	var didScroll;
	var lastScrollTop = 0;
	var delta = 5;
	var navbarHeight = $('#header').outerHeight();
	
	$(window).scroll(function(event){
	    didScroll = true;
	});
	
	setInterval(function() {
	    if (didScroll) {
	        hasScrolled();
	        didScroll = false;
	    }
	}, 250);
	
	function hasScrolled() {
	    var st = $(this).scrollTop();
	    
	    if(Math.abs(lastScrollTop - st) <= delta)
	        return;
	    
	    if (st > lastScrollTop && st > navbarHeight){
	        $('#header').removeClass('nav-down').addClass('nav-up');
	    } else {
	        if(st + $(window).height() < $(document).height()) {
	            $('#header').removeClass('nav-up').addClass('nav-down');
	        }
	    }
	    
	    lastScrollTop = st;
	}
	
	var distance = $('div').offset().top + 200,
	    $window = $(window);
	
	$window.scroll(function() {
	    if ( $window.scrollTop() >= distance ) {
	        $('#header').addClass('solid');
	    } else {
		    $('#header').removeClass('solid');
	    }
	});