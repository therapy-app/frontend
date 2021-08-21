import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  host: { class: 'container' },
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
