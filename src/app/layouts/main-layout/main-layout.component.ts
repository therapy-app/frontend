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
export class MainLayoutComponent {

  public onSideNavChange: boolean;
  public sideNavState = true;

  constructor(private sidenavService: SidenavService) {}

  onSinenavToggle(): void {
    this.sideNavState = !this.sideNavState;
    this.onSideNavChange = this.sideNavState;
    this.sidenavService.sideNavState$.next(this.sideNavState);
  }
}
