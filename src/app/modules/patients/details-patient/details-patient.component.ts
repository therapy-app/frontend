import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-patient',
  templateUrl: './details-patient.component.html',
  styleUrls: ['./details-patient.component.scss']
})
export class DetailsPatientComponent implements OnInit {

  activeItemIndex = 0

  constructor() { }

  ngOnInit(): void {
  }

}
