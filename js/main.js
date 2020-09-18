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

$(document).ready(function() {
	$('.gallery__inner').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
		
	});
});


function validation(){
	var form = document.getElementById("form");
	var email = document.getElementById("email").value;
	var text = document.getElementById("text-email");
	var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
		if (email.match(pattern)) {
			form.classList.add("valid");
			form.classList.remove("invalid");
			text.innerHTML ="";
			text.style.color = "green"
		}
		else{
			form.classList.remove("valid");
			form.classList.add("invalid");
			text.innerHTML ="Ведите валидный email";
			text.style.color = "red"
		}

		if (email == "") {
			form.classList.remove("valid");
			form.classList.remove("invalid");
			text.innerHTML ="";
			text.style.color = "red"
		}
}


