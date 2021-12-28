import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component'
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AuthGuard } from './core/guards/auth.guard'

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () =>
    import('./layouts/main-layout/main-layout.module').then(
      (m) => m.MainLayoutModule
      ),
    },
    {
      path: 'onboarding',
      canActivate: [AuthGuard],
      loadChildren: () =>
      import('./modules/onboarding/onboarding.module').then(
        (m) => m.OnboardingModule
      ),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
