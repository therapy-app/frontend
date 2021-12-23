import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  accountDetailsForm = this.fb.group({
    fullname: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  })

  inviteCode = new FormControl('', Validators.required)
  companyName = new FormControl('', Validators.required)

  billingAddress = this.fb.group({
    address: ['', [Validators.required]],
    zipcode: ['', [Validators.required]],
    location: ['', [Validators.required]]
  })

  readonly inviteCodeMask = {
    guide: false,
    mask: [
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        '-',
        /\d/,
        /\d/,
        /\d/,
        /\d/,
      ]
  }

  stepIndex = 0
  completedIndex = 0

  signUpTypeIndex = -1

  constructor(
    public fb: FormBuilder,
    private authService: AuthenticationService
  ) { }

  ngOnInit(): void {}

  setStepIndex(index: number): void {
    if (index <= this.completedIndex) this.stepIndex = index
  }

  nextStep(): void {
    if (this.completedIndex <= this.stepIndex) this.completedIndex += 1
    this.setStepIndex(this.stepIndex + 1)
  }

  onSubmit(): void {
    console.log(this.accountDetailsForm.value)
  }

  setSignUpType(index: number): void {
    this.signUpTypeIndex = index
  }

  launch(): void {
    console.log('init account')
  }

  onSignUp(): void {
    this.authService.signUp(this.accountDetailsForm.value).subscribe(() => this.nextStep())
  }

  onStrengthChanged(e: any): void {}

}
