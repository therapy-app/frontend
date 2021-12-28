import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { MainLayoutComponent } from './main-layout.component'

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
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainLayoutRoutingModule {}
