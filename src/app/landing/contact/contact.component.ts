import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder ,  Validators  } from '@angular/forms';
import { FormService } from '../../shared/services/form.service';

@Component ({
    selector: 'app-contact-component',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.sass']
})

export class ContactComponent implements OnInit {
    valForm: FormGroup;
    formErrors = {
        tel: '',
        email: '',
        message: '',
    };

    constructor (private fb: FormBuilder, private formService: FormService ) {}

    ngOnInit () {
        this.buildForm();
    }

    buildForm () {
        this.valForm = this.fb.group({
            tel: ['', [
                Validators.required,
                Validators.minLength(2),
                Validators.maxLength(200),
            ]],
            email: ['', [
                Validators.required,
                Validators.pattern(/^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i),
            ]],
            message: ['', [
                Validators.required,
                Validators.minLength(2),
                Validators.maxLength(200)
            ]],
        });
        this.valForm.valueChanges.subscribe(data => this.onValueChange());
    }

    onValueChange () {
        for (let item in this.formErrors) {
            this.formErrors[item] = '';
            let control = this.valForm.get(item);
            if (control && control.dirty && !control.valid) {
                this.formErrors[item] = true;
            }

        }
    }

    submit() {
        if (this.valForm.valid) {
            this.formService.printData(this.valForm.controls);
        }
    }
}