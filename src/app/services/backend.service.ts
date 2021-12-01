import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Patient } from '../shared/models/patients'

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  baseUrl = 'https://localhost:59756/api/v1'

  constructor(private http: HttpClient) { }

  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${this.baseUrl}/patients`, { withCredentials: true })
  }
}
