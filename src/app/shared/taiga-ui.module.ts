import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiInputModule} from '@taiga-ui/kit';
import {TuiFieldErrorModule} from '@taiga-ui/kit';
import {TuiInputPasswordModule} from '@taiga-ui/kit';
import {TuiButtonModule} from '@taiga-ui/core';
import {TuiPrimitiveTextfieldModule} from '@taiga-ui/core';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    TuiInputModule,
    FormsModule,
    ReactiveFormsModule,
    TuiFieldErrorModule,
    TuiInputPasswordModule,
    TuiButtonModule,
    TuiPrimitiveTextfieldModule
  ],
})
export class TaigaUiModule {}
