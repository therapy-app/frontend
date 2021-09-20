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
  public sideNavState: boolean = true;

  constructor(private _sidenavService: SidenavService) {}

  onSinenavToggle() {
    this.sideNavState = !this.sideNavState
    this.onSideNavChange = this.sideNavState;
    this._sidenavService.sideNavState$.next(this.sideNavState)
  }
}
