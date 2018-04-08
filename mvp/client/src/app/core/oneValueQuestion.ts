import { Question } from './question';

export class OneValueQuestion extends Question{

    value: number;

    constructor(question: string) {
        super(question);
    }
}