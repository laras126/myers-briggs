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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {


const questionsArr = [
  {
    text: 'Have you ever sharded a database?',
    pointsFor: 'left',
  },
  {
    text: 'Have you ever contributed code to an open source project?',
    pointsFor: 'right',
  },
  {
    text: 'This really bothers me <IMG SRC=\"\">.',
    pointsFor: 'right'
  },
  {
    text: 'I have an opinion about the amount of spaces in my tabs.',
    pointsFor: 'left'
  }
];

function $(el) {
  return document.querySelector(el);
}

function $$(el) {
  return document.querySelectorAll(el);
}


const App = {

  el: {
    answers: $$('#answers li'),
    question: $('#question'),
    leftScore: $('#leftValue'),
    rightScore: $('#rightValue')
  },

  data: {
    left: 0,
    right: 0,
    answer: 0,
    questionIndex: 0
  },

  setDefaultValues() {
    this.el.question.innerHTML   = questionsArr[this.data.questionIndex].text;
    this.el.leftScore.innerHTML  = this.data.left;
    this.el.rightScore.innerHTML = this.data.right;
  },

  updateScore(str) {

    let int = parseInt(str);
    let currentQuestion = questionsArr[this.data.questionIndex];

    switch(currentQuestion.pointsFor) {
      case 'left':
        this.data.left += int;
        this.el.leftScore.innerHTML  = this.data.left;
      case 'right':
        this.data.right += int;
        this.el.rightScore.innerHTML = this.data.right;
    }
  },

  updateQuestion() {
    this.data.questionIndex++;
    this.el.question.innerHTML = questionsArr[this.data.questionIndex].text;
  },

  handleAnswers() {

    // Add click event to all possible answers
    for( let i=0;i<this.el.answers.length;i++ ) {
      let selectedAnswer = this.el.answers[i];

      // If there is another question, update the question text and scores
      selectedAnswer.addEventListener('click', () => {
        if (this.data.questionIndex < questionsArr.length - 1) {
          this.updateQuestion();
          this.updateScore(selectedAnswer.innerHTML);
        } else {
          this.el.question.innerHTML = "No more questions!";
        }
      });
    }

  },

  init() {
    this.setDefaultValues();
    this.handleAnswers();
  }
}

App.init();


/***/ })
/******/ ]);