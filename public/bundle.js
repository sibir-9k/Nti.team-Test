/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scripts/burger.js":
/*!*******************************!*\
  !*** ./src/scripts/burger.js ***!
  \*******************************/
/***/ (() => {

const headerMobile = document.querySelector('.header-mobile');

document.body.addEventListener('click', (e) => {
	const target = e.target;

	const classNames = ['header-mobile', 'header-bottom__burger', 'header-mobile__close-btn'];

	if (classNames.some((className) => target.classList.contains(className))) {
		headerMobile.classList.toggle('header-mobile_active');
	}
});


/***/ }),

/***/ "./src/scripts/cart.js":
/*!*****************************!*\
  !*** ./src/scripts/cart.js ***!
  \*****************************/
/***/ (() => {

const cart = document.querySelector('.cart');

document.body.addEventListener('click', (e) => {
	const target = e.target;

	cart.classList.remove('cart_active');

	if (target.classList.contains('header-btns__item_bag')) {
		cart.classList.toggle('cart_active');
	}
});


/***/ }),

/***/ "./src/scripts/form-validation.js":
/*!****************************************!*\
  !*** ./src/scripts/form-validation.js ***!
  \****************************************/
/***/ (() => {

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


/***/ }),

/***/ "./src/scripts/swiper.js":
/*!*******************************!*\
  !*** ./src/scripts/swiper.js ***!
  \*******************************/
/***/ (() => {

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


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _scripts_swiper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/swiper.js */ "./src/scripts/swiper.js");
/* harmony import */ var _scripts_swiper_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scripts_swiper_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scripts_burger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/burger.js */ "./src/scripts/burger.js");
/* harmony import */ var _scripts_burger_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scripts_burger_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _scripts_cart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/cart.js */ "./src/scripts/cart.js");
/* harmony import */ var _scripts_cart_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scripts_cart_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _scripts_form_validation_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/form-validation.js */ "./src/scripts/form-validation.js");
/* harmony import */ var _scripts_form_validation_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_scripts_form_validation_js__WEBPACK_IMPORTED_MODULE_4__);






})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7OztBQ1ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7QUNWRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixFQUFFLGFBQWEsRUFBRSxVQUFVLEVBQUU7QUFDMUQ7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7QUN2Q0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUU7QUFDRixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUU7QUFDRixDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUU7QUFDRixDQUFDOzs7Ozs7O1VDN0ZEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOc0I7QUFDTztBQUNBO0FBQ0Y7QUFDVyIsInNvdXJjZXMiOlsid2VicGFjazovL250aS50ZWFtLy4vc3JjL2luZGV4LnNjc3M/YTVkZSIsIndlYnBhY2s6Ly9udGkudGVhbS8uL3NyYy9zY3JpcHRzL2J1cmdlci5qcyIsIndlYnBhY2s6Ly9udGkudGVhbS8uL3NyYy9zY3JpcHRzL2NhcnQuanMiLCJ3ZWJwYWNrOi8vbnRpLnRlYW0vLi9zcmMvc2NyaXB0cy9mb3JtLXZhbGlkYXRpb24uanMiLCJ3ZWJwYWNrOi8vbnRpLnRlYW0vLi9zcmMvc2NyaXB0cy9zd2lwZXIuanMiLCJ3ZWJwYWNrOi8vbnRpLnRlYW0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbnRpLnRlYW0vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbnRpLnRlYW0vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL250aS50ZWFtL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbnRpLnRlYW0vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9udGkudGVhbS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJjb25zdCBoZWFkZXJNb2JpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyLW1vYmlsZScpO1xyXG5cclxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcblx0Y29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XHJcblxyXG5cdGNvbnN0IGNsYXNzTmFtZXMgPSBbJ2hlYWRlci1tb2JpbGUnLCAnaGVhZGVyLWJvdHRvbV9fYnVyZ2VyJywgJ2hlYWRlci1tb2JpbGVfX2Nsb3NlLWJ0biddO1xyXG5cclxuXHRpZiAoY2xhc3NOYW1lcy5zb21lKChjbGFzc05hbWUpID0+IHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSkpIHtcclxuXHRcdGhlYWRlck1vYmlsZS5jbGFzc0xpc3QudG9nZ2xlKCdoZWFkZXItbW9iaWxlX2FjdGl2ZScpO1xyXG5cdH1cclxufSk7XHJcbiIsImNvbnN0IGNhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FydCcpO1xyXG5cclxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcblx0Y29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XHJcblxyXG5cdGNhcnQuY2xhc3NMaXN0LnJlbW92ZSgnY2FydF9hY3RpdmUnKTtcclxuXHJcblx0aWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2hlYWRlci1idG5zX19pdGVtX2JhZycpKSB7XHJcblx0XHRjYXJ0LmNsYXNzTGlzdC50b2dnbGUoJ2NhcnRfYWN0aXZlJyk7XHJcblx0fVxyXG59KTtcclxuIiwiY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LW5hbWUnKTtcclxuY29uc3QgcGhvbmVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1waG9uZScpO1xyXG5jb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0Jyk7XHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZU5hbWUoKSB7XHJcblx0Y29uc3QgbmFtZSA9IG5hbWVJbnB1dC52YWx1ZTtcclxuXHRpZiAobmFtZS5sZW5ndGggPCAzKSB7XHJcblx0XHRuYW1lSW5wdXQuY2xhc3NMaXN0LmFkZCgnaW52YWxpZCcpO1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRuYW1lSW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnaW52YWxpZCcpO1xyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZVBob25lKCkge1xyXG5cdGNvbnN0IHBob25lID0gcGhvbmVJbnB1dC52YWx1ZTtcclxuXHQvLyDQoNC10LPRg9C70Y/RgNC90L7QtSDQstGL0YDQsNC20LXQvdC40LUg0LTQu9GPINC/0YDQvtCy0LXRgNC60Lgg0L3QvtC80LXRgNCwINGC0LXQu9C10YTQvtC90LBcclxuXHRjb25zdCBwaG9uZVJlZ2V4ID0gL15cXCg/KFxcZHszfSlcXCk/Wy0gXT8oXFxkezN9KVstIF0/KFxcZHs0fSkkLztcclxuXHRpZiAoIXBob25lUmVnZXgudGVzdChwaG9uZSkpIHtcclxuXHRcdHBob25lSW5wdXQuY2xhc3NMaXN0LmFkZCgnaW52YWxpZCcpO1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRwaG9uZUlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2ludmFsaWQnKTtcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxufVxyXG5cclxuLy8g0KTRg9C90LrRhtC40Y8g0LTQu9GPINC+0YLQutGA0YvRgtC40Y8g0LzQvtC00LDQu9GM0L3QvtCz0L4g0L7QutC90LBcclxuZnVuY3Rpb24gb3Blbk1vZGFsKCkge1xyXG5cdC8vINCa0L7QtCDQtNC70Y8g0L7RgtC60YDRi9GC0LjRjyDQvNC+0LTQsNC70YzQvdC+0LPQviDQvtC60L3QsFxyXG59XHJcblxyXG5cclxuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcblx0ZXZlbnQucHJldmVudERlZmF1bHQoKTsgXHJcblx0aWYgKHZhbGlkYXRlTmFtZSgpICYmIHZhbGlkYXRlUGhvbmUoKSkge1xyXG5cdFx0b3Blbk1vZGFsKCk7XHJcblx0fVxyXG59KTtcclxuIiwiY29uc3Qgc3dpcGVyMSA9IG5ldyBTd2lwZXIoJy5wcm9tby1zd2lwZXInLCB7XG5cdGxvb3A6IHRydWUsXG5cblx0Ly8gTmF2aWdhdGlvbiBhcnJvd3Ncblx0bmF2aWdhdGlvbjoge1xuXHRcdG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxuXHR9LFxuXHRicmVha3BvaW50czoge1xuXHRcdDM3NToge1xuXHRcdFx0c2xpZGVzUGVyVmlldzogMixcblx0XHRcdHNwYWNlQmV0d2VlbjogOSxcblx0XHR9LFxuXHRcdDY0MDoge1xuXHRcdFx0c2xpZGVzUGVyVmlldzogMSxcblx0XHRcdHNwYWNlQmV0d2VlbjogMjAsXG5cdFx0fSxcblx0XHQ3Njg6IHtcblx0XHRcdHNsaWRlc1BlclZpZXc6IDEsXG5cdFx0XHRzcGFjZUJldHdlZW46IDIwLFxuXHRcdH0sXG5cdFx0MTQ0MDoge1xuXHRcdFx0c2xpZGVzUGVyVmlldzogMSxcblx0XHRcdHNwYWNlQmV0d2VlbjogMjAsXG5cdFx0fSxcblx0XHQxOTIwOiB7XG5cdFx0XHRzbGlkZXNQZXJWaWV3OiAyLFxuXHRcdFx0c3BhY2VCZXR3ZWVuOiAyMCxcblx0XHR9LFxuXHR9LFxufSk7XG5cbmNvbnN0IHN3aXBlcjIgPSBuZXcgU3dpcGVyKCcucG9wdWxhci1zd2lwZXInLCB7XG5cdHNsaWRlc1BlclZpZXc6IDUsXG5cdHNsaWRlc1BlckNvbHVtbjogMCxcblx0bG9vcDogdHJ1ZSxcblx0Ly8gTmF2aWdhdGlvbiBhcnJvd3Ncblx0bmF2aWdhdGlvbjoge1xuXHRcdG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxuXHR9LFxuXHRicmVha3BvaW50czoge1xuXHRcdDM3NToge1xuXHRcdFx0c3BhY2VCZXR3ZWVuOiAxMCxcblx0XHRcdHNsaWRlc1BlclZpZXc6IDIsXG5cdFx0XHRzbGlkZXNQZXJDb2x1bW46IDIsXG5cblx0XHRcdHBhZ2luYXRpb246IHtcblx0XHRcdFx0ZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxuXHRcdFx0fSxcblx0XHR9LFxuXHRcdDY0MDoge1xuXHRcdFx0c2xpZGVzUGVyVmlldzogMixcblx0XHRcdHNwYWNlQmV0d2VlbjogMjAsXG5cdFx0fSxcblx0XHQ3Njg6IHtcblx0XHRcdHNsaWRlc1BlclZpZXc6IDMsXG5cdFx0XHRzcGFjZUJldHdlZW46IDIwLFxuXHRcdH0sXG5cdFx0MTQ0MDoge1xuXHRcdFx0c2xpZGVzUGVyVmlldzogNCxcblx0XHRcdHNwYWNlQmV0d2VlbjogMTUsXG5cdFx0fSxcblx0XHQxOTIwOiB7XG5cdFx0XHRzbGlkZXNQZXJWaWV3OiA0LFxuXHRcdFx0c3BhY2VCZXR3ZWVuOiAyMCxcblx0XHR9LFxuXHR9LFxufSk7XG5cbmNvbnN0IHN3aXBlcjMgPSBuZXcgU3dpcGVyKCcuc2FsZXMtc3dpcGVyJywge1xuXHRsb29wOiB0cnVlLFxuXG5cdC8vIE5hdmlnYXRpb24gYXJyb3dzXG5cdG5hdmlnYXRpb246IHtcblx0XHRuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0Jyxcblx0fSxcblx0YnJlYWtwb2ludHM6IHtcblx0XHQ2NDA6IHtcblx0XHRcdHNsaWRlc1BlclZpZXc6IDEsXG5cdFx0XHRzcGFjZUJldHdlZW46IDIwLFxuXHRcdH0sXG5cdFx0NzY4OiB7XG5cdFx0XHRzbGlkZXNQZXJWaWV3OiAyLFxuXHRcdFx0c3BhY2VCZXR3ZWVuOiAyMCxcblx0XHR9LFxuXHRcdDE0NDA6IHtcblx0XHRcdHNsaWRlc1BlclZpZXc6IDQsXG5cdFx0XHRzcGFjZUJldHdlZW46IDEwLFxuXHRcdH0sXG5cdFx0MTkyMDoge1xuXHRcdFx0c2xpZGVzUGVyVmlldzogNCxcblx0XHRcdHNwYWNlQmV0d2VlbjogMjAsXG5cdFx0fSxcblx0fSxcbn0pO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9pbmRleC5zY3NzJztcbmltcG9ydCAnLi9zY3JpcHRzL3N3aXBlci5qcyc7XG5pbXBvcnQgJy4vc2NyaXB0cy9idXJnZXIuanMnO1xuaW1wb3J0ICcuL3NjcmlwdHMvY2FydC5qcyc7XG5pbXBvcnQgJy4vc2NyaXB0cy9mb3JtLXZhbGlkYXRpb24uanMnO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9