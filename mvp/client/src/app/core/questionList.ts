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
        let level = this.getLevel(score);
        this.message = `<h4>O seu nível é "${ level }" (${score}/${total})</h4><br/>
        <h5>${ this.getMessage(score) }</h5>`
    }

    private getLevel(score: number) : string{
        return score > 9 ? 'Avançado'
            : score > 6 ? 'Intermediário'
            : score > 3 ? 'Básico'
            : 'Iniciante';
    }

    private getMessage(score: number) : string{
        if(score > 9)
            return 'Segundo os resultados do formulário respondido, você se encaixa no nível avançado quando falamos em Inside sales, forma que vem sendo utilizado para complementar os novos processos de vendas, focados na solução de problemas de clientes, otimização do trabalho dos vendedores, aumento de faturamento e drástica redução de custos. Este é muito implementado em empresas que trabalham com tecnologia e inovação. Você já é um vendedor Inside sales!';
        if(score > 6)
            return 'Segundo os resultados do formulário respondido, você se encaixa no nível básico quando falamos em Inside sales, forma que vem sendo utilizado para complementar os novos processos de vendas, focados na solução de problemas de clientes, otimização do trabalho dos vendedores, aumento de faturamento e drástica redução de custos. Este é muito implementado em empresas que trabalham com tecnologia e inovação. Você está no caminho, precisa estudar mais sobre Inside sales!';
        if(score > 3)
            return 'Segundo os resultados do formulário respondido, você se encaixa no nível básico quando falamos em Inside sales, forma que vem sendo utilizado para complementar os novos processos de vendas, focados na solução de problemas de clientes, otimização do trabalho dos vendedores, aumento de faturamento e drástica redução de custos. Este é muito implementado em empresas que trabalham com tecnologia e inovação. Você tem pouca noção sobre Inside sales!';
        return 'Segundo os resultados do formulário respondido, você se encaixa no nível iniciante quando falamos em Inside sales, forma que vem sendo utilizado para complementar os novos processos de vendas, focados na solução de problemas de clientes, otimização do trabalho dos vendedores, aumento de faturamento e drástica redução de custos. Este é muito implementado em empresas que trabalham com tecnologia e inovação. Você ainda sabe pouco sobre Inside sales!';
    }
}