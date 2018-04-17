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

    calculaAreaPreVendas(){   
           
    }
    calculaAreaVendas(){
    }
    calculaAreaTecnica(){
    }
}  

export class Score{
    score: number;
    message: string;

    constructor(score: number, total: number){
        this.score = score;
        let level = this.getLevel(score);
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

export class AreaPreVendas{
    areaPreVendas: number;
    messageAreaPreVendas: string;

    constructor(areaPreVendas: number, total: number){
        this.areaPreVendas = areaPreVendas;
        let level = this.getAreaPreVendas(areaPreVendas);
        this.messageAreaPreVendas = `Você teve "${ level }"% de aproveitamento em Pré-vendas!`
    }

    private getAreaPreVendas(areaPreVendas:number){
        return areaPreVendas > 3 ? '100'
            :areaPreVendas > 2 ? '75'
            :areaPreVendas > 1 ? '50'
            :areaPreVendas > 0 ? '25'
            :'0';
    }
}

export class AreaVendas{
    areaVendas: number;
    messageAreaVendas: string;

    constructor(areaVendas: number, total: number){
        this.areaVendas = areaVendas;
        let level = this.getAreaVendas(areaVendas);
        this.messageAreaVendas = `Você teve "${ level }"% de aproveitamento em Vendas!`
    }

    private getAreaVendas(areaVendas:number){
        return areaVendas > 2 ? '100'
            :areaVendas > 1 ? '66,6'
            :areaVendas > 0 ? '33,3'
            :'0';
    }
}

export class AreaTecnica{
    areaTecnica: number;
    messageAreaTecnica: string;

    constructor(areaTecnica: number, total: number){
        this.areaTecnica = areaTecnica;
        let level = this.getAreaTecnica(areaTecnica);
        this.messageAreaTecnica = `Você teve "${ level }"% de aproveitamento em Técnicas de Vendas!`
    }

    private getAreaTecnica(areaTecnica:number){
        return areaTecnica > 2 ? '100'
            :areaTecnica > 1 ? '66,6'
            :areaTecnica > 0 ? '33,3'
            :'0';
    }
}
