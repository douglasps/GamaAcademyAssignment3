import { Question } from './question';

export class BinaryQuestion extends Question{

    value: boolean;

    constructor(question: string) {
        super(question);
    }
}