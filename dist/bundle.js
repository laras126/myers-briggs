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
  },
  // {
  //   text: 'There is always more than one way to solve a coding problem.',
  //   pointsFor: 'left'
  // },

  // {
  //   text: 'How much do you identify with the title right?',
  //   pointsFor: 'right'
  // },
  // {
  //   text: 'How well do you know the difference between <code>call()</code> and <code>apply()</code>?',
  //   pointsFor: 'left'
  // },
  // {
  //   text: 'There is always more than one way to solve a coding problem.',
  //   pointsFor: 'left'
  // },

  // {
  //   text: 'How much do you identify with the title right?',
  //   pointsFor: 'right'
  // },
  // {
  //   text: 'How well do you know the difference between <code>call()</code> and <code>apply()</code>?',
  //   pointsFor: 'left'
  // }
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

// const answerEls = $$('#answers li');
// const questionEl = $('#question');
// const leftValueEl = $('#leftValue');
// const rightValueEl = $('#rightValue');


// Set question and left/right value defaults
// let questionIndex = 0;
// questionEl.innerHTML = questions[questionIndex].text;

// let leftValue = 0;
// leftValueEl.innerHTML = 0;

// let rightValue = 0;
// rightValueEl.innerHTML = 0;






// Update left/right values and question when answer is clicked
// for( let i=0;i<el.answers.length;i++ ) {

//   el.answers[i].addEventListener('click', () => {
//     let answerValue = parseInt(el.answers[i].innerHTML);
//     console.log(answerValue);
//     questionIndex++; // Change current question

//     // rightValue += answerValue;

//     // Show a new question until the last one
//     if (questionIndex < questions.length) {
//       let currentQuestion = questions[questionIndex];

//       // Update question text
//       // Currently this is a string, but there is markup in the question text.
//       // Easily accounted for using a frameworK.
//       questionEl.innerHTML = questionIndex + ' // ' + currentQuestion.text;

//       if (currentQuestion.pointsFor == 'developer') {
//         leftValue += answerValue;
//         leftValueEl.innerHTML = leftValue;
//       } else if (currentQuestion.pointsFor == 'designer') {
//         rightValue += answerValue;
//         rightValueEl.innerHTML = rightValue;
//       }

//     } else {
//       questionEl.innerHTML = 'No more questions!';
//     }
//   });

// }








/*
Front end skill ranker.


bar:
Developer ----------=====|--------------- Designer





User can see a question
User can answer between 1-5


on click:



When user answers question:
  if pointsFor == developer
    answer.value is added to the left
  else if pointsFor == designer
    answer.value is added to the right




<ul class="answer">
  li*5
</ul>



do you know...

5 - I am an expert
4 - I have used it beyond a tutorial capacity
3 - I kind of know this/or did at some point
2 - I have an idea of it
1 - Never heard of it

Not interested

how important is this knowledge in the position?

*/

// var questionsArr = [
//   ["Have you ever sharded a database?", "back", "Back-end"],
//   ["Do you identify as a designer?", "des", "Designer"],
//   ["Do you identify as a developer?", "sen", "Senior"],
//   ["Do you look at Sidebar everyday?", "des", "Designer"],
//   ["Have you ever submitted a pull request?", "dev", "Developer"],
//   ["Is there anything wrong with this?<br><code>&lt;IMG SRC=\"hello.png\"></code>", "dev", "Developer"],
//   ["Do you know the difference between <code>call()</code> and <code>apply()</code>?", "front", "Front-end"],
//   ["Are you a core contributer on any open source projects?", "sen", "Senior"],
//   ["Have you ever managed more than 3 team members?", "sen", "Senior"],
//   ["Do you know what <code>===</code> means?", "gen", "Generalist"],
//   ["Are you proud of your dotfiles?", "sen", "Senior"],
//   ["Do you know the difference between a font and a typeface?", "des", "Designer"],
//   ["Do you regularly update a blog?", "sen", "Senior"]
// ];

// function $(el) {
//   return document.querySelectorAll(el);
// }

// var App = {
//   el: {
//     answers: $("#answers"),
//     choice: $("input[name='answer']"),
//     result: $("#result"),
//     question: $("#question")
//   },

//   updateForm: function(id) {
//     App.el.question[0].innerHTML = questionsArr[i][0];
//     var el = $(id),
//         width = el[0].offsetWidth,
//         right = el[0].style.right,
//         oldWidth = parseInt(width, 10),
//         oldRight = parseInt(right, 10);

//     if($('#answerL')[0].checked) {
//       var newWidth = oldWidth + 20 + 'px';
//       var newRight = oldRight + 20 + 'px';
//     } else {
//       var newWidth = oldWidth - 20 + 'px';
//       var newRight = oldRight - 20 + 'px';
//     }

//     el[0].style.right = newRight;
//     el[0].style.width = newWidth;

//   },

//   bindUIActions: function() {
//     App.el.answers[0].addEventListener("click", function() {
//       App.goToNext();
//       App.updateForm("#"+questionsArr[i][1]);

//       if( questionsArr[i][1] == "dev" ) {
//         $("#devResult")[0].innerHTML = "Developer ";
//       } else if( questionsArr[i][1] == "des" ) {
//         $("#devResult")[0].innerHTML = "Designer ";
//       }

//       if( questionsArr[i][1] == "gen" ) {
//         $("#genResult")[0].innerHTML = "Generalist ";
//       } else if( questionsArr[i][1] == "spec" ) {
//         $("#genResult")[0].innerHTML = "Specialist ";
//       }

//       if( questionsArr[i][1] == "sen" ) {
//         $("#payResult")[0].innerHTML = "Senior ";
//       } else if( questionsArr[i][1] == "jun" ) {
//         $("#payResult")[0].innerHTML = "Junior ";
//       }

//       if( questionsArr[i][1] == "front" ) {
//         $("#sideResult")[0].innerHTML = "Front-end ";
//       } else if( questionsArr[i][1] == "back" ) {
//         $("#sideResult")[0].innerHTML = "Back-end ";
//       }

//     });
//   },

//   goToNext: function() {
//     // Attempting to get the current index then increment by 1
// /*    var index = questionsArr.indexOf(App.el.question[0].innerText);
//     i = index;*/
//     i = Math.floor((Math.random() * questionsArr.length) + 1);
//     return questionsArr[i];
//   },

//   init: function() {
//     this.bindUIActions(App.el.answers[0]);
//   },

//   updateTitle: function() {

//   }
// }

// App.init();


/***/ })
/******/ ]);