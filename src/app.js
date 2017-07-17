import _ from 'lodash';

import styles from './css/app.css';

import * as ques from './questions.js';
import * as Score from './scores.js';

// Elements
const QUESTION = document.querySelector('#js-question'),
      QUESTION_TYPE = document.querySelector('#js-question-type'),
      ANSWERS = document.querySelector('#js-answers');

// Global variables
var questions = ques.questions,
    Scores = Score.createScoresObject(questions),
    currentQuestionIndex = 0,
    currentQuestionType,
    currentQuestionText;

function setCurrentQuestionText() {
  currentQuestionType = questions[currentQuestionIndex].type,
  currentQuestionText = questions[currentQuestionIndex].text;

  QUESTION.innerHTML      = currentQuestionText;
  QUESTION_TYPE.innerHTML = currentQuestionType;
}

function setEndOfQuizText() {
  QUESTION.innerHTML = "No more questions.";
  ANSWERS.innerHTML = "Done!";
}

function handleQuestionUpdate() {
  currentQuestionIndex++;

  let isLastQuestion = currentQuestionIndex === questions.length ? true : false;

  if (isLastQuestion) {
    setEndOfQuizText();
  } else {
    setCurrentQuestionText();
  }
}

function applyNewBarWidth(newWidth, el) {
  el.style.width = newWidth + 'px';
}

// Set up quiz
window.addEventListener('DOMContentLoaded', () => {
  setCurrentQuestionText();
});

// Use event delegation to handle the click event
ANSWERS.addEventListener('click', (e) => {

  if(e.target && e.target.nodeName === 'LI') {

    handleQuestionUpdate();

    let currentQuestion = questions[currentQuestionIndex - 1],
        scoreMultiplier = currentQuestion.multiplier ? currentQuestion.multiplier : 1,
        targetType = currentQuestion.type,
        clickedScore = +e.target.dataset.score,
        targetEl = document.getElementById(targetType + 'Value');

    let newBarWidth = ((el, val, multiplier) => {
      let oldWidth = targetEl.offsetWidth,
          widthToAdd = Math.round(val*multiplier),
          newWidth = widthToAdd + oldWidth;
      return newWidth;
    })(targetEl, clickedScore, scoreMultiplier);

    // Update scores
    Scores[targetType] += clickedScore;
    targetEl.innerHTML = Scores[targetType];

    applyNewBarWidth(newBarWidth, targetEl);

  }

});
