import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm!: FormGroup;

  constructor(private readonly router: Router, private readonly formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.initForm();
    console.log(this.loginForm)
  }

  onSubmit(): void {
    const navigationExtras: NavigationExtras = {
      state: this.loginForm.value.email
    };
    this.router.navigate(['/home'], navigationExtras);

    //this.router.navigate(['/home']);
  }

  initForm(): FormGroup {
    return this.formBuilder.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required]]
    });
  }



}
