import { LoadingService } from './../../services/loading.service';
import { Component, OnInit } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { NgxSpinnerService } from 'ngx-spinner'
import { merge, Observable, of } from 'rxjs'
import { debounceTime, delay, map, take } from 'rxjs/operators'
import { AuthenticationService } from '../authentication/authentication.service'

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss']
})
export class OnboardingComponent implements OnInit {
  inviteCode = this.fb.control('', Validators.required)
  practiceName = this.fb.control('', Validators.required)
  $userName = new Observable<string>()
  currentIndex = 0


  loadingTextQueueInvite = ['Joining therapy practice...', 'Assigning storage...', 'Verifying Authentication...', 'Setting up your profile...']
  loadingTextQueueNewPractice = ['Creating therapy practice...', 'Assigning storage...', 'Verifying Authentication...', 'Setting up your profile...']

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
    private spinner: NgxSpinnerService,
    private loadingService: LoadingService
  ) {
    this.authService.refreshUser()
    this.$userName = authService.currentUser$.pipe(map(user => user.fullName))
  }

  ngOnInit(): void {
    merge(of(true).pipe(take(1)), this.router.events.pipe(debounceTime(0)))
    .pipe(delay(1))
    .subscribe(() => {
      switch(this.router.url) {
        case '/onboarding/usage': this.currentIndex = 0; break;
        case '/onboarding/invite': this.currentIndex = 1; break;
        case '/onboarding/practice': this.currentIndex = 1; break;
      }
    })
  }

  showLoading(): void {
    this.spinner.show()
    this.loadingService.setLoadingTextQueue(this.isNewPractice ? this.loadingTextQueueNewPractice :  this.loadingTextQueueInvite)
    setTimeout(() => this.router.navigate(['/']), 500);
    setTimeout(() => this.spinner.hide(), 3750);
  }

  setSetupType(isNewPractice: boolean): void {
    this.isNewPractice = isNewPractice
  }

  onSubmit(): void {
    if (!this.isNewPractice) {
      this.authService.joinInvite(this.inviteCode.value).subscribe()
      this.showLoading()
      return
    }
    this.showLoading()
  }
}
