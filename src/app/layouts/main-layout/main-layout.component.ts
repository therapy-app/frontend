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
    private route: ActivatedRoute,
    private backend: BackendService
  ) {
    this.authService.refreshUser()
    this.backend.getTenants()
  }

  ngOnInit(): void {
    merge(
      of(new NavigationStart(undefined, '')).pipe(take(1)),
      this.router.events
    )
    .subscribe((res) => {
      if (!(res instanceof NavigationStart)) {
        return
      }

      const breadcrumbRoute = {
        caption: this.route.snapshot.routeConfig.children.find((child) => {
          return `/${child.path}` === this.router.url
        }).data.title,
        routerLink: this.router.url
      }
      this.breadcrumbRoutes[1] = breadcrumbRoute
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
