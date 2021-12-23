import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Patient } from '../shared/models/patients'
import { User } from '../shared/models/user'

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  baseUrl = 'https://api.therapyapp.local/api/v1'

  constructor(private http: HttpClient) { }

  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${this.baseUrl}/patients`, { withCredentials: true })
  }

  getUser(id: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/users/${id}`, { withCredentials: true })
  }
}
