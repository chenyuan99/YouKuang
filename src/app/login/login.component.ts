import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../service/login.service';
import {ActivatedRoute, Route, Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    nzLg = {span: 4, offset: 10};

    nzXs = {span: 20, offset: 2};

    validateForm: FormGroup;

    constructor(private fb: FormBuilder,
                private loginService: LoginService,
                private routerService: Router) {
    }

    submitForm(): void {
        for (const i in this.validateForm.controls) {
            if (i) {
                this.validateForm.controls[i].markAsDirty();
                this.validateForm.controls[i].updateValueAndValidity();
            }
        }
        if (!this.validateForm.valid) {
            return;
        }
        const userName = this.validateForm.get('userName').value;
        const password = this.validateForm.get('password').value;
        const $response = this.loginService.response$.subscribe(
            response => {
                if (response) {
                    console.log(userName, password);
                    $response.unsubscribe();
                    this.routerService.navigateByUrl('main');
                }
            }
        );
        this.loginService.login(userName, password);
    }

    ngOnInit() {
        this.validateForm = this.fb.group({
            userName: [null, [Validators.required]],
            password: [null, [Validators.required]],
        });
    }

}
