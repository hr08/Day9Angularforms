import { NgModule, Component } from '@angular/core';
import { Routes, Route,RouterModule } from '@angular/router';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LoginFormComponent } from './login-form/login-form.component';


const routes: Routes = [
  {
    path: '', component: LoginFormComponent},
  
  { path: 'register',
   component: RegisterFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
