import { TuiLinkModule, TuiSvgModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaigaUiModule } from 'src/app/shared/taiga-ui.module';
import { MainLayoutComponent } from './main-layout.component';
import { TuiAccordionModule, TuiAvatarModule } from '@taiga-ui/kit';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { SideNavContentComponent } from './side-nav-content/side-nav-content.component';
import { IconsModule } from 'src/app/shared/icons.module';
import {TuiBreadcrumbsModule} from '@taiga-ui/kit';
import {TuiSidebarModule} from '@taiga-ui/addon-mobile';
import {TuiActiveZoneModule} from '@taiga-ui/cdk';
import { MainLayoutRoutingModule } from './mail-layout.routing.module';
import {TuiHostedDropdownModule} from '@taiga-ui/core';
import { TranslationsModule } from 'src/app/shared/translations.module';
import {TuiDataListModule} from '@taiga-ui/core';

@NgModule({
  declarations: [MainLayoutComponent, SideNavContentComponent],
  imports: [
    CommonModule,
    TaigaUiModule,
    MainLayoutRoutingModule,
    TuiAvatarModule,
    MatSidenavModule,
    MatListModule,
    IconsModule,
    TuiAccordionModule,
    TuiBreadcrumbsModule,
    TuiLinkModule,
    TuiTextfieldControllerModule,
    TuiSidebarModule,
    TuiActiveZoneModule,
    TuiHostedDropdownModule,
    TranslationsModule,
    TuiSvgModule,
    TuiDataListModule
  ],
  providers: [],
  exports: []
})
export class MainLayoutModule { }
