import { EditPatientComponent } from './edit-patient/edit-patient.component';
import { BackendService } from './../../services/backend.service';
import { ChangeDetectionStrategy, Component, Inject, Injector, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';
import { Subject } from 'rxjs';
import {TuiDialogService} from '@taiga-ui/core';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';

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
      name: 'Blex Inkin',
      phonenumber: 2323525,
      email: 2323525,
      nextAppointment: 2323525,
    },
    {
      name: 'Clex Inkin',
      phonenumber: 3323525,
      email: 3323525,
      nextAppointment: 3323525,
    },
    {
      name: 'Alex Inkin',
      phonenumber: 1323525,
      email: 1323525,
      nextAppointment: 1323525,
    },
    {
      name: 'Blex Inkin',
      phonenumber: 2323525,
      email: 2323525,
      nextAppointment: 2323525,
    },
    {
      name: 'Clex Inkin',
      phonenumber: 3323525,
      email: 3323525,
      nextAppointment: 3323525,
    },
    {
      name: 'Alex Inkin',
      phonenumber: 1323525,
      email: 1323525,
      nextAppointment: 1323525,
    },
    {
      name: 'Blex Inkin',
      phonenumber: 2323525,
      email: 2323525,
      nextAppointment: 2323525,
    },
    {
      name: 'Clex Inkin',
      phonenumber: 3323525,
      email: 3323525,
      nextAppointment: 3323525,
    },
    {
      name: 'Clex Inkin',
      phonenumber: 3323525,
      email: 3323525,
      nextAppointment: 3323525,
    },
    // {
    //   name: 'Clex Inkin',
    //   phonenumber: 3323525,
    //   email: 3323525,
    //   nextAppointment: 3323525,
    // },
  ] as const

  readonly menuItems = [
    {title: 'View', iconName: 'tuiIconEyeOpen'},
    {title: 'Edit', iconName: 'tuiIconEdit'},
    {title: 'Delete', iconName: 'tuiIconTrash'},
  ] as const

  readonly columns = ['name', 'phonenumber', 'email', 'nextAppointment']

  private readonly size$ = new Subject<number>()
  private readonly page$ = new Subject<number>()

  private readonly dialog = this.dialogService.open<number>(
    new PolymorpheusComponent(EditPatientComponent, this.injector),
    {
      dismissible: false,
      label: 'Add Patient',
      size: 'fullscreen'
    },
  )

  constructor(
    private backend: BackendService,
    public loadingService: LoadingService,
    @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
    @Inject(Injector) private readonly injector: Injector,
  ) {}

  ngOnInit(): void {
    this.backend.getPatients().subscribe()
  }
  onSize(size: number): void {
    this.size$.next(size)
  }

  onPage(page: number): void {
      this.page$.next(page)
  }

  addPatient(): void {
    this.dialog.subscribe({
      next: data => {
          console.info('Dialog emitted data = ' + data)
      },
      complete: () => {
          console.info('Dialog closed')
      },
    })
  }
}
