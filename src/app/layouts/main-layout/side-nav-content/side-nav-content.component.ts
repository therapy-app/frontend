import { SideNavService } from './side-nav.service';
import { BackendService } from 'src/app/services/backend.service';
import { AuthenticationService } from './../../../modules/authentication/authentication.service';
import { AfterContentInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
import { merge } from 'rxjs';

@Component({
  selector: 'app-side-nav-content',
  templateUrl: './side-nav-content.component.html',
  styleUrls: ['./side-nav-content.component.scss'],
})
export class SideNavContentComponent implements OnInit {
  public sideNavState = true
  public linkText = true
  public pages: any[] = [
    {
      caption: 'Dashboard',
      routerLink: 'dashboard',
      icon: 'grid',
      active: false,
      multiMenu: false,
    },
    {
      caption: 'Patients',
      routerLink: 'patients',
      icon: 'user',
      active: false,
      multiMenu: false,
    },
  ]

  open = false

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public authService: AuthenticationService,
    private sideNavService: SideNavService,
    private backendService: BackendService
  ) {}

  ngOnInit(): void {
    merge(
      this.route.params,
      this.router.events.pipe(debounceTime(1))
    ).subscribe(() => {
      console.log(this.router.url)
      this.pages.forEach((page) => {
        page.active = false
        if (this.router.url.indexOf(page.routerLink) > -1) {
          page.active = true
          this.sideNavService.currentNav.next(page.caption)
        }
      })
    })
  }

  createTenant(): void {
    this.open = false
  }

  joinTenant(): void {
    this.open = false
  }
}
