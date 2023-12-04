const nameInput = document.getElementById('input-name');
const phoneInput = document.getElementById('input-phone');
const button = document.getElementById('submit');

function validateName() {
	const name = nameInput.value;
	if (name.length < 3) {
		nameInput.classList.add('invalid');
		return false;
	} else {
		nameInput.classList.remove('invalid');
		return true;
	}
}

function validatePhone() {
	const phone = phoneInput.value;
	// Регулярное выражение для проверки номера телефона
	const phoneRegex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
	if (!phoneRegex.test(phone)) {
		phoneInput.classList.add('invalid');
		return false;
	} else {
		phoneInput.classList.remove('invalid');
		return true;
	}
}

// Функция для открытия модального окна
function openModal() {
	// Код для открытия модального окна
}


button.addEventListener('click', function (event) {
	event.preventDefault(); 
	if (validateName() && validatePhone()) {
		openModal();
	}
});
