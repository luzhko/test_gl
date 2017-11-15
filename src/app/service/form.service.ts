import { Injectable } from '@angular/core';

@Injectable()
export class FormService {
    printData(valForm) {
        console.log(
            'Tel:' + valForm.tel.value,
            'Email:' + valForm.email.value,
            'Message:' + valForm.message.value
        );
    }
}