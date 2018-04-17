import { Option } from './option'

export class Question {
  question: string;
  rightOption: number;
  options: Option[];
  style: string;
  selectionedOption: number = -1;
  area: number;

  constructor(question: string, rightOption: number, options: Option[], style: string = null, area: number){
    this.question = question;
    this.rightOption = rightOption;
    this.options = options;
    this.style = style;
    this.area = area;
  }

  get isFilled(): boolean{
    return this.selectionedOption > -1;
  }
}