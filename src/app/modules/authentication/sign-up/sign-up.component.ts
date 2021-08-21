import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpForm = this.fb.group({
    firstname: ['', [Validators.required]],
    lastname: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    address: ['', [Validators.required]],
    zipcode: ['', [Validators.required]],
    location: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  constructor(
    public fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

}
