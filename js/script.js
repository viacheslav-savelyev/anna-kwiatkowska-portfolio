window.addEventListener("DOMContentLoaded", function () {

	// burger menu

	const burger = document.querySelector('.burger'),
		burgerWrap = document.querySelector('#burger-wrap');

	burger.addEventListener('click', () => {
		burger.classList.toggle('burger__active');
		burgerWrap.classList.toggle('burger-wrap__active');
	});


	// SLICK SLIDER

	$(document).ready(function () {
		$('.slider-line').slick({
			dots: false,
			infinite: false,
			speed: 300,
			slidesToShow: 3,
			slidesToScroll: 1,
			adaptiveHeight: false,
			swipe: false,
			responsive: [
				{
					breakpoint: 769,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
						swipe: true,
					}
				},
				{
					breakpoint: 588,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						swipe: true,
					}
				}
			]
		});
	});


});