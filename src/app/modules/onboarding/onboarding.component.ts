import { Component, OnInit } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { NgxSpinnerService } from 'ngx-spinner'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { AuthenticationService } from '../authentication/authentication.service'

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss']
})
export class OnboardingComponent implements OnInit {
  inviteCode = this.fb.control('', Validators.required)
  companyName = this.fb.control('', Validators.required)
  $userName = new Observable<string>()

  isNewPractice = false

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

  constructor(
    private fb: FormBuilder,
    public router: Router,
    private authService: AuthenticationService,
    private spinner: NgxSpinnerService
  ) {
    this.authService.refreshUser()
    this.$userName = authService.currentUser$.pipe(map(user => user.fullName))
  }

  ngOnInit(): void {}

  onSucceess(): void {
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
  }

  setSetupType(isNewPractice: boolean): void {
    this.isNewPractice = isNewPractice
  }

  verifyInvite(): void {

  }
}
