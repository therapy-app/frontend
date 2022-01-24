import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-details-patient',
  templateUrl: './details-patient.component.html',
  styleUrls: ['./details-patient.component.scss']
})
export class DetailsPatientComponent implements OnInit {

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


  activeItemIndex = 0;

  constructor(public loadingService: LoadingService) { }

  ngOnInit(): void {
  }

}
