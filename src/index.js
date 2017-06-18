
// Static questions data

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
    text: 'This really bothers me: &lt;IMG SRC=\"\">.',
    pointsFor: 'right'
  },
  {
    text: 'I have an opinion about the amount of spaces in my tabs.',
    pointsFor: 'left'
  }
];



// App object

const App = {

  el: {
    answers: document.querySelectorAll('#answers > li'),
    question: document.querySelector('#question'),
    leftScore: document.querySelector('#leftValue'),
    rightScore: document.querySelector('#rightValue')
  },

  data: {
    left: 0,
    right: 0,
    answer: 0,
    questionIndex: 0
  },

  haveMoreQuestions() {
    if( this.data.questionIndex <= questionsArr.length ) {
      return true;
    } else {
      return false;
    }
  },

  setDefaultValues() {
    this.el.question.innerHTML   = questionsArr[this.data.questionIndex].text + ' // ' + questionsArr[this.data.questionIndex].pointsFor;
    this.el.leftScore.innerHTML  = this.data.left;
    this.el.rightScore.innerHTML = this.data.right;
  },

  updateScore(str) {

    let int = parseInt(str); // Make sure the value is an integer
    let currentQuestion = questionsArr[this.data.questionIndex];

    // There is a more efficient way to do this
    if( currentQuestion.pointsFor == 'left' ) {
      this.data.left += int;
      this.el.leftScore.innerHTML  = this.data.left;
    } else {
      this.data.right += int;
      this.el.rightScore.innerHTML = this.data.right;
    }
  },

  updateQuestion() {
    this.data.questionIndex++;
    this.el.question.innerHTML = questionsArr[this.data.questionIndex].text + ' // ' + questionsArr[this.data.questionIndex].pointsFor;
  },

  applyUpdates() {

    // Add click event to all possible answers
    for( let i=0;i<this.el.answers.length;i++ ) {
      let selectedAnswer = this.el.answers[i];
      let score = selectedAnswer.innerHTML;

      // Update the question and score when answer is selected
      selectedAnswer.addEventListener( 'click', () => {
        if( this.haveMoreQuestions() ) {
          this.updateScore(score);
          this.updateQuestion(); // Throwing an error on last question, need to address that
        } else {
          console.log('no more questions');
        }
      });
    }
  },

  init() {
    this.setDefaultValues();
    this.applyUpdates();
  }
}



// Run app

App.init();
