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





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7OztBQ1ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7QUNWRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRTtBQUNGLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRTtBQUNGLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRTtBQUNGLENBQUM7Ozs7Ozs7VUM3RkQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOc0I7QUFDTztBQUNBO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9udGkudGVhbS8uL3NyYy9pbmRleC5zY3NzP2E1ZGUiLCJ3ZWJwYWNrOi8vbnRpLnRlYW0vLi9zcmMvc2NyaXB0cy9idXJnZXIuanMiLCJ3ZWJwYWNrOi8vbnRpLnRlYW0vLi9zcmMvc2NyaXB0cy9jYXJ0LmpzIiwid2VicGFjazovL250aS50ZWFtLy4vc3JjL3NjcmlwdHMvc3dpcGVyLmpzIiwid2VicGFjazovL250aS50ZWFtL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL250aS50ZWFtL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL250aS50ZWFtL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9udGkudGVhbS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL250aS50ZWFtL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbnRpLnRlYW0vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiY29uc3QgaGVhZGVyTW9iaWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlci1tb2JpbGUnKTtcclxuXHJcbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cdGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xyXG5cclxuXHRjb25zdCBjbGFzc05hbWVzID0gWydoZWFkZXItbW9iaWxlJywgJ2hlYWRlci1ib3R0b21fX2J1cmdlcicsICdoZWFkZXItbW9iaWxlX19jbG9zZS1idG4nXTtcclxuXHJcblx0aWYgKGNsYXNzTmFtZXMuc29tZSgoY2xhc3NOYW1lKSA9PiB0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSkpKSB7XHJcblx0XHRoZWFkZXJNb2JpbGUuY2xhc3NMaXN0LnRvZ2dsZSgnaGVhZGVyLW1vYmlsZV9hY3RpdmUnKTtcclxuXHR9XHJcbn0pO1xyXG4iLCJjb25zdCBjYXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcnQnKTtcclxuXHJcbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cdGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xyXG5cclxuXHRjYXJ0LmNsYXNzTGlzdC5yZW1vdmUoJ2NhcnRfYWN0aXZlJyk7XHJcblxyXG5cdGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdoZWFkZXItYnRuc19faXRlbV9iYWcnKSkge1xyXG5cdFx0Y2FydC5jbGFzc0xpc3QudG9nZ2xlKCdjYXJ0X2FjdGl2ZScpO1xyXG5cdH1cclxufSk7XHJcbiIsImNvbnN0IHN3aXBlcjEgPSBuZXcgU3dpcGVyKCcucHJvbW8tc3dpcGVyJywge1xuXHRsb29wOiB0cnVlLFxuXG5cdC8vIE5hdmlnYXRpb24gYXJyb3dzXG5cdG5hdmlnYXRpb246IHtcblx0XHRuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0Jyxcblx0fSxcblx0YnJlYWtwb2ludHM6IHtcblx0XHQzNzU6IHtcblx0XHRcdHNsaWRlc1BlclZpZXc6IDIsXG5cdFx0XHRzcGFjZUJldHdlZW46IDksXG5cdFx0fSxcblx0XHQ2NDA6IHtcblx0XHRcdHNsaWRlc1BlclZpZXc6IDEsXG5cdFx0XHRzcGFjZUJldHdlZW46IDIwLFxuXHRcdH0sXG5cdFx0NzY4OiB7XG5cdFx0XHRzbGlkZXNQZXJWaWV3OiAxLFxuXHRcdFx0c3BhY2VCZXR3ZWVuOiAyMCxcblx0XHR9LFxuXHRcdDE0NDA6IHtcblx0XHRcdHNsaWRlc1BlclZpZXc6IDEsXG5cdFx0XHRzcGFjZUJldHdlZW46IDIwLFxuXHRcdH0sXG5cdFx0MTkyMDoge1xuXHRcdFx0c2xpZGVzUGVyVmlldzogMixcblx0XHRcdHNwYWNlQmV0d2VlbjogMjAsXG5cdFx0fSxcblx0fSxcbn0pO1xuXG5jb25zdCBzd2lwZXIyID0gbmV3IFN3aXBlcignLnBvcHVsYXItc3dpcGVyJywge1xuXHRzbGlkZXNQZXJWaWV3OiA1LFxuXHRzbGlkZXNQZXJDb2x1bW46IDAsXG5cdGxvb3A6IHRydWUsXG5cdC8vIE5hdmlnYXRpb24gYXJyb3dzXG5cdG5hdmlnYXRpb246IHtcblx0XHRuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0Jyxcblx0fSxcblx0YnJlYWtwb2ludHM6IHtcblx0XHQzNzU6IHtcblx0XHRcdHNwYWNlQmV0d2VlbjogMTAsXG5cdFx0XHRzbGlkZXNQZXJWaWV3OiAyLFxuXHRcdFx0c2xpZGVzUGVyQ29sdW1uOiAyLFxuXG5cdFx0XHRwYWdpbmF0aW9uOiB7XG5cdFx0XHRcdGVsOiAnLnN3aXBlci1wYWdpbmF0aW9uJyxcblx0XHRcdH0sXG5cdFx0fSxcblx0XHQ2NDA6IHtcblx0XHRcdHNsaWRlc1BlclZpZXc6IDIsXG5cdFx0XHRzcGFjZUJldHdlZW46IDIwLFxuXHRcdH0sXG5cdFx0NzY4OiB7XG5cdFx0XHRzbGlkZXNQZXJWaWV3OiAzLFxuXHRcdFx0c3BhY2VCZXR3ZWVuOiAyMCxcblx0XHR9LFxuXHRcdDE0NDA6IHtcblx0XHRcdHNsaWRlc1BlclZpZXc6IDQsXG5cdFx0XHRzcGFjZUJldHdlZW46IDE1LFxuXHRcdH0sXG5cdFx0MTkyMDoge1xuXHRcdFx0c2xpZGVzUGVyVmlldzogNCxcblx0XHRcdHNwYWNlQmV0d2VlbjogMjAsXG5cdFx0fSxcblx0fSxcbn0pO1xuXG5jb25zdCBzd2lwZXIzID0gbmV3IFN3aXBlcignLnNhbGVzLXN3aXBlcicsIHtcblx0bG9vcDogdHJ1ZSxcblxuXHQvLyBOYXZpZ2F0aW9uIGFycm93c1xuXHRuYXZpZ2F0aW9uOiB7XG5cdFx0bmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXG5cdH0sXG5cdGJyZWFrcG9pbnRzOiB7XG5cdFx0NjQwOiB7XG5cdFx0XHRzbGlkZXNQZXJWaWV3OiAxLFxuXHRcdFx0c3BhY2VCZXR3ZWVuOiAyMCxcblx0XHR9LFxuXHRcdDc2ODoge1xuXHRcdFx0c2xpZGVzUGVyVmlldzogMixcblx0XHRcdHNwYWNlQmV0d2VlbjogMjAsXG5cdFx0fSxcblx0XHQxNDQwOiB7XG5cdFx0XHRzbGlkZXNQZXJWaWV3OiA0LFxuXHRcdFx0c3BhY2VCZXR3ZWVuOiAxMCxcblx0XHR9LFxuXHRcdDE5MjA6IHtcblx0XHRcdHNsaWRlc1BlclZpZXc6IDQsXG5cdFx0XHRzcGFjZUJldHdlZW46IDIwLFxuXHRcdH0sXG5cdH0sXG59KTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5pbXBvcnQgJy4vc2NyaXB0cy9zd2lwZXIuanMnO1xuaW1wb3J0ICcuL3NjcmlwdHMvYnVyZ2VyLmpzJztcbmltcG9ydCAnLi9zY3JpcHRzL2NhcnQuanMnO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9