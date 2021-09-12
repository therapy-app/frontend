import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { TaigaUiModule } from 'src/app/shared/taiga-ui.module';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    TaigaUiModule,
    RouterModule.forChild(routes)
  ],
  exports: []
})
export class DashboardModule { }
