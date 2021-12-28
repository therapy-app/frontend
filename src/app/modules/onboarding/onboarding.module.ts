import { TextMaskModule } from 'angular2-text-mask'
import { TaigaUiModule } from 'src/app/shared/taiga-ui.module'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { OnboardingComponent } from './onboarding.component'
import { TuiActionModule, TuiStepperModule } from '@taiga-ui/kit'
import { OnboardingRoutingModule } from './onboarding-routing.module'
import { TuiSvgModule } from '@taiga-ui/core'

@NgModule({
  declarations: [OnboardingComponent],
  imports: [
    CommonModule,
    TuiStepperModule,
    OnboardingRoutingModule,
    TaigaUiModule,
    TuiActionModule,
    TextMaskModule,
    TuiSvgModule
  ]
})
export class OnboardingModule { }
