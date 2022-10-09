/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/descriptors/traits.ts":
/*!***********************************!*\
  !*** ./src/descriptors/traits.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.traits = void 0;
exports.traits = [
    {
        "description": "I idolize a particular hero of my faith, and constantly refer to that person's deeds and example.",
        "background": "alcolyte",
        "source": "phb",
    },
    {
        "description": "I can find common ground between the fiercest enemies, empathizing with them and always working toward peace.",
        "background": "alcolyte",
        "source": "phb",
    },
    {
        "description": "I see omens in every event and action. The gods try to speak to us, we just need to listen.",
        "background": "alcolyte",
        "source": "phb",
    },
    {
        "description": "Nothing can shake my optimistic attitude.",
        "background": "alcolyte",
        "source": "phb",
    },
    {
        "description": "I quote (or misquote) sacred texts and proverbs in almost every situation.",
        "background": "alcolyte",
        "source": "phb",
    },
    {
        "description": "I am tolerant (or intolerant) of other faiths and respect (or condemn) the worship of other gods.",
        "background": "alcolyte",
        "source": "phb",
    },
    {
        "description": "I've enjoyed fine food, drink, and high society among my temple's elite. Rough living grates on me.",
        "background": "alcolyte",
        "source": "phb",
    },
    {
        "description": "I've spent so long in the temple that I have little practical experience dealing with people in the outside world.",
        "background": "alcolyte",
        "source": "phb",
    },
];


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
var traits_1 = __webpack_require__(/*! ./descriptors/traits */ "./src/descriptors/traits.ts");
console.log('>>> traitz', traits_1.traits);
// console.log('>>> traitss');

})();

/******/ })()
;