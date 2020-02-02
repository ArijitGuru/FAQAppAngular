import { Question } from './../models/Question';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  questions: Question[];
  constructor() { 
    
    /*
    this.questions = [
     
      {
        text: 'What is your name?',
        answer: 'Arijit',
        hide: true
      },
      {
        text: 'What is your favorite color?',
        answer: 'Purple',
        hide: true
      },
      {
        text: 'Where do you live?',
        answer: 'USA',
        hide: true
      }

    ];
    */
  }

  //Get Questions from localStrorage
  getQuestions(){
    //remember to clear localStorage in Browser. Sometimes it causes problem.
    if (localStorage.getItem('questions') === null){
       this.questions = [];
     }else{
       this.questions = JSON.parse(localStorage.getItem('questions'));
     }
    return this.questions;
  }

  //Add Questions to localStorage
  addQuestion(question: Question){
    this.questions.unshift(question);

    let questionsLocal;
     if (localStorage.getItem('questions') === null){
      questionsLocal = [];
      questionsLocal.unshift(question);
      localStorage.setItem('questions', JSON.stringify(questionsLocal));

     }else{
       questionsLocal = JSON.parse(localStorage.getItem('questions'));
       questionsLocal.unshift(question);
       localStorage.setItem('questions', JSON.stringify(questionsLocal));
     }

  }

  //remove Question from localStorage
  removeQuestion(question:Question){
    for (let i=0; i<this.questions.length; i++){
      if (question == this.questions[i]){
        this.questions.splice(i, 1);
        localStorage.setItem('questions', JSON.stringify(this.questions));
      }
    }
  }
}
