
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
    text: 'This really bothers me <IMG SRC=\"\">.',
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

  setDefaultValues() {
    this.el.question.innerHTML   = questionsArr[this.data.questionIndex].text;
    this.el.leftScore.innerHTML  = this.data.left;
    this.el.rightScore.innerHTML = this.data.right;
  },

  updateScore(str) {

    let int = parseInt(str); // Make sure the value is an integer
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

    // If there are more questions, update the current question index and text
    if (this.data.questionIndex < questionsArr.length - 1) {
      this.data.questionIndex++;
      this.el.question.innerHTML = questionsArr[this.data.questionIndex].text;
    } else {
      this.el.question.innerHTML = "No more questions!";
    }

  },

  applyUpdates() {

    // Add click event to all possible answers
    for( let i=0;i<this.el.answers.length;i++ ) {
      let selectedAnswer = this.el.answers[i];
      let score = selectedAnswer.innerHTML;

      // Update the question and score when answer is selected
      selectedAnswer.addEventListener( 'click', () => {
        this.updateQuestion();
        this.updateScore(score);
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
