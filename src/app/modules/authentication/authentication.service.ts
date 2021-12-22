import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { switchMap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  baseUrl = 'https://api.therapyapp.local/api/v1'

  constructor(private httpClient: HttpClient) { }

  signIn(model: {email: string, password: string}): Observable<{}> {
    return this.httpClient.post(`${this.baseUrl}/auth/signin`, model, { withCredentials: true })
      .pipe(
        switchMap(_ => this.httpClient.get(`${this.baseUrl}/antiforgery`, { withCredentials: true }))
      )
  }

  signOut(): void {

  }

  getSignUpStep(): Observable<{}> {
    return this.httpClient.post(`${this.baseUrl}/auth/signin`, { withCredentials: true })
  }

  // true -> authenticated
  getAuthStatus(): boolean {
    return true
  }
}
