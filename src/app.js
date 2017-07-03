
import styles from './css/app.css';

import * as ques from './questions.js';
import * as Score from './Scores.js';

// Questions array import
const questions = ques.questions,
      Scores = Score.createScoresObject(questions);

// App object
const App = {

  el: {
    question: document.getElementById('js-question'),
    questionType: document.getElementById('js-question-type'),
  },

  data: {
    qIndex: 0,
  },

  setQuestionText() {
    this.el.question.innerHTML = questions[this.data.qIndex].text
    this.el.questionType.innerHTML = questions[this.data.qIndex].type;

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
    if( val !== 0 ) {
      el.style.width = newWidth;
    }
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
