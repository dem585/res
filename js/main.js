$(function(){
	$('.slider__items').slick({
	prevArrow:'#slider-btn__left',
	nextArrow:'#slider-btn__right',
  	infinite: false,
  	slidesToShow: 3,
  	slidesToScroll: 1,
  	responsive: [
            {
                breakpoint: 910,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
 
	});



	$('.header__menu-m').on('click',function(){
		$('.menu-pk').toggleClass('menu__pk--active');
		$('.menu-mb').toggleClass('menu__mb--active');
	});
	$(window).ready(function(){
		if($(window).width() < 1020){
			$('.header__menu').addClass('menu-mb');	
			$('.header__menu').removeClass('menu-pk');
			$(".header__menu").removeClass('menu__pk--active');	
			
		}
	
	});
	$(window).ready(function(){
		if($(window).width() > 1020){
			$('.header__menu').addClass('menu-pk');	
			$('.header__menu').removeClass('menu-mb');
			$(".header__menu").removeClass('menu__mb--active');	
					
		}
				
	});



  
});



