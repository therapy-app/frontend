import { BackendService } from './../../services/backend.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PatientsComponent implements OnInit {
  readonly tableData = [
    {
      name: 'Alex Inkin',
      phonenumber: 1323525,
      email: 1323525,
      nextAppointment: 1323525,
    },
    {
      name: 'Alex Inkin',
      phonenumber: 1323525,
      email: 1323525,
      nextAppointment: 1323525,
    },
    {
      name: 'Alex Inkin',
      phonenumber: 1323525,
      email: 1323525,
      nextAppointment: 1323525,
    },
  ] as const

  readonly menuItems = [
    {title: 'View', iconName: 'tuiIconEyeOpen'},
    {title: 'Copy', iconName: 'tuiIconCopy'},
    {title: 'Delete', iconName: 'tuiIconTrash'},
    {title: 'Move', iconName: 'tuiIconFolder'},
  ] as const;


  readonly columns = ['name', 'phonenumber', 'email', 'nextAppointment']

  constructor(
    private backend: BackendService,
    public loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.backend.getPatients().subscribe()
  }
}
