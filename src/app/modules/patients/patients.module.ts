import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientsComponent } from './patients.component';
import { RouterModule, Routes } from '@angular/router';
import {TuiTableModule} from '@taiga-ui/addon-table';
import { TaigaUiModule } from 'src/app/shared/taiga-ui.module';
import { TranslationsModule } from 'src/app/shared/translations.module';
import { TuiTextfieldControllerModule } from '@taiga-ui/core';
import { EditPatientComponent } from './edit-patient/edit-patient.component';

export const routes: Routes = [
  { path: '', component: PatientsComponent },
  { path: 'add', component: EditPatientComponent },
]


@NgModule({
  declarations: [PatientsComponent, EditPatientComponent],
  imports: [
    CommonModule,
    TuiTableModule,
    RouterModule.forChild(routes),
    TaigaUiModule,
    TranslationsModule,
    TuiTextfieldControllerModule,
  ]
})
export class PatientsModule { }
