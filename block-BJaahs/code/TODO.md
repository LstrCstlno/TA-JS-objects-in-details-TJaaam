If we want to build any app the two most important thing to think about is Data and Behavior. So for our quiz app let's break it down. To make a quiz app we need to create Single Question object.

### For single question we need the following data and methods:

- Data:
  - `title` (title of the question)
  - `options` (array of options)
  - `correctAnswerIndex` (index of the correct option)
- Methods:
  - `isAnswerCorrect` (will accept the index and returns `true` or `false` based on the answer is correct or not)
  - `getCorrectAnswer` (will return the correct answer of the quiz when the function is called)

### Create the object using the following ways

For each different ways of creating object write different solutions.

- Without Object

```js
let title = "Who will become the king of the pirates"
let options = ["Black Beard", "Ace", "Luffy", "Zoro"];
let correctAnswerIndex = 2;

function isAnswerCorrect(index){
  if(index === correctAnswerIndex)
  return;
}

function getCorrectAnswer(){
  return options[correctAnswerIndex];
}

```
- Organize using object

```js

function isAnswerCorrect(index){
  if(index === question.correctAnswerIndex)
  return true;
  else return false;
}

function getCorrectAnswer(){
  return question.options[question.correctAnswerIndex];
}

let question = {
  title: "Who will become the king of the pirates?",
  options : ["Black Beard", "Ace", "Luffy", "Zoro"],
  correctAnswerIndex : 2,
  isAnswerCorrect: isAnswerCorrect,
  getCorrectAnswer: getCorrectAnswer
}



```
- Use a function to create object
```js
function isAnswerCorrect(index){
  if(index === question.correctAnswerIndex)
  return true;
  else return false;
}

function getCorrectAnswer(){
  return question.options[question.correctAnswerIndex];
}

function createObj(title, options, correctIndex){
  let obj = [];
  obj["title"] = title;
  obj["options"] = options;
  obj["correct answer"] = correctIndex;
  obj["isCorrectAnswer"] = isAnswerCorrect;
  obj["correctAnswer"] = getCorrectAnswer;
  return obj;
}
```
- Convert the function to use `this` keyword
```js
function isAnswerCorrect(index){
  if(index === this.correctAnswerIndex)
  return true;
  else return false;
}

function getCorrectAnswer(){
  return this.options[this.correctAnswerIndex];
}

function createObj(title, options, correctIndex){
  let obj = [];
  obj["title"] = title;
  obj["options"] = options;
  obj["correctAnswerIndex"] = correctIndex;
  obj["isCorrectAnswer"] = isAnswerCorrect;
  obj["correctAnswer"] = getCorrectAnswer;
  return obj;
}

let question1 = createObj("What is your name", ["lester", "cydelle", "cayleigh", "Yashu"], 0)
let question2 = createObj("What is your age", [25, 30, 35, 40], 0)
```
- Write test by creating two objects also test both methods.

### To test use the following data

```js
const testData = {
  title: 'Where is the capital of Jordan',
  options: ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
  correctAnswerIndex: 1,
};
```
