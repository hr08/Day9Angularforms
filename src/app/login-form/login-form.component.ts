import { Component, OnInit } from'@angular/core';
import {FormGroup, Validators, FormBuilder} from'@angular/forms';
import {Router} from '@angular/router';
//import {AuthenticationService} from '@angular/auth.service';
 
@Component({
selector:'app-login-form',
templateUrl:'./login-form.component.html',
styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
 
loginForm: FormGroup;
submitted = false;
invalidLogin = false;
constructor(private formBuilder: FormBuilder) { }
 
onSubmit()
 {
    this.submitted = true;
if(this.loginForm.invalid){
    return;
 }
if(this.loginForm.controls.email.value === 'rawatharsh30@gmail.com' &&
    this.loginForm.controls.password.value === 'password'){
    window.alert("Login successful!!");
 }
else{
    this.invalidLogin = true;
 }
 }
 
ngOnInit() {
    this.loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    });
 }
 
}
