import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { AuthToken } from './../auth/auth.token';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/observable/throw';
import { Lead } from './../core/lead';
import { Question } from './../core/question';
import { QuestionList } from './../core/questionList';
import { Option } from './../core/option';
import { BaseDal } from './base-dal.service'

@Injectable()
export class ApiService {
  private _API = `${environment.apiRoot}api`;
  private _dal: BaseDal<QuestionList> = new BaseDal('mvp-questions', QuestionList, 'email', 'questions');
  private _dalLead: BaseDal<Lead> = new BaseDal('leads', Lead, 'fullName', 'email', 'datetime', 'phone', 'password');
  private _questionList: QuestionList;

  constructor(
    private http: HttpClient,
    private token: AuthToken) { 
      this._generateQuestionList();
    }

  autenticate(email: string, password: string){
    return new Promise<boolean>(resolve => {
      this._dalLead.getAll()
        .then(leads => {
          if(leads == null){
            resolve(false);
            return;
          } 
          let logins = leads.filter(l => l.email == email && l.password == password);
          resolve(logins.length > 0);
        })
    });
  }

  saveQuestions(){
    if(this.token && this.token.token)
    {
      this._questionList.email = this.token.token.email;
    }
    this._dal.save(this._questionList);
  }

  getQuestions$(): QuestionList {
    return this._questionList;
  }

  private _generateQuestionList(){
    var group = 0; 
    var questions : Question[] = [
      new Question('Qual alternativa abaixo NÃO contém todos os termos associados a área de vendas?',
        4, 
        [
          new Option('Call Plan, SDR, MQL e Prospect.', 0, `${++group}`), 
          new Option('Cadência, Inside Sales, Champion Letter e SLA.', 1, `${group}`),
          new Option('Call Plan, SDR, Inside Sales e SAL.', 2, `${group}`),
          new Option('Cadência, Champion Letter, Prospect e SAL.', 3, `${group}`),
          new Option('MFV, Lead Time, Deal e Query.', 4, `${group}`)
        ],null,1),

      new Question(`Os três perfis de vendedor mais conhecidos são: Ativista, Moderador e Comunicativo. 
      A afirmação anterior está:`,
        0,
        [
          new Option('Incorreta', 0, `${++group}`), 
          new Option('Correta', 1, `${group}`)
        ],null,1),

      new Question(`Selecione a alternativa que completa a frase de forma correta.

      "A_____se finaliza quando o_____consegue o primeiro contato com o_____. Caso o processo de_____confirme que o lead está dentro do_____, uma reunião é agendada com o_____.`,
        2,
        [
          new Option('Descoberta, Account Executive, Lead, Verificação, IMC, Customer Success.', 0, `${++group}`), 
          new Option('Champion Letter, SDR, Visitante, CheckList, Buyer Persona, Account Executive.', 1, `${group}`),
          new Option('Cadência, SDR, Lead, Qualificação, ICP, Account Executive.', 2, `${group}`),
          new Option('Cadência, MQL, Lead, Qualificação, IMC, SDR.', 3, `${group}`),
          new Option('Descoberta, Account Executive, Visitante, Qualificação, ICP, SDR.', 4, `${group}`)
        ],null,1),

      new Question (`Assinale a alternativa que contém todas as afirmações verdadeiras. 

      I) BANT é a abreviação de: Business, Authority, Native e Time.
      II) ICP representa os melhores potenciais clientes de uma empresa.
      III) "MQL" é uma etapa do Funil de Vendas que ocorre antes da etapa "SAL". 
      IV) SPIN é um processo de desconto regressivo muito utilizado para fechar vendas. 
      V) Cold Email é um e-mail enviado após uma venda não ser concretizada. 
      VI) Breakup é um e-mail de última tentativa de contato com o lead.`,
        2,
        [
          new Option('I, II, V.', 0, `${++group}`), 
          new Option('IV, V, III.', 1, `${group}`),
          new Option('II, III, VI.', 2, `${group}`),
          new Option('IV, V, VI.', 3, `${group}`),
          new Option('nenhum das alternativas anteriores.', 4, `${group}`)
        ],null,1),

      new Question('Qual das opções segue a ordem correta do Funil de Vendas:',
        0,
        [
          new Option('Conexão -> Qualificação -> Demo -> Propostas -> Fechamento.', 0, `${++group}`), 
          new Option('Qualificação -> Demo -> Conexão -> Proposta -> Fechamento.', 1, `${group}`),
          new Option('Qualificação -> Conexão -> Demo -> Proposta -> Fechamento.', 2, `${group}`),
          new Option('Conexão -> Qualificação -> Propostas -> Demo -> Fechamento.', 3, `${group}`),
          new Option('nenhuma das alternativas anteriores.', 4, `${group}`)
        ],null,2),

      new Question(`SLA entre SDRs e Account Executives são regras estabelecidas em conjuntos por ambas partes durante todo o processo de abordagem comercial. 
      A afirmação anterior está:`,
        0,
        [
          new Option('Correta', 0, `${++group}`), 
          new Option('Incorreta', 1, `${group}`)
        ],null,2),

      new Question(`Assinale a alternativa correta: 

      i) Seeds são leads que vieram de indicações de pessoas que já são cliente de uma empresa. 

      ii) Spears são leads que vieram através do Inbound Marketing. 

      iii) Nets são leads capturados de forma Offline.`,
        2,
        [
          new Option('i, ii e iii', 0, `${++group}`), 
          new Option('Apenas a i', 1, `${group}`),
          new Option('i e ii', 2, `${group}`),
          new Option('Apenas a iii', 2, `${group}`),
          new Option('nenhuma das alternativas anteriores.', 2, `${group}`)
        ],null,2),

      new Question(`GPCT-CI é um dos mais famosos frameworks de qualificação de leads usado em abordagens comerciais. 
      Assinale a alternativa que contém o nome e a explicação correta:`,
        2,
        [
          new Option('Goals (Objetivo): objetivo que o vendedor possui durante a call.', 0, `${++group}`), 
          new Option('Patience (Paciência): representa a paciência que o prospect demonstra durante a abordagem comercial.', 1, `${group}`),
          new Option('Challenges (Desafios): representa os desafios que o prospect possui na empresa dele e podem ser explorados na abordagem comercial.', 2, `${group}`),
          new Option('Time (Tempo): representa o tempo máximo que o vendedor deve ficar em call.', 3, `${group}`),
          new Option('Insurance (Seguro): demonstra o quão seguro o prospect está para fechar uma venda.', 4, `${group}`),
        ],null,3),

        new Question('Qual a cadência equivalente ao quadrante abaixo?',
        2,
        [
          new Option('Medium touch', 0, `${++group}`), 
          new Option('Low touch', 1, `${group}`),
          new Option('High touch', 2, `${group}`),
        ],
        'img-cadencia',3),

      new Question('Assinale a imagem que contém a ordem correta para os critérios de Segmentação do ICP:',
        1,
        [
          new Option('', 0, `${++group}`, 'img-funil1'), 
          new Option('', 1, `${group}`, 'img-funil2'),
          new Option('', 2, `${group}`, 'img-funil3'),
          new Option('', 3, `${group}`, 'img-funil4'),
          new Option('', 4, `${group}`, 'img-funil5')
        ],null,3),
      ];

      let token = this.token.token;
      let email;
      if(token)
        email = token.email;
      this._questionList = new QuestionList(email, questions);
  }

}