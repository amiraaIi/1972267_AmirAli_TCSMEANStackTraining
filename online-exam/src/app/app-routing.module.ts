import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamComponent } from './exam/exam.component';
import { ResultsComponent } from './results/results.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [
  {path: "\start", component: StartComponent},
  {path: "\exam", component: ExamComponent},
  {path: "\score", component: ResultsComponent},
  {path: "", redirectTo: "\start", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
