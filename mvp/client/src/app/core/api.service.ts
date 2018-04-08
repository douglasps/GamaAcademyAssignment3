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
    this._dal.save(this._questionList);
  }

  getQuestions$(): QuestionList {
    return this._questionList;
  }

  private _generateQuestionList(){
    var group = 0; 
    var questions : Question[] = [
      new Question('Lead são as pessoas e empresas interessadas em um determinado produto ou serviço?',
        0, 
        [
          new Option('Certo', 0, `${++group}`), 
          new Option('Errado', 1, `${group}`)
        ]),
      new Question('Qual da opções com estágios de vendas a seguir estão na ordem correta?',
        1,
        [
          new Option('Conexão -> qualificação -> proposta -> demo -> fechamento', 0, `${++group}`), 
          new Option('Conexão -> qualificação -> demo -> propostas -> fechamento', 1, `${group}`),
          new Option('Conexão -> proposta -> demo -> qualificação -> fechamento', 2, `${group}`)
        ]),
      new Question('A cadência high touch é ligada às pesquisas breves e interações leves?',
        1,
        [
          new Option('Certo', 0, `${++group}`), 
          new Option('Errado', 1, `${group}`)
        ]),
      new Question('Qual das alternativas abaixo fazem parte da cadência de atividades?',
        0,
        [
          new Option('Pesquisa e prospecção', 0, `${++group}`), 
          new Option('Pesquisa e conexão', 1, `${group}`),
          new Option('Conexão e Solução ideal', 2, `${group}`),
        ]),
      new Question('Qual a cadência equivalente ao quadrante abaixo?',
        2,
        [
          new Option('Medium touch', 0, `${++group}`), 
          new Option('Low touch', 1, `${group}`),
          new Option('High touch', 2, `${group}`),
        ],
        'img-cadencia'),
      new Question('Quanto aos leads, o segmento que diz respeito aos seeds é:',
        1,
        [
          new Option('Ações de marketing, uso das redes sociais', 0, `${++group}`), 
          new Option('Orgânicos, com indicações', 1, `${group}`),
          new Option('Outbound, perfil de cliente ideal', 2, `${group}`),
        ]),
      new Question('A sigla ICP significa Ideal Costumer Profile?',
        0,
        [
          new Option('Certo', 0, `${++group}`), 
          new Option('Errado', 1, `${group}`)
        ]),
      new Question('Quais são os três principais tipos de vendedores?',
        2,
        [
          new Option('Carismático, sistemático e de processos', 0, `${++group}`), 
          new Option('Sistemático, ativista e motivador', 1, `${group}`),
          new Option('Carismático, ativista e de processos', 2, `${group}`),
        ]),
      new Question('Hunters são profissionais que prospectam, entram em contato e realizam parte da qualificação de leads?',
        0,
        [
          new Option('Certo', 0, `${++group}`), 
          new Option('Errado', 1, `${group}`)
        ]),
      new Question('Buyer Personas é o público alvo que se deseja atingir.',
        1,
        [
          new Option('Certo', 0, `${++group}`), 
          new Option('Errado', 1, `${group}`)
        ]),
      new Question('O Elevator Pitch é poder criar um discurso de convencimento que funcione e seja breve.',
        0,
        [
          new Option('Certo', 0, `${++group}`), 
          new Option('Errado', 1, `${group}`)
        ]),
      new Question('Os passo a passo de uma call plan é organização da agenda, definição de objetivos e definição do sucesso.',
        0,
        [
          new Option('Certo', 0, `${++group}`), 
          new Option('Errado', 1, `${group}`)
        ]),
      ];

      let token = this.token.token;
      let email;
      if(token)
        email = token.email;
      this._questionList = new QuestionList(email, questions);
  }

}
