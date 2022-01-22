import { SideNavService } from './side-nav-content/side-nav.service';
import { debounceTime, take, delay } from 'rxjs/operators'
import { ActivatedRoute, NavigationStart, Router } from '@angular/router'
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { AuthenticationService } from 'src/app/modules/authentication/authentication.service'
import { BackendService } from 'src/app/services/backend.service'
import { NgxSpinnerService } from 'ngx-spinner'
import { LoadingService } from 'src/app/services/loading.service'
import { merge, of } from 'rxjs'

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayoutComponent implements OnInit {
  public onSideNavChange: boolean
  public sideNavState = true
  open = false

  breadcrumbPrefix = {
    caption: 'Therapyapp',
    routerLink: '/'
  }

  breadcrumbRoutes = [
    this.breadcrumbPrefix
  ]

  constructor(
    public authService: AuthenticationService,
    private router: Router,
    private backend: BackendService,
    private sideNavService: SideNavService
  ) {
    this.authService.refreshUser()
    this.backend.getTenants()
  }

  ngOnInit(): void {
    this.sideNavService.currentNav
      .subscribe((val: string) => {
        this.breadcrumbRoutes[1] = {
          caption: val,
          routerLink: this.router.url
        }
      })
  }

  toggleSideNav(open: boolean): void {
    this.open = open
  }

  onSignOut(): void {
    this.authService
      .signOut()
      .subscribe(() => this.router.navigate(['/auth/signin']))
  }
}
