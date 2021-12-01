import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { switchMap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  baseUrl = 'https://localhost:59756/api/v1'

  constructor(private httpClient: HttpClient) { }

  signIn(model: {email: string, password: string}): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/auth/signin`, model, { withCredentials: true })
      .pipe(
        switchMap(_ => this.httpClient.get(`${this.baseUrl}/antiforgery`, { withCredentials: true }))
      )
  }

  getSignUpStep(): void {

  }
}
