import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { TaigaUiModule } from 'src/app/shared/taiga-ui.module';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    TaigaUiModule
  ],
  exports: []
})
export class DashboardModule { }
