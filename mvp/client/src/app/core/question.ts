import { Option } from './option'

export class Question {
  question: string;
  rightOption: number;
  options: Option[];
  style: string;
  selectionedOption: number = -1;
  area: string;

  constructor(question: string, rightOption: number, options: Option[], style: string = null, area: string){
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