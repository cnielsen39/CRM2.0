import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './services';

@Injectable()
export class AuthGuard implements CanActivate {

 constructor(private authService: AuthService, private router: Router) {}

 canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
   if (!this.authService.isAuthenticated()) {
     this.router.navigate(['/login']);
   }
   return this.authService.isAuthenticated();
 }
}
