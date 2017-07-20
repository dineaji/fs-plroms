/*
 *  File: main.js 
 *  created: 20-07-2017 
 *  Purpose: main js for fs promotion page
 *  plugins : jquery, slickcarousel, bootstrap
 */

(function(window,$){
var isLoaded = false;
var carouselElem = ".carousel-content"
var promoPage = {

	initCarousels: function(el){
		var self=this,
           	$sliderElem = $(el);
        
        _.each($sliderElem,function(item){
            if(!$(item).hasClass('slider-active')){
            	self.applyCarousel($(item));
            	$(item).addClass('slider-active')
            }
        })
	},
	applyCarousel: function(curElem){
		if(!curElem || typeof $.fn.slick!="function") return false;

		var elemIndex = $(curElem).data('maxSlide') || 1;
		var centerModeBool = $(curElem).data('centerMode') || false;
		var autoPlayBool = $(curElem).data('autoPlay') || false;

		$(curElem).slick({
		  infinite: false,
		  autoplay: autoPlayBool,
		  slidesToShow: elemIndex,
		  slidesToScroll: elemIndex,
		   responsive: [
		    {
		      breakpoint: 980,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1,
		        // centerMode: centerModeBool
		      }
		    },
		    {
		      breakpoint: 767,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        centerMode: centerModeBool
		      }
		    }
		  ]
		});
	},
	init: function(){
		if(typeof _!="function" || typeof $!="function" || isLoaded) return;
		var self = this;
		self.initCarousels(carouselElem);
		isLoaded = true;
	}
}

promoPage.init();

$(function(){
	promoPage.init();
})


})(this,jQuery)


