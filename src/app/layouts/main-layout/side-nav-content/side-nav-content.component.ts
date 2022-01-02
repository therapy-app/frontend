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

  currentTenantName = ''

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
      multiMenu: true,
      childPages: [
        { caption: 'All Patients', routerLink: '', active: false },
        { caption: 'All Patients', routerLink: '', active: false },
      ],
    },
  ]

  open = false

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public authService: AuthenticationService,
    private backendService: BackendService
  ) {
    authService.currentUser$.subscribe((user) => {
      if (!user.selectedTenant) return
      backendService.tenants$
        .subscribe((tenants) => {
          if (!tenants.length) return
          this.currentTenantName = tenants.find(tenant => tenant.id === this.authService.currentUser.value.selectedTenant).name
        })
    })
  }

  ngOnInit(): void {
    merge(
      this.route.params,
      this.router.events.pipe(debounceTime(0))
    ).subscribe(() => {
      this.pages.forEach((page) => {
        page.active = false
        if (this.router.url.indexOf(page.routerLink) > -1) page.active = true
      })
    })
  }

  changeTenant(): void {
    this.open = false
  }

  createTenant(): void {
    this.open = false
  }

  joinTenant(): void {
    this.open = false
  }
}
