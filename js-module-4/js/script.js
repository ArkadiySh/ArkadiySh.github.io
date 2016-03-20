var testPage = {
  testBody: document.body,

  testWrapper: document.createElement('div'),
  testForm: document.createElement('form'),
  testName: document.createElement('h1'),
  testButton: document.createElement('button'),

  test: function (testHeader, reviewButton) {

    // Create wrapper in Body
    this.testBody.appendChild(this.testWrapper);
    
    // Create Form in Wrapper    
    this.testWrapper.appendChild(this.testForm);
    this.testWrapper.classList.add('wrapper');

    // Specify Test Name
    this.testName.innerHTML = testHeader;
    this.testName.classList.add('wrapper__header');
    this.testForm.appendChild(this.testName);

    // Create Button in Form
    this.testButton.innerHTML = reviewButton;
    this.testButton.classList.add('wrapper__button');
    this.testForm.appendChild(this.testButton);
  },

  testQuestion: function (question, answers) {
    var questionBlock = document.createElement('div'); // question-answers block

    var questionName = document.createElement('h2'); // question header
    questionName.innerHTML = question;
    questionBlock.appendChild(questionName);

    for (var i = 0; i < answers.length; i++) {

      var labelText = document.createTextNode(answers[i]);

      var answerLabel = document.createElement('label');

      var answerCheckbox = document.createElement('input');
      answerCheckbox.setAttribute('type', 'checkbox');

      questionBlock.appendChild(answerLabel);
      answerLabel.appendChild(answerCheckbox);
      answerLabel.appendChild(labelText);
    }

    this.testForm.insertBefore(questionBlock, this.testButton);
  }
}

testPage.test('Programming test', 'Review My Results');

testPage.testQuestion('Question 1', ['Answer #1', 'Answer #2', 'Answer #3']);
testPage.testQuestion('Question 2', ['Answer #1', 'Answer #2', 'Answer #3']);
testPage.testQuestion('Question 3', ['Answer #1', 'Answer #2', 'Answer #3']);