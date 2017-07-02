/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return questions; });

// Static questions data

let questions = [
  {
    text: 'I can shard a database.',
    type: 'back',
  },
  {
    text: 'There is something gravely wrong with this: &lt;IMG SRC=\"\">.',
    type: 'front',
  },
  {
    text: 'I use Sketch often.',
    type: 'design',
  },
  {
    text: 'I can write a regex easily.',
    type: 'back',
  },
  // {
  //   text: 'I know the difference between == and ===.',
  //   type: 'back',
  // },
  // {
  //   text: 'I know the difference between call() and apply().',
  //   type: 'back',
  // },
  // {
  //   text: 'I understand how the browser renders a webpage.',
  //   type: 'back',
  // },
  // {
  //   text: 'I am comfortable recommending server-side caching techniques.',
  //   type: 'back',
  // },
  // {
  //   text: 'I enjoy designing page layouts.',
  //   type: 'design',
  // },
  {
    text: 'I enjoy architecting a stylesheet.',
    type: 'front',
  },
  // {
  //   text: 'Alan Turing, Grace Hopper, and Claude Shannon are heroes.',
  //   type: 'back',
  // },
  {
    text: 'Paula Scher, Dieter Rams, and Stefan Sagmeister are heroes.',
    type: 'design',
  },
  // {
  //   text: 'Jeffrey Zeldman, Eric Meyer, and Chris Coyier are heroes.',
  //   type: 'front',
  // },
  // {
  //   text: 'Bad kerning bothers me.',
  //   type: 'design',
  // },
  // {
  //   text: 'I can style a satisfying-to-click button.',
  //   type: 'front',
  // },
  // {
  //   text: 'This bothers me: &lt;IMG SRC=\"\">.',
  //   type: 'front',
  // },
  // {
  //   text: 'I enjoy debugging CSS.',
  //   type: 'front',
  // },
  // {
  //   text: 'I know my way around dev tools.',
  //   type: 'front',
  // },
];


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_app_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_app_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__css_app_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__css_bar_css__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__css_bar_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__css_bar_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__css_answers_css__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__css_answers_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__css_answers_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__questions_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Scores_js__ = __webpack_require__(6);








// Questions array import
const questions = __WEBPACK_IMPORTED_MODULE_3__questions_js__["a" /* questions */],
      Scores = __WEBPACK_IMPORTED_MODULE_4__Scores_js__["a" /* createScoresObject */](questions);

// App object
const App = {

  el: {
    question: document.getElementById('js-question'),
  },

  data: {
    qIndex: 0,
  },

  setQuestionText() {
    this.el.question.innerHTML = questions[this.data.qIndex].text + ' // ' + questions[this.data.qIndex].type;
  },

  isLastQuestion() {
    if( this.data.qIndex == questions.length - 1 ) {
      return true;
    } else {
      return false;
    }
  },

  hasMoreQuestions() {
    if( this.data.qIndex <= questions.length ) {
      return true;
    } else if( this.data.qIndex == questions.length ) {
      return false;
    }
  },

  updateBarWidth(el, val) {

    let width = el.offsetWidth,
        oldWidth = parseInt(width, 10),
        newWidth = oldWidth + val*10 + 'px';

    el.style.width = newWidth;
  },

  updateQuestion() {

    this.data.qIndex++;

    if ( this.isLastQuestion() ) {
      this.el.question.innerHTML = "No more questions.";
      document.querySelector('.answers-list').innerHTML = "Done!";
    } else {
      this.setQuestionText();
    }

  },

  init() {
    this.setQuestionText();
  }
}

App.init();


// Use event delegation to handle the click event
document.getElementById('js-answers').addEventListener('click', function(e) {

  App.updateQuestion();

  if(e.target && e.target.nodeName === 'LI') {

    let currentQuestion = questions[App.data.qIndex - 1],
        targetScore = currentQuestion.type,
        clickVal = +e.target.dataset.score,
        targetEl = document.getElementById(targetScore + 'Value');

    // Update scores
    Scores[targetScore] += clickVal;
    targetEl.innerHTML = Scores[targetScore];

    App.updateBarWidth(targetEl, clickVal);

    console.log(Scores);
  }

});


/***/ }),
/* 5 */,
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createScoresObject;
function createScoresObject(ques) {
  let Scores = {};

  ques.forEach( qdata => {
    if( !Scores.hasOwnProperty(qdata.type) ) {
      Scores[qdata.type] = 0;

      // Add to UI
      let div = document.getElementById('bar-template'),
          clone = div.cloneNode(true);

      clone.removeAttribute('id');
      clone.children[0].innerHTML = qdata.type;
      clone.children[1].innerHTML = Scores[qdata.type];
      clone.children[1].id = qdata.type + 'Value';

      document.querySelector('.app').appendChild(clone);

    }
  });

  return Scores;
}


/***/ })
/******/ ]);