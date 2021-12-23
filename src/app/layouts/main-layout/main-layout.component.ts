import { Router } from '@angular/router';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { AuthenticationService } from 'src/app/modules/authentication/authentication.service'
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainLayoutComponent implements OnInit{

  public onSideNavChange: boolean
  public sideNavState = true
  open = false

  breadcrumbRoutes = [
    {
        caption: 'Therapyapp',
        routerLink: '/components/select',
    },
    {
        caption: 'Dashboard',
        routerLink: '/navigation/breadcrumbs',
        routerLinkActiveOptions: {exact: true},
    },
  ]

  constructor(public authService: AuthenticationService, private backend: BackendService, private router: Router) {
    this.authService.getAntiforgery()
      .subscribe(() => {
        this.backend.getUser(localStorage.getItem('userId'))
          .subscribe(user => this.authService.currentUser.next(user))
      })
  }

  ngOnInit(): void {}

  toggleSideNav(open: boolean): void {
    this.open = open
  }

  onSignOut(): void {
    this.authService.signOut()
      .subscribe(() => this.router.navigate(['/auth/signin']))
  }
}
