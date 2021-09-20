import { Component, OnInit } from '@angular/core';
import { onSideNavChange, animateText } from '../../../shared/animations';
import { SidenavService } from '../sidenav.service';

@Component({
  selector: 'app-side-nav-content',
  templateUrl: './side-nav-content.component.html',
  styleUrls: ['./side-nav-content.component.scss'],
  animations: [onSideNavChange, animateText]
})
export class SideNavContentComponent {

  public sideNavState: boolean = true;
  public linkText: boolean = true;

  public pages: any[] = [
    {name: 'Inbox', link: 'some-link', icon: 'inbox'},
    {name: 'Starred', link: 'some-link', icon: 'star'},
    {name: 'Send email', link: 'some-link', icon: 'send'},
  ]

  constructor(private _sidenavService: SidenavService) {
    this._sidenavService.sideNavState$.subscribe( res => {
      this.sideNavState = res;
      setTimeout(() => {
        this.linkText = res;
      }, 200)
    })
  }
}
