
import styles from './css/app.css';
import styles from './css/bar.css';
import styles from './css/answers.css';

import * as ques from './questions.js';
import * as bar from './bar.js';


// Shortcut :-\
const questions = ques.questions;


// App object

const App = {

  el: {
    answers: document.querySelectorAll('#answers > li'),
    question: document.querySelector('#question'),
    leftScore: document.querySelector('#leftValue'),
    rightScore: document.querySelector('#rightValue')
  },

  data: {
    front: 0,
    back: 0,
    design: 0,
    answer: 0,
    qIndex: 0
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

  setDefaultValues() {
    this.el.question.innerHTML   = questions[this.data.qIndex].text + ' // ' + questions[this.data.qIndex].pointsFor;
    this.el.leftScore.innerHTML  = this.data.left;
    this.el.rightScore.innerHTML = this.data.right;
  },

  updateWidth(el, val) {

    let width = el.offsetWidth,
        oldWidth = parseInt(width, 10),
        newWidth = oldWidth + val*10 + 'px';

    el.style.width = newWidth;

  },

  updateScore(str) {
    // var el = $(id),
    //     width = el[0].offsetWidth,
    //     right = el[0].style.right,
    //     oldWidth = parseInt(width, 10),
    //     oldRight = parseInt(right, 10);

    // if($('#answerL')[0].checked) {
    //   var newWidth = oldWidth + 20 + 'px';
    //   var newRight = oldRight + 20 + 'px';
    // } else {
    //   var newWidth = oldWidth - 20 + 'px';
    //   var newRight = oldRight - 20 + 'px';
    // }

    // el[0].style.right = newRight;
    // el[0].style.width = newWidth;


    let int = parseInt(str); // Make sure the value is an integer
    let currentQuestion = questions[this.data.qIndex];

    // There is a more efficient way to do this
    if( currentQuestion.pointsFor == 'left' ) {
      this.data.left += int;
      this.el.leftScore.innerHTML  = this.data.left;
      this.updateWidth(this.el.leftScore, int);
    } else {
      this.data.right += int;
      this.el.rightScore.innerHTML = this.data.right;
      this.updateWidth(this.el.rightScore, int);
    }
  },

  updateQuestion() {
    this.data.qIndex++;
    this.el.question.innerHTML = questions[this.data.qIndex].text + ' // ' + questions[this.data.qIndex].pointsFor;
  },

  applyUpdates(newScore) {

    if( this.hasMoreQuestions() ) {
      this.updateScore(newScore);
      this.updateQuestion();
    }

    if( this.isLastQuestion() ) {
      this.el.question.innerHTML = "No more questions.";
    }

  },

  init() {
    this.setDefaultValues();

    // Add click event to all answers
    for( let i=0;i<this.el.answers.length;i++ ) {
      let selectedAnswer = this.el.answers[i];
      let score = selectedAnswer.dataset.score;
      // Update the question and score when answer is selected
      selectedAnswer.addEventListener( 'click', () => {
        this.applyUpdates(score);
      });

    }
  }
}



// Run app

App.init();
