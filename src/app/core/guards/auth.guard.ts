
import { Injectable } from "@angular/core"
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
    UrlTree
} from "@angular/router"
import { NgxSpinnerService } from "ngx-spinner"
import { Subject } from "rxjs"
import { debounceTime } from "rxjs/operators"
import { AuthenticationService } from "src/app/modules/authentication/authentication.service"
import { LoadingService } from "src/app/services/loading.service"

@Injectable()
export class AuthGuard implements CanActivate {
    public loader$ = new Subject<boolean>();

    constructor(
      private authService: AuthenticationService,
      private router: Router,
      private loadingService: LoadingService
    ) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean | Promise<boolean> {
      const isAuthenticated = this.authService.getAuthStatus()
      setTimeout(() => this.loadingService.initialLoading.next(false), 1250)
      if (!isAuthenticated) {
        this.router.navigate(['/auth/signin'])
      }
      return isAuthenticated
    }
}
