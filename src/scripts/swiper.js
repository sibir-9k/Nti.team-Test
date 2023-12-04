const swiper1 = new Swiper('.promo-swiper', {
	loop: true,

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
	},
	breakpoints: {
		375: {
			slidesPerView: 2,
			spaceBetween: 9,
		},
		640: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		1440: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		1920: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
	},
});

const swiper2 = new Swiper('.popular-swiper', {
	slidesPerView: 5,
	slidesPerColumn: 0,
	loop: true,
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
	},
	breakpoints: {
		375: {
			spaceBetween: 10,
			slidesPerView: 2,
			slidesPerColumn: 2,

			pagination: {
				el: '.swiper-pagination',
			},
		},
		640: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1440: {
			slidesPerView: 4,
			spaceBetween: 15,
		},
		1920: {
			slidesPerView: 4,
			spaceBetween: 20,
		},
	},
});

const swiper3 = new Swiper('.sales-swiper', {
	loop: true,

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
	},
	breakpoints: {
		640: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		1440: {
			slidesPerView: 4,
			spaceBetween: 10,
		},
		1920: {
			slidesPerView: 4,
			spaceBetween: 20,
		},
	},
});
