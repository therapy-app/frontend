import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { AuthenticationService } from 'src/app/modules/authentication/authentication.service'

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

  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {}

  toggleSideNav(open: boolean): void {
    this.open = open
    console.log(this.open)
  }

  onSignOut(): void {
    this.authService.signOut()
  }
}
