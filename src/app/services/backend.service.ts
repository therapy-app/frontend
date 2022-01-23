import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { Patient } from '../shared/models/patients'
import { User } from '../shared/models/user'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  baseUrl = environment.apiBaseUrl

  constructor(private http: HttpClient) { }

  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${this.baseUrl}/patients`, { withCredentials: true })
  }

  getUser(id: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/users/${id}`, { withCredentials: true })
  }

  createTenant(model: { name: string }): Observable<{}> {
    return this.http.post<{ name: string}>(`${this.baseUrl}/tenants`, model, { withCredentials: true })
  }
}
