import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthGuard } from './core/guards/auth.guard';
import { LoadingService } from './services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend'
  constructor(
    private translate: TranslateService,
    public loadingService: LoadingService
  ) {
    translate.setDefaultLang('en')
  }
}
