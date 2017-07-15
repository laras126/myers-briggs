import _ from 'lodash';

import styles from './css/app.css';

import * as ques from './questions.js';
import * as Score from './Scores.js';

// Questions array import
const questions = ques.questions,
      Scores = Score.createScoresObject(questions);

let currentQuestionIndex = 0;


// App object
const App = {


  setQuestionText() {
    document.querySelector('#js-question').innerHTML = questions[currentQuestionIndex].text;
    document.querySelector('#js-question-type').innerHTML = questions[currentQuestionIndex].type;

  },

  isLastQuestion() {
    if( currentQuestionIndex == questions.length - 1 ) {
      return true;
    } else {
      return false;
    }
  },

  hasMoreQuestions() {
    if( currentQuestionIndex <= questions.length ) {
      return true;
    } else if( currentQuestionIndex == questions.length ) {
      return false;
    }
  },

  updateBarWidth(el, val) {

    let width = el.offsetWidth,
        oldWidth = parseInt(width, 10),
        newWidth = oldWidth + val*10 + 'px';
    if( val !== 0 ) {
      el.style.width = newWidth;
    }
  },

  updateQuestion() {

    currentQuestionIndex++;

    if ( this.isLastQuestion() ) {
      document.querySelector('#js-question').innerHTML = "No more questions.";
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

    let currentQuestion = questions[currentQuestionIndex - 1],
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
