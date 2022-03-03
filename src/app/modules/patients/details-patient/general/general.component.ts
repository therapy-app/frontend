import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {

  personalInfo = {
    fullName: 'John Doe',
    gender: 'Male',
    birthdate: new Date().toLocaleDateString(),
  }

  contactInfo = {
    country: 'Switzerland',
    city: 'Zürich',
    postalcode: 1234,
    address: 'Newyorkstreet 11',
    phonenumber: 12345,
    email: 'asdasd@mail.com'
  }

  socialsecurityInfo = {
    social: 'Helsana',
    socialnumber: 12345,
    employer: 'Google'
  }

  series = {
    start: new Date().toLocaleDateString(),
    end: new Date().toLocaleDateString(),
  }

  otherInfo = {
    diagnosis: 'Scoliosis',
    treatmentArea: 'Lower Back'
  }

  preferredDates = [
    {
      weekday: 'Mondays',
      timeRangeStart: new Date().toLocaleTimeString(),
      timeRangeEnd: new Date().toLocaleTimeString()
    },
    {
      weekday: 'Wednesdays',
      timeRangeStart: new Date().toLocaleTimeString(),
      timeRangeEnd: new Date().toLocaleTimeString()
    },
    {
      weekday: 'Fridays',
      timeRangeStart: new Date().toLocaleTimeString(),
      timeRangeEnd: new Date().toLocaleTimeString()
    },
  ]

  constructor(public loadingService: LoadingService) { }


  ngOnInit(): void {
  }

}
