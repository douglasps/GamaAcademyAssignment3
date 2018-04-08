import { Question } from './question'

export class QuestionList {
    questions: Question[];
    email: string;

    constructor(email: string, questions: Question[]){
        this.email = email;
        this.questions = questions;
    }

    calculateScore(){
        let score = this.questions.reduce((count, question) => 
            count += question.rightOption == question.selectionedOption ? 1 : 0
        , 0);
        return new Score(score, this.questions.length);
    }
}  

export class Score{
    score: number;
    message: string;

    constructor(score: number, total: number){
        this.score = score;
        let level = score > 9 ? 'Expert'
            : score > 6 ? 'Avançado'
            : score > 3 ? 'Intermediário'
            : 'Iniciante';
        this.message = `O seu nível é "${ level }" (${score}/${total})`
    }
}