import { BackendService } from 'src/app/services/backend.service';
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

  pricingTier = this.fb.control('', Validators.required)

  loadingTextQueueInvite = ['Joining therapy practice...', 'Assigning storage...', 'Verifying Authentication...', 'Setting up your profile...']
  loadingTextQueueNewPractice = ['Creating therapy practice...', 'Assigning storage...', 'Verifying Authentication...', 'Setting up your profile...']

  isInvitee = false

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
    private loadingService: LoadingService,
    private backendService: BackendService
  ) {
    this.authService.refreshUser()
    this.$userName = authService.currentUser$.pipe(map(user => user.fullName))
  }

  ngOnInit(): void {
    merge(of(true).pipe(take(1)), this.router.events.pipe(debounceTime(0)))
    .pipe(delay(1))
    .subscribe(() => {
      switch (this.router.url) {
        case '/onboarding/usage': this.currentIndex = 0; break
        case '/onboarding/invite': this.currentIndex = 1; break
        case '/onboarding/pricing': this.currentIndex = 1; break
        case '/onboarding/practice': this.currentIndex = 2; break
      }
    })
  }

  showLoading(textQueue: string[]): void {
    this.spinner.show()
    this.loadingService.setLoadingTextQueue(textQueue)
    setTimeout(() => this.router.navigate(['/']), 500)
    setTimeout(() => this.spinner.hide(), 3750)
  }

  setSetupType(isInvitee: boolean): void {
    this.isInvitee = isInvitee
  }

  setPricingTier(): void {

  }

  onSubmit(): void {
    console.log(this.isInvitee)
    if (this.isInvitee) {
      this.authService.joinInvite(this.inviteCode.value).subscribe()
      this.showLoading(this.loadingTextQueueInvite)
      return
    }
    this.backendService.createTenant({name: this.practiceName.value}).subscribe(() => this.showLoading(this.loadingTextQueueNewPractice))
  }
}
