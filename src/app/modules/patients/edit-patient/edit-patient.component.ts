import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.scss']
})
export class EditPatientComponent implements OnInit {

  patientForm = this.fb.group({
    test: ['']
  })
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  addPatient(): void {

  }

}
