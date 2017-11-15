import { Component } from '@angular/core';

@Component ({
    selector: 'app-header-component',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.sass']
})

export class HeaderComponent {
    bg: string = '../assets/img/header_bg.jpg';
    logo: string = '../assets/img/logo_header.png';
}