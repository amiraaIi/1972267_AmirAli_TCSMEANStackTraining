import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: "\login", component: LoginComponent},
  {path: "\pregister", component: RegisterComponent},
  {path: "\portfolio", component: PortfolioComponent},
  {path: "", redirectTo: "\login", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
