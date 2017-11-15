import { Component } from '@angular/core';

@Component ({
    selector: 'app-about-component',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.sass']
})

export class AboutComponent {
    avatar: string = '../assets/img/avatar.png';

}