function initializeSlider() {
	if (window.matchMedia('(max-width: 425px)').matches) {
		$('.section_6_lazyload_wrapper').slick({
			arrows: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 1000,
			infinite: true,
			dosts: false,
		});
	} else {
		$('.section_6_lazyload_wrapper').slick({
			arrows: false,
			slidesToShow: 3,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 1000,
			infinite: true,
			dosts: false,
		});
	}
}

initializeSlider();
window.addEventListener('resize', initializeSlider);
