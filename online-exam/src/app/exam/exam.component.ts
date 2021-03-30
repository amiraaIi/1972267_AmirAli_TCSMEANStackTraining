import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExamService } from '../exam.service';
import { Question } from '../question.model';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
  questions: Array<Question> = [];
  answers: Array<any> = [];
  constructor(public service: ExamService, public router: Router) { }

  ngOnInit(): void {
    this.service.loadQuestions().subscribe(data => this.questions = data);
  }

  submitExam() {
    sessionStorage.setItem("answers", JSON.stringify(this.answers));
    console.log(this.answers);
    this.router.navigate(["\score"]);
  }
}
