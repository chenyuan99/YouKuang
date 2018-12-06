import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-add-account-form',
    templateUrl: './add-account-form.component.html',
    styleUrls: ['./add-account-form.component.css']
})
export class AddAccountFormComponent implements OnInit {
    validateForm: FormGroup;

    constructor(private fb: FormBuilder) {
    }

    ngOnInit() {
        this.validateForm = this.fb.group({
            note  : [ null, [ Validators.required ] ],
            gender: [ null, [ Validators.required ] ]
        });
    }

    submitForm() {

    }
}
