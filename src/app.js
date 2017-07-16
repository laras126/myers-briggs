import _ from 'lodash';

import styles from './css/app.css';

import * as ques from './questions.js';
import * as Score from './scores.js';

// Questions array import
const questions = ques.questions;

let Scores = Score.createScoresObject(questions),
    currentQuestionIndex = 0,
    currentQuestionType,
    currentQuestionText;

let isLastQuestion = () => {
  if( currentQuestionIndex == questions.length - 1 ) {
    return true;
  } else {
    return false;
  }
};

function setCurrentQuestionText() {
  currentQuestionType = questions[currentQuestionIndex].type,
  currentQuestionText = questions[currentQuestionIndex].text;

  document.querySelector('#js-question').innerHTML = currentQuestionText;
  document.querySelector('#js-question-type').innerHTML = currentQuestionType;
}

function setEndOfQuizText() {
  document.querySelector('#js-question').innerHTML = "No more questions.";
  document.querySelector('.answers-list').innerHTML = "Done!";
}

function updateBarWidth(el, val) {
  let width = el.offsetWidth,
      oldWidth = parseInt(width, 10),
      newWidth = oldWidth + val*10 + 'px';
  if( val !== 0 ) {
    el.style.width = newWidth;
  }
}

function updateQuestion() {
  currentQuestionIndex++;
  if (isLastQuestion()) {
    setEndOfQuizText();
  } else {
    setCurrentQuestionText();
  }
}

setCurrentQuestionText();

// Use event delegation to handle the click event
document.getElementById('js-answers').addEventListener('click', function(e) {

  updateQuestion();

  if(e.target && e.target.nodeName === 'LI') {

    let currentQuestion = questions[currentQuestionIndex - 1],
        targetType = currentQuestion.type,
        clickedScore = +e.target.dataset.score,
        targetEl = document.getElementById(targetType + 'Value');

    // Update scores
    Scores[targetType] += clickedScore;
    targetEl.innerHTML = Scores[targetScore];

    updateBarWidth(targetEl, clickVal);

  }

});
