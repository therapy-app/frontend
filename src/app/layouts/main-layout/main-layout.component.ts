import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainLayoutComponent implements OnInit{

  public onSideNavChange: boolean;
  public sideNavState = true;
  open = false;

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
  ];

  constructor() {}

  ngOnInit(): void {
  }

  toggleSideNav(open: boolean): void {
    this.open = open;
    console.log(this.open)
  }
}
