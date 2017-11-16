import { Component } from '@angular/core';

@Component ({
    selector: 'app-footer-component',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.sass']
})

export class FooterComponent {
    logo: string = './assets/img/logo_footer.png';
}