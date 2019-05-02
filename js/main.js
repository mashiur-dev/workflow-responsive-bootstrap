var $ = jQuery.noConflict();

/*=====================================
*********** Proloader script ***********
======================================*/

jQuery(window).load(function() {
 // executes when complete page is fully loaded, including all frames, objects and images
    $("div#preloader").fadeOut('slow',function(){$(this).remove();});
});


/*======================================================
*********** Script after all documents ready ***********
=======================================================*/
jQuery(document).ready(function($){
    

    
    /*=============================
    ***** Smooth scroll *****
    ==============================*/
    $('.navbar a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top - $('.navbar').height()
            }, 600);
            return false;
          }
        }
    });
    
    /*=============================
    ***** scroll to top *****
    ==============================*/
    $(window).scroll(function(){
		if ($(this).scrollTop() > 200) {
			$('#wfscrollto-top').fadeIn();
		} else {
			$('#wfscrollto-top').fadeOut();
		}
	});
    //Click event to scroll to top
	$('#wfscrollto-top').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
    
    
    /*=============================
    ***** main menu fix effect on scroll *****
    ==============================*/
    var windowWidth = $(window).width();
    if(windowWidth > 767 ){
        $(window).on('scroll', function(){
            if( $(window).scrollTop()>400 ){
                $('.navbar').addClass('animated fadeInDown');
                //$('.navbar').removeClass('main-nav');
            } else {
                $('.navbar').removeClass('animated fadeInDown');
                //$('.navbar').addClass('main-nav');
            }
        });
        
    }
    
    
    
    /*=======================
    ***** welcome slider *****
    ========================*/
    //Function to animate slider captions 
	function WfcdoAnimations( elems ) {
		//Cache the animationend event in a variable
		var WfanimEndEv = 'webkitAnimationEnd animationend';
		
		elems.each(function () {
			var $this = $(this),
				$animationType = $this.data('animation');
			$this.addClass($animationType).one(WfanimEndEv, function () {
				$this.removeClass($animationType);
			});
		});
	}
	//Variables on page load 
	var $WfMainCarousel = $('#carousel-main-slider'),
		$WffirstAnimatingElems = $WfMainCarousel.find('.item:first').find("[data-animation ^= 'animated']");
		
	//Initialize carousel 
	$WfMainCarousel.carousel();
	//Animate captions in first slide on page load 
	WfcdoAnimations($WffirstAnimatingElems);
	//Pause carousel  
	$WfMainCarousel.carousel('pause');
	//Other slides to be animated on carousel slide event 
	$WfMainCarousel.on('slide.bs.carousel', function (e) {
		var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
		WfcdoAnimations($animatingElems);
	});
    
    
    /*=============================
    ***** MixItUp *****
    ==============================*/
	$('#muportfolio').mixItUp();
    
    //Active prettyPhoto
    $("img[rel^='prettyPhoto']").prettyPhoto();
    
    
    /*=============================
    ***** Active animation when element on viewport *****
    ==============================*/
    $('.animated').waypoint(function() {
        $(this).addClass( $(this).data('animated') );
    },{ offset: 'top-in-view' });
    
    
    /*=============================
    ***** Project couting *****
    ==============================*/
    
    var countCl = $('#project_counting_area'),
        countClOffset = countCl.offset().top/2,
        countClDocument = $(document);
    countClDocument.on('scroll', function(){
        if( countClDocument.scrollTop() > countClOffset  && countCl.hasClass('notscrolled') ){
            $('.count').counterUp({
                delay: 10, // the delay time in ms
                time: 1000 // the speed time in ms
            });
            countCl.removeClass('notscrolled');
    
        }
    });
    
   /* 
    $('.count').counterUp({
        delay: 10, // the delay time in ms
        time: 1000 // the speed time in ms
    });*/
   
    
    

});




