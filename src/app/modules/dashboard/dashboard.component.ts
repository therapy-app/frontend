import { LoadingService } from 'src/app/services/loading.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  //#region MOCK_DATA

  nextAppointment = {
    date: new Date(2022, 1, 3, 15, 10),
    type: 'Therapy session',
    people: [
      {
        Fullname: 'John Doe'
      }
    ],
    room: 'Japan'
  }

  appoiontmentsScheduled = {
    day: 12,
    week: 58,
    month: 127,
    total: 7489
  }

  secondsWorked = {
    day: 20000,
    week: 100000,
    month: 300000,
    total:  15000000
  }

  news = {
    author: {
      Fullname: 'Richard Roe'
    },
    title: 'Team event',
    description: 'Hello everyone. At 6pm we\'ll gather in the welcome are, dont be late. 😄 '
  }

  appointments = [
    {
      date: new Date(2022, 1, 3, 15, 10),
      type: 'Therapy session',
      people: [
        {
          Fullname: 'John Doe'
        }
      ],
      room: 'Japan'
    },
    {
      date: new Date(2022, 1, 3, 15, 55),
      type: 'Therapy session',
      people: [
        {
          Fullname: 'John Doe'
        }
      ],
      room: 'Japan'
    },
    {
      date: new Date(2022, 1, 3, 16, 30),
      type: 'Therapy session',
      people: [
        {
          Fullname: 'John Doe'
        }
      ],
      room: 'Japan'
    },
    {
      date: new Date(2022, 1, 3, 17, 15),
      type: 'Therapy session',
      people: [
        {
          Fullname: 'John Doe'
        }
      ],
      room: 'Japan'
    },
    {
      date: new Date(2022, 1, 3, 18, 0),
      type: 'Therapy session',
      people: [
        {
          Fullname: 'John Doe'
        }
      ],
      room: 'Japan'
    },
  ]

  workload = [
    [0, (Math.floor(Math.random() * 8) + 4) * 2],
    [1, (Math.floor(Math.random() * 8) + 4) * 2],
    [2, (Math.floor(Math.random() * 8) + 4) * 2],
    [3, (Math.floor(Math.random() * 8) + 4) * 2],
    [4, (Math.floor(Math.random() * 8) + 4) * 2]
  ]

  //#endregion


  $userName = new Observable<string>()


  constructor(
    private authService: AuthenticationService,
    public loadingService: LoadingService
  ) {
    this.$userName = authService.currentUser$.pipe(map(user => user.fullName))
  }

  ngOnInit(): void {}
}
