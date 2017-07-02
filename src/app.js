
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
    question: document.querySelector('#question'),
    frontScore: document.querySelector('#frontValue'),
    backScore: document.querySelector('#backValue'),
    designScore: document.querySelector('#designValue')
  },

  data: {
    scores: {
      front: 0,
      back: 0,
      design: 0,
    },
    answer: 0,
    qIndex: 0
  },


  getScoreTypes(ques) {
    return ques.map( q => q.type );
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

  updateWidth(el, val) {

    let width = el.offsetWidth,
        oldWidth = parseInt(width, 10),
        newWidth = oldWidth + val*10 + 'px';

    el.style.width = newWidth;
  },

  updateUI(str) {

    // let int = parseInt(str); // Make sure the value is an integer
    // let currentQuestion = questions[this.data.qIndex];

    // Update progress bars - spaghetti
    // Should be a way to loop through data.scores and apply each

    // if( currentQuestion.pointsFor === 'front' ) {
    //   this.data.scores.front += int;
    //   this.el.frontScore.innerHTML  = this.data.scores.front;
    //   this.updateWidth(this.el.frontScore, int);
    // } else if( currentQuestion.pointsFor === 'back' ) {
    //   this.data.scores.back += int;
    //   this.el.backScore.innerHTML = this.data.scores.back;
    //   this.updateWidth(this.el.backScore, int);
    // } else if( currentQuestion.pointsFor === 'design' ) {
    //   this.data.scores.design += int;
    //   this.el.designScore.innerHTML = this.data.scores.design;
    //   this.updateWidth(this.el.designScore, int);
    // }
  },

  handleQuestionUI() {

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

function getScoreElems(ques) {
  let Elems = {};

  ques.forEach( qdata => {
    if( !Elems.hasOwnProperty(qdata.type) ) {

    }
  });
}

// Create the Scores object and add it to UI
function createScoreObject(ques) {
  let Scores = {};

  ques.forEach( qdata => {
    if( !Scores.hasOwnProperty(qdata.type) ) {
      Scores[qdata.type] = 0;

      // Add to UI
      let div = document.createElement('div');
      div.innerHTML = qdata.type;
      document.body.appendChild(div);

    }
  });

  return Scores;
};

let Scores = createScoreObject(questions); // is const okay here?

// Use event delegation to handle the click event
document.getElementById('js-answers').addEventListener('click', function(e) {

    App.handleQuestionUI();

    if(e.target && e.target.nodeName === 'LI') {

      let currentQuestion = questions[App.data.qIndex - 1],
          targetScore = currentQuestion.type,
          clickVal = +e.target.dataset.score,
          targetEl = document.getElementById(targetScore + 'Value');

      // Update scores
      Scores[targetScore] += clickVal;
      targetEl.innerHTML = Scores[targetScore];

      App.updateWidth(targetEl, clickVal);

      // document.getElementById(Scores).innerHTML = Scores[targetScore];
      console.log(Scores);
    }
  });



// Run app

// App.init();
