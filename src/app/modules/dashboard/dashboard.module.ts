import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DashboardComponent } from './dashboard.component'
import { TaigaUiModule } from 'src/app/shared/taiga-ui.module'
import { RouterModule, Routes } from '@angular/router'
import {TuiLineChartModule} from '@taiga-ui/addon-charts'
import { TuiSvgModule } from '@taiga-ui/core'
import { TuiAvatarModule } from '@taiga-ui/kit'

export const routes: Routes = [
  { path: '', component: DashboardComponent },
]

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    TaigaUiModule,
    RouterModule.forChild(routes),
    TuiSvgModule,
    TuiLineChartModule,
    TuiAvatarModule
  ],
  exports: []
})
export class DashboardModule { }
