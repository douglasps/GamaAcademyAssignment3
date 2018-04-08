export class Option {
    text: string;
    group: string;
    value: number;
  
    constructor(text: string, value: number, group: string){
      this.text = text;
      this.value = value;
      this.group = group;
    }
  }