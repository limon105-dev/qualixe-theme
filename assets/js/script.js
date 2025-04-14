$(document).ready(function () {
	'use strict';
	// navbar js start ---
	$(window).on('load scroll', function () {
		var scrolling = $(this).scrollTop();
		if (scrolling > 10) {
			$('.navbar').addClass('nav-fixed')
		} else {
			$('.navbar').removeClass('nav-fixed')
		}
	})

	$(".ham-menu").click(function (event) {
		event.stopPropagation();
		$(".nav-link-wrapper").toggleClass("active");
		$(".ham-menu").toggleClass("active");
		$(".nav-link-wrapper-inner").toggleClass("active");
		$("body").toggleClass("active");
	});

	$(".mobile-menu-close-window-btn").click(function (event) {
		event.stopPropagation();
		$(".nav-link-wrapper").toggleClass("active");
		$(".ham-menu").toggleClass("active");
		$(".nav-link-wrapper-inner").toggleClass("active");
		$("body").toggleClass("active");
	});

	// navbar js end ---
})

// btn js ---
// primary btn---
$(function () {
	$('.primary-btn')
		.on('mouseenter', function (e) {
			var parentOffset = $(this).offset(),
				relX = e.pageX - parentOffset.left,
				relY = e.pageY - parentOffset.top;
			$(this).find('span').css({
				top: relY,
				left: relX
			})
		})
		.on('mouseout', function (e) {
			var parentOffset = $(this).offset(),
				relX = e.pageX - parentOffset.left,
				relY = e.pageY - parentOffset.top;
			$(this).find('span').css({
				top: relY,
				left: relX
			})
		});
});

// secondary btn--
$(function () {
	$('.secondary-btn')
		.on('mouseenter', function (e) {
			var parentOffset = $(this).offset(),
				relX = e.pageX - parentOffset.left,
				relY = e.pageY - parentOffset.top;
			$(this).find('span').css({
				top: relY,
				left: relX
			})
		})
		.on('mouseout', function (e) {
			var parentOffset = $(this).offset(),
				relX = e.pageX - parentOffset.left,
				relY = e.pageY - parentOffset.top;
			$(this).find('span').css({
				top: relY,
				left: relX
			})
		});
});
// btn js ---

// banner slider js start--
var swiper = new Swiper(".testimonial-slider", {
	slidesPerView: 1,
	spaceBetween: 0,
	grabCursor: true,
	loop: true,
	autoplay: {
		delay: 3500,
		disableOnInteraction: false,
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		// when window width is <= 1px
		1: {
			slidesPerView: 1.2,
			spaceBetween:16
		},
		// when window width is <= 575px
		575: {
			slidesPerView: 1,
			spaceBetween: 0
		}
	}
});
// banner slider js end--

// content animation--
new WOW().init();