
import styles from './css/app.css';
import styles from './css/bar.css';
import styles from './css/answers.css';

import * as ques from './questions.js';
// import * as bar from './bar.js';


// Questions array import
const questions = ques.questions;


// App object
const App = {

  el: {
    question: document.getElementById('js-question'),
  },

  data: {
    qIndex: 0,
  },

  createScoresObject(ques) {
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

const Scores = App.createScoresObject(questions); // is const okay here?

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
