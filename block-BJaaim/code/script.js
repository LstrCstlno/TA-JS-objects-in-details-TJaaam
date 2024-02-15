class Questions{
    constructor(question, options, correctAnswer){
        this.question = question;
        this.options = options;
        this.correctAnswer = correctAnswer;
    }
    isCorrect(answer){
        if(answer === this.correctAnswer){
            return true;
        }
        else{
            return false;
        }
    }
    getCorrectAnswer(){
        return this.correctAnswer;
    }
    createUI(){
        let div = document.createElement("div")
        let question = document.createElement("p");
        question.innerText = this.question;
        let options = document.createElement(ul)
        let option1 = document.createElement(li);
        option1.innerText = this.options[0];
        let option2 = document.createElement(li);
        option2.innerText = this.options[1];
        let option3 = document.createElement(li);
        option3.innerText = this.options[2];
        let option4 = document.createElement(li);
        option4.innerText = this.options[3];
        options.append(option1,option2,option3,option4);
        div.append(question, options);
    }
}

class Quiz{
    constructor(allQuestions = [], activeIndex,score = 0){
        this.allQuestions = allQuestions;
        this.activeIndex = activeIndex;
        this.score = score
    }
    nextQuestion(){
        this.activeIndex = this.activeIndex + 1;
    }
    updateScore(){
        if(isCorrectAnswer() === true){
            this.score = this.score + 1;
            return this.score;
        }
    }
}