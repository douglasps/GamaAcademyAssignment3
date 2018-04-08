import { Option } from './option'

export class Question {
  question: string;
  rightOption: number;
  options: Option[];
  style: string;
  selectionedOption: number = -1;

  constructor(question: string, rightOption: number, options: Option[], style: string = null){
    this.question = question;
    this.rightOption = rightOption;
    this.options = options;
    this.style = style;
  }
}