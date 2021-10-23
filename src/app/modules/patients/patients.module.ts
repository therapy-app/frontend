import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientsComponent } from './patients.component';
import { RouterModule, Routes } from '@angular/router';
import {TuiTableModule} from '@taiga-ui/addon-table';
import { TaigaUiModule } from 'src/app/shared/taiga-ui.module';

export const routes: Routes = [
  { path: '', component: PatientsComponent },
];


@NgModule({
  declarations: [PatientsComponent],
  imports: [
    CommonModule,
    TuiTableModule,
    RouterModule.forChild(routes),
    TaigaUiModule
  ]
})
export class PatientsModule { }
