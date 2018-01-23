import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { ROUTES_CONFIG } from './app-routing.module';

import { HeaderComponent } from './landing/header/header.component';
import { AboutComponent } from './landing/about/about.component';
import { SkillsComponent } from './landing/skills/skills.component';
import { ContactComponent } from './landing/contact/contact.component';
import { FooterComponent } from './landing/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { UserComponent } from './users/user.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserSingleComponent } from './users/user-single/user-single.component';

import { SkillsService } from './shared/services/skills.service';
import { FormService } from './shared/services/form.service';
import { SaveDataService } from './shared/services/save-data.servece';
import { UsersService } from './shared/services/users.service';
import { LoginService } from './shared/services/login.service';
import { LoginGuard } from './shared/guards/login-guard.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    SkillsComponent,
    ContactComponent,
    FooterComponent,
    LoginComponent,
    LandingComponent,
    UserComponent,
    UserListComponent,
    UserSingleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES_CONFIG)
  ],
  providers: [
    SkillsService,
    FormService,
    LoginService,
    SaveDataService,
    UsersService,
    LoginGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
