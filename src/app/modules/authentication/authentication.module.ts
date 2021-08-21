import { TaigaUiModule } from './../../shared/taiga-ui.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { TranslationsModule } from 'src/app/shared/translations.module';

@NgModule({
  declarations: [SignInComponent, SignUpComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    TaigaUiModule,
    TranslationsModule
  ]
})
export class AuthenticationModule { }
