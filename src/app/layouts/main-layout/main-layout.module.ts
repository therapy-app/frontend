import { TuiButtonModule, TuiLinkModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaigaUiModule } from 'src/app/shared/taiga-ui.module';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout.component';
import { TuiAccordionModule, TuiAvatarModule } from '@taiga-ui/kit';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { SideNavContentComponent } from './side-nav-content/side-nav-content.component';
import { IconsModule } from 'src/app/shared/icons.module';
import {TuiBreadcrumbsModule} from '@taiga-ui/kit';
import {TuiSidebarModule} from '@taiga-ui/addon-mobile';
import {TuiActiveZoneModule} from '@taiga-ui/cdk';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('../../modules/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'patients',
        loadChildren: () =>
          import('../../modules/patients/patients.module').then(
            (m) => m.PatientsModule
          ),
      },
    ],
  },
];

@NgModule({
  declarations: [MainLayoutComponent, SideNavContentComponent],
  imports: [
    CommonModule,
    TaigaUiModule,
    RouterModule.forChild(routes),
    TuiAvatarModule,
    MatSidenavModule,
    MatListModule,
    IconsModule,
    TuiAccordionModule,
    TuiBreadcrumbsModule,
    TuiLinkModule,
    TuiTextfieldControllerModule,
    TuiSidebarModule,
    TuiActiveZoneModule
  ],
  providers: [],
  exports: []
})
export class MainLayoutModule { }
