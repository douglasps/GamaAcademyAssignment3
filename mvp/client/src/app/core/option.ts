export class Option {
    text: string;
    group: string;
    value: number;
    style: string;
  
    constructor(text: string, value: number, group: string, style: string = null){
      this.text = text;
      this.value = value;
      this.group = group;
      this.style = style;
    }
  }