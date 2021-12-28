import { OnboardingComponent } from './onboarding.component'
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AuthLayoutComponent } from 'src/app/layouts/auth-layout/auth-layout.component'

export const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        component: OnboardingComponent,
        children: [
          { path: '', redirectTo: 'usage' },
          { path: 'usage' },
          { path: 'invite' },
          { path: 'practice' },
          { path: 'success' }
        ]
      },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnboardingRoutingModule {}