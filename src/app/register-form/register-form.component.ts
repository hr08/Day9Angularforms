import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from'@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  loginForm:FormGroup;
  submitted=false;
  invaidLogin=false;
  constructor(private formBuilder:FormBuilder) { }
  
onSubmit() {
this.submitted=true;
if (this.loginForm.invalid) {
console.log('Form invalid');
return;
 }
if (this.loginForm.controls.email.value==='rawatharsh30@gmail.com' && this.loginForm.controls.password.value==='password') {
window.alert('Login is successful');
console.log('login is successful');
 } else {
this.invaidLogin=true;
console.log('Invalid details');
 }
 }
 
ngOnInit() {
this.loginForm=this.formBuilder.group({
id : ['',[ Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
name: ['', [ Validators.required, Validators.maxLength(50), Validators.pattern('^[a-zA-Z ]*$')]],
email: ['',[Validators.required, Validators.email]],
password : ['', [Validators.required, 
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
mobileno : ['',[Validators.required, Validators.pattern('^-?[0-9]\\d*(\\.\\d{1,2})?$')]],
 });
 }
 
}

/* 

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [ Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      name: ['', [
        Validators.required,
        Validators.maxLength(50),
        Validators.pattern('^[a-zA-Z ]*$')]],
      mobileno: ['', [ Validators.required, Validators.maxLength(10), Validators.pattern('^[0-9]$')]]
    });
  }

} */