import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AuthLayoutComponent } from 'src/app/layouts/auth-layout/auth-layout.component'
import { SignInComponent } from './sign-in/sign-in.component'
import { SignUpComponent } from './sign-up/sign-up.component'

export const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: '', redirectTo: 'signin' },
      { path: 'signin', pathMatch: 'full', component: SignInComponent },
      { path: 'signup', pathMatch: 'full', component: SignUpComponent },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
