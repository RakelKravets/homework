(function () {

	// Бургер

	document.addEventListener('click', burgerInit)

	function burgerInit(e) {

			const burgerIcon = e.target.closest('.burger-icon')
			const burgerNavLink = e.target.closest('.nav_link')

			if (!burgerIcon && !burgerNavLink) return
			if (document.documentElement.clientWidth > 1000) return

			if (!document.body.classList.contains('body--opened-menu')) {
					document.body.classList.add('body--opened-menu')
			} else {
					document.body.classList.remove('body--opened-menu')
			}

	}


	//Слайдер-Портфолио

	new Swiper( '.portfolio-swiper', {
		
		spaceBetween: 30,
		slidesPerView: 1,
		
		loop: false,
		centeredSlides: false,

		navigation: {
			nextEl: '.portfolio-next',
			prevEl: '.portfolio-prev',
		},

		breakpoints: {

			601:{
				slidesPerView: 1.5,
			},

			901: {
					slidesPerView: 2.5,
			},
			1201: {
					slidesPerView: 3,
			}
	}

	
	});

	//Слайдер-Отзывы

	new Swiper('.testimonials-swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    loop: false, 

    pagination: {
        el: '.testimonials-pagination',
        clickable: true,
    },


		breakpoints: {
			701: {
					slidesPerView: 1.5,
			},

			1201: {
					slidesPerView: 2.5,
			}
	}

});





})()