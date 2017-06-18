
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
