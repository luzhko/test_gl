import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild,  Router } from '@angular/router';

import { LoginService } from '../services/login.service';

@Injectable ()

export class LoginGuard implements CanActivate, CanActivateChild {
    constructor (
        private loginService: LoginService,
        private router: Router
    ) {}

    canActivate() {
        if ( this.loginService.isLogin()) {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }

    canActivateChild() {
        if ( this.loginService.isLogin()) {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }

}