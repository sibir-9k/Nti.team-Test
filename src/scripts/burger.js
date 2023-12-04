const headerMobile = document.querySelector('.header-mobile');

document.body.addEventListener('click', (e) => {
	const target = e.target;

	const classNames = ['header-mobile', 'header-bottom__burger', 'header-mobile__close-btn'];

	if (classNames.some((className) => target.classList.contains(className))) {
		headerMobile.classList.toggle('header-mobile_active');
	}
});
