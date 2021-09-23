import { AfterContentInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { onSideNavChange, animateText } from '../../../shared/animations';
import { SidenavService } from '../sidenav.service';

@Component({
  selector: 'app-side-nav-content',
  templateUrl: './side-nav-content.component.html',
  styleUrls: ['./side-nav-content.component.scss'],
  animations: [onSideNavChange, animateText],
})
export class SideNavContentComponent implements OnInit {
  public sideNavState = true;
  public linkText = true;

  public pages: any[] = [
    { name: 'Dashboard', link: 'dashboard', icon: 'grid', active: false },
    { name: 'Patients', link: 'patients', icon: 'user', active: false },
  ];

  constructor(
    private sidenavService: SidenavService,
    private router: Router,
    private route: ActivatedRoute
    ) {
    this.sidenavService.sideNavState$.subscribe((res) => {
      this.sideNavState = res;
      setTimeout(() => {
        this.linkText = res;
      }, 200);
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(() => {
      this.pages.forEach((page) => {
        page.active = false;
        if (this.router.url.indexOf(page.link) > -1) page.active = true;
      });
    });
  }
}
