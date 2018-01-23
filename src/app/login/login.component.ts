import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../shared/services/login.service';
import { Router } from '@angular/router';

@Component ({
    selector: 'app-save-data',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.sass']
})

export class LoginComponent implements OnInit {

    @ViewChild('demoForm')
    elemForm: NgForm

    constructor (
        private loginService: LoginService,
        private router: Router
    ) {}

    ngOnInit () {
        // console.log(this.elemForm);
    }

    onSubmit (param) {
        if (param.valid) {
            this.loginService.saveUsers(param.value);
            this.router.navigate(['/users']);
        }
    }
}
