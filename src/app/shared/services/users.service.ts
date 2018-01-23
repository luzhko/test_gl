import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class UsersService {
    private url: string = 'http://localhost:3000/';
    private testPath: string = 'api/testApi';
    private allUsersUrl: string = 'https://reqres.in/api/users';
    private singUserUrl: string = 'https://reqres.in/api/users';
    constructor(
        private http: Http
    ) {}

    getUsers () {
        return this.http.get(this.allUsersUrl)
            .map(res => res.json());
    }

    getUser (id) {
        // console.log(`${this.singUserUrl}/${id}`);
        return this.http.get(`${this.singUserUrl}/${id}`)
            .map(res => res.json());
    }

    // getUsers () {
    //     return this.http.get(`${this.url}${this.testPath}`)
    //         // .map(res => res.json() )
    //         .do( res => {
    //             console.log(1);
    //          });
    // }
}