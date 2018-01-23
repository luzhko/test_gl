import { Routes } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './users/user.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserSingleComponent } from './users/user-single/user-single.component';

import { LoginGuard } from './shared/guards/login-guard.service';

export const ROUTES_CONFIG: Routes = [
    {path: '', component: LandingComponent},
    {path: 'login', component: LoginComponent},
    {path: 'users', component: UserComponent,
        children: [
            { path: '', component: UserListComponent },
            { path: 'list', component: UserListComponent },
            { path: ':id', component: UserSingleComponent }
        ]
    },
    {path: '**', redirectTo: '/'}
];
