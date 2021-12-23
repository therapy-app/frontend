
import { Injectable } from "@angular/core"
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
    UrlTree
} from "@angular/router"
import { AuthenticationService } from "src/app/modules/authentication/authentication.service"

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private authService: AuthenticationService,
        private router: Router) { }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | Promise<boolean> {
        const isAuthenticated = this.authService.getAuthStatus()
        if (!isAuthenticated) {
          this.router.navigate(['/auth/signin'])
        }
        return isAuthenticated
    }
}
