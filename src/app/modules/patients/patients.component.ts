import { BackendService } from './../../services/backend.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PatientsComponent implements OnInit {
  readonly data = [
    {
      name: 'Alex Inkin',
      balance: 1323525,
    },
    {
      name: 'Roman Sedov',
      balance: 423242,
    },
  ] as const

  readonly columns = ['name', 'phonenumber', 'email', 'nextAppointment', 'actions']

  constructor(private backend: BackendService) {}

  ngOnInit(): void {
    this.backend.getPatients().subscribe()
  }
}
