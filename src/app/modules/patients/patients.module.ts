import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientsComponent } from './patients.component';
import { RouterModule, Routes } from '@angular/router';
import {TuiTableModule} from '@taiga-ui/addon-table';
import { TaigaUiModule } from 'src/app/shared/taiga-ui.module';
import { TranslationsModule } from 'src/app/shared/translations.module';
import { TuiSvgModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { EditPatientComponent } from './edit-patient/edit-patient.component';
import {TuiAvatarModule, TuiDropdownContextModule, TuiIslandModule} from '@taiga-ui/kit';
import {TuiDataListModule} from '@taiga-ui/core';
import {TuiActiveZoneModule} from '@taiga-ui/cdk';
import {TuiTablePaginationModule} from '@taiga-ui/addon-table';
import { DetailsPatientComponent } from './details-patient/details-patient.component';
import {TuiTabsModule} from '@taiga-ui/kit';
import {TuiLabelModule} from '@taiga-ui/core';
import {TuiAccordionModule} from '@taiga-ui/kit';
import { GeneralComponent } from './details-patient/general/general.component';

export const routes: Routes = [
  { path: '', component: PatientsComponent },
  { path: 'details', component: DetailsPatientComponent },
]


@NgModule({
  declarations: [PatientsComponent, EditPatientComponent, DetailsPatientComponent, GeneralComponent],
  imports: [
    CommonModule,
    TuiTableModule,
    RouterModule.forChild(routes),
    TaigaUiModule,
    TranslationsModule,
    TuiTextfieldControllerModule,
    TuiDropdownContextModule,
    TuiIslandModule,
    TuiDataListModule,
    TuiSvgModule,
    TuiActiveZoneModule,
    TuiTablePaginationModule,
    TuiTabsModule,
    TuiLabelModule,
    TuiAvatarModule,
    TuiAccordionModule
  ]
})
export class PatientsModule { }
