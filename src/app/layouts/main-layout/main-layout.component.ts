import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { onMainContentChange } from '../../shared/animations';
import { SidenavService } from './sidenav.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  animations: [ onMainContentChange ]
})
export class MainLayoutComponent implements OnInit{

  public onSideNavChange: boolean;
  public sideNavState = true;

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

  constructor(private sidenavService: SidenavService) {}

  ngOnInit(): void {
  }

  onSinenavToggle(): void {
    this.sideNavState = !this.sideNavState;
    this.onSideNavChange = this.sideNavState;
  }
}
