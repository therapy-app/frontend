import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientsComponent } from './patients.component';
import { RouterModule, Routes } from '@angular/router';
import {TuiTableModule} from '@taiga-ui/addon-table';
import { TaigaUiModule } from 'src/app/shared/taiga-ui.module';
import { TranslationsModule } from 'src/app/shared/translations.module';

export const routes: Routes = [
  { path: '', component: PatientsComponent },
]


@NgModule({
  declarations: [PatientsComponent],
  imports: [
    CommonModule,
    TuiTableModule,
    RouterModule.forChild(routes),
    TaigaUiModule,
    TranslationsModule
  ]
})
export class PatientsModule { }
