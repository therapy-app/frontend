import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-details-patient',
  templateUrl: './details-patient.component.html',
  styleUrls: ['./details-patient.component.scss']
})
export class DetailsPatientComponent implements OnInit {

  patientContatInfo = {
    fullName: 'John Doe',

  }

  activeItemIndex = 0;

  constructor(public loadingService: LoadingService) { }

  ngOnInit(): void {
  }

}
