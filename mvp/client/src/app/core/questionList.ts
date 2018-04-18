import { Question } from './question'

export class QuestionList {
    questions: Question[];
    email: string;

    constructor(email: string, questions: Question[]){
        this.email = email;
        this.questions = questions;
    }

    calculateScore(){
        let scoreByArea = {};
        let count = 0;
        this.questions.forEach(question =>{
            if(!scoreByArea[question.area])
                scoreByArea[question.area] = { score: 0, total: 0 };

            scoreByArea[question.area].total += 1;
            if(question.rightOption == question.selectionedOption){
                count += 1;
                scoreByArea[question.area].score += 1;
            }
        });
        
        let areas = Object.keys(scoreByArea).map(key => 
            new Area(key, scoreByArea[key].score, scoreByArea[key].total));
        return new Score(count, this.questions.length, areas);
    }
}  

export class Score{
    score: number;
    message: string;
    areas: Area[];

    constructor(score: number, total: number, areas : Area[]){
        this.score = score;
        let level = this.getLevel(score);
        this.areas = areas;
        this.message = `O seu nível é "${ level }" (${score}/${total}) ! 
        ${ this.getMessage(score) }`
    }

    private getLevel(score: number) : string{
        return score > 8 ? 'Avançado'
            : score > 5 ? 'Intermediário'
            : score > 2 ? 'Básico'
            : 'Iniciante';
    }

    private getMessage(score: number) : string{
        if(score > 8)
            return 'Segundo os resultados do formulário respondido, você se encaixa no nível avançado quando falamos em Inside sales, forma que vem sendo utilizado para complementar os novos processos de vendas, focados na solução de problemas de clientes, otimização do trabalho dos vendedores, aumento de faturamento e drástica redução de custos. Este é muito implementado em empresas que trabalham com tecnologia e inovação. Você já é um vendedor Inside sales!';
        if(score > 5)
            return 'Segundo os resultados do formulário respondido, você se encaixa no nível básico quando falamos em Inside sales, forma que vem sendo utilizado para complementar os novos processos de vendas, focados na solução de problemas de clientes, otimização do trabalho dos vendedores, aumento de faturamento e drástica redução de custos. Este é muito implementado em empresas que trabalham com tecnologia e inovação. Você está no caminho, precisa estudar mais sobre Inside sales!';
        if(score > 2)
            return 'Segundo os resultados do formulário respondido, você se encaixa no nível básico quando falamos em Inside sales, forma que vem sendo utilizado para complementar os novos processos de vendas, focados na solução de problemas de clientes, otimização do trabalho dos vendedores, aumento de faturamento e drástica redução de custos. Este é muito implementado em empresas que trabalham com tecnologia e inovação. Você tem pouca noção sobre Inside sales!';
        return 'Segundo os resultados do formulário respondido, você se encaixa no nível iniciante quando falamos em Inside sales, forma que vem sendo utilizado para complementar os novos processos de vendas, focados na solução de problemas de clientes, otimização do trabalho dos vendedores, aumento de faturamento e drástica redução de custos. Este é muito implementado em empresas que trabalham com tecnologia e inovação. Você ainda sabe pouco sobre Inside sales!';
    }
}

export class Area{
    name: string;
    score: number;
    total: number;

    constructor(name: string, score: number, total: number){
        this.name = name;
        this.score = score;
        this.total = total;
    }

    get percentual(){
        return this.score > 0 ? this.score/this.total : 0;
    }

    get message(){
        return `Você teve "${ (Math.round(this.percentual * 100)).toFixed(2) }"% de aproveitamento em ${ this.name }!`;
    }
}
