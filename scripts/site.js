jQuery(document).ready(function() {
	var $win = jQuery(window),
	$body = jQuery('body'),
	$main = jQuery('.main');

	var prev_arrow = '<div class="slick-arrow slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M-4.37114e-07 10L15 1.33974L15 18.6603L-4.37114e-07 10Z" fill="black"/></svg></div>';

	var next_arrow = '<div class="slick-arrow slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M20 10L5 18.6603L5 1.33974L20 10Z" fill="black"/></svg></svg></div>';

    jQuery('.music-list.style-1, .music-list-featured, .videos-list-featured').slick({
        slidesToShow: 1,
		slidesToScroll: 1,
		speed: 300,
		centerMode: true,
		cssEase: "ease-in-out",	
		useTransform: true,
		dots: false,
		fade: true,
		prevArrow: prev_arrow,
		nextArrow:next_arrow,
	});

	jQuery('.music-list.style-2, .music-list.style-3, .music-list.style-4 ').slick({
        slidesToShow: 3,
		slidesToScroll: 1,
		speed: 300,
		centerMode: true,
		cssEase: "ease-in-out",
		useTransform: true,
		dots: false,
		fade: false,
		prevArrow: prev_arrow,
		nextArrow:next_arrow,
	});

	jQuery('.js-videos-list').slick({
        slidesToShow: 1,
		slidesToScroll: 1,
		speed: 300,
		centerMode: true,
		cssEase: "ease-in-out",
		useTransform: true,
		dots: false,
		fade: true,
		prevArrow: prev_arrow,
		nextArrow:next_arrow,
	});
	jQuery('.store-list.style-1, store-list.style-2, store-list.style-4').slick({
        slidesToShow: 3,
		slidesToScroll: 1,
		speed: 300,
		centerMode: true,
		cssEase: "ease-in-out",
		useTransform: true,
		dots: false,
		fade: false,
		prevArrow: prev_arrow,
		nextArrow:next_arrow,
	});
	jQuery('.store-list.style-3').slick({
        slidesToShow: 1,
		slidesToScroll: 1,
		speed: 300,
		centerMode: true,
		cssEase: "ease-in-out",
		useTransform: true,
		dots: false,
		fade: true,
		prevArrow: prev_arrow,
		nextArrow:next_arrow,
	});
});    