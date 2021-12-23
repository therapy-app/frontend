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
  $userName = new Observable<string>()

  readonly value = [
    [50, 50],
    [100, 75],
    [150, 50],
    [200, 150],
    [250, 155],
    [300, 190],
    [350, 90],
  ]

  constructor(private authService: AuthenticationService) {
    this.$userName = authService.currentUser$.pipe(map(user => user.fullName))
  }

  ngOnInit(): void {}
}
