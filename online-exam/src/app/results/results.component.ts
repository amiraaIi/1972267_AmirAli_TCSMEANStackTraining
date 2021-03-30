import { Component, OnInit } from '@angular/core';
import { ExamService } from '../exam.service';
import { Question } from '../question.model';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  questions: Array<Question> = [];
  userAnswers: Array<any> = [];
  correctAnswers: Array<any> = [];
  viewResults: boolean = false;
  totalScore: number = 0;
  totalQuestions: number = 0;
  passed: boolean = false;
  constructor(public service: ExamService) { }

  ngOnInit(): void {
    this.service.loadQuestions().subscribe(data => this.questions = data);
    this.userAnswers = JSON.parse(sessionStorage.getItem("answers") || '{}');
  }

  showResults() {
    this.totalQuestions = this.questions.length;

    for (let question of this.questions) {
      for (let choice of question.choices) {
        if (choice.isCorrect) {
          this.correctAnswers.push(choice.answer);
        }
      }
    }

    for (let answer of this.userAnswers) {
      if (answer.isCorrect) {
        this.totalScore++;
      }
    }

    if (this.totalScore/this.totalQuestions >= .60) {
      this.passed = true;
    }
    this.viewResults = true;
  }

}