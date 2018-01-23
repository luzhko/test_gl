import { Injectable, OnInit } from '@angular/core';
import { UsersModel } from '../model/users.model'

@Injectable()

export class LoginService implements OnInit {
    users: Array<UsersModel> = [];
    login: boolean = false
    constructor () {}

    saveUsers ({name, password }) {

        this.users.push( {
            name,
            password
        });
        this.login = true;

    }
    isLogin () {
        if (this.login) {
           return true;
        } else {
            return false;
        }
    }

    ngOnInit () {}
}