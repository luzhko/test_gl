import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../shared/services/users.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-user-single',
    templateUrl: './user-single.component.html',
    styleUrls: ['./user-single.component.sass']
})

export class UserSingleComponent implements OnInit {
    user: any;
    userId;

    constructor (
        private userService: UsersService,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit () {
        // this.activatedRoute.paramMap.forEach((params: Params) => {
        //     console.log(params);
        // });
        this.activatedRoute.params.subscribe(dataUrl => {
            this.userService.getUser(dataUrl.id).subscribe( data => {
                this.user = data.data;
                console.log( this.user);
            });
        });
    }
}