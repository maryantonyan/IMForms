import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot , CanDeactivate } from '@angular/router';
import { routing } from '../../app.router';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private myrouter: Router) { }

  canActivate() {
    //alert(localStorage.getItem('token'));
    if (localStorage.getItem('token') === 'true') {
      return true;
    }

    this.myrouter.navigate(['login-register']);
    return false;
  }
}
