const cart = document.querySelector('.cart');

document.body.addEventListener('click', (e) => {
	const target = e.target;

	cart.classList.remove('cart_active');

	if (target.classList.contains('header-btns__item_bag')) {
		cart.classList.toggle('cart_active');
	}
});
