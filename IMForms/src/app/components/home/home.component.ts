import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  changeRoute(routeValue) {
    this.router.navigate([routeValue]);
  }

  Logout() {
    this.router.navigateByUrl('/login-register');
    localStorage.clear();
  }
}