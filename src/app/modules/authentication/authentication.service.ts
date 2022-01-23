import { User } from './../../shared/models/user'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable, of } from 'rxjs'
import { tap } from 'rxjs/operators'
import { environment } from '../../../environments/environment'
import { BackendService } from 'src/app/services/backend.service'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  currentUser = new BehaviorSubject<User>({ fullName: '' })
  currentUser$ = this.currentUser.asObservable()
  baseUrl = environment.apiBaseUrl

  constructor(
    private httpClient: HttpClient,
    private backend: BackendService
  ) { }

  signIn(model: {email: string, password: string}): Observable<{}> {
    return this.httpClient.post(`${this.baseUrl}/auth/signin`, model, { withCredentials: true })
      .pipe(tap(() => this.getAntiforgery()))
  }

  signUp(model: {fullName: string, email: string, password: string}): Observable<{}> {
    return this.httpClient.post(`${this.baseUrl}/auth/signup`, model, { withCredentials: true })
  }

  signOut(): Observable<{}> {
    return this.httpClient.post(`${this.baseUrl}/auth/signout`, {}, { withCredentials: true })
      .pipe(tap(() => {
        this.currentUser.next({ fullName: '' })
        localStorage.setItem('userId', '')
      }))
  }

  joinInvite(model: { inviteCode: string}): Observable<{}> {
    return this.httpClient.post(`${this.baseUrl}/invite/join`, model, { withCredentials: true })
  }

  getSignUpStep(): Observable<{}> {
    return this.httpClient.post(`${this.baseUrl}/auth/signin`, { withCredentials: true })
  }

  getAuthStatus(): boolean {
    return localStorage.getItem('userId') ? true : false
  }

  getAntiforgery(): Observable<{}> {
    return this.httpClient.get(`${this.baseUrl}/antiforgery`, { withCredentials: true })
  }

  refreshUser(): void {
    this.getAntiforgery()
      .subscribe(() => {
        this.backend.getUser(localStorage.getItem('userId'))
          .subscribe(user => this.currentUser.next(user))
      })
  }
}
