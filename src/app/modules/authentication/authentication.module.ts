import { TaigaUiModule } from './../../shared/taiga-ui.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { TranslationsModule } from 'src/app/shared/translations.module';
import { TuiActionModule, TuiStepperModule } from '@taiga-ui/kit';
import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';
import { TextMaskModule } from 'angular2-text-mask';
import { TuiSvgModule } from '@taiga-ui/core';

@NgModule({
  declarations: [SignInComponent, SignUpComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    TaigaUiModule,
    TranslationsModule,
    TuiStepperModule,
    MatPasswordStrengthModule,
    TuiActionModule,
    TextMaskModule,
    TuiSvgModule
  ],
  providers: []
})
export class AuthenticationModule { }
