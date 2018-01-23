import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../shared/services/users.service';

@Component ({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.sass']
})

export class UserListComponent implements OnInit {
    users: any;
    constructor ( private usersServise: UsersService) {}

    ngOnInit () {
        this.usersServise.getUsers().subscribe( data => {
            this.users = data.data;

            // console.log(this.users);
        });
    }
}