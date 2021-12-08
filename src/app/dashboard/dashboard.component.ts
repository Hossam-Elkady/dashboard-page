import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, DoCheck {
  constructor(private _Router: Router) { }
  error: string = 'Click on your own Role';
  userRole: any = sessionStorage.getItem('userType');
  ngOnInit(): void { }

  ngDoCheck() {
    this.checkRole();
  }

  checkRole() {
    if (
      (this.userRole == 'A' && this._Router.url == '/dashboard/usera') ||
      (this.userRole == 'B' && this._Router.url == '/dashboard/userb') ||
      (this.userRole == 'C' && this._Router.url == '/dashboard/userc')
    ) {
      this.error = '';
    } else {
      this.error = 'Click on your own Role';
    }
  }
}
