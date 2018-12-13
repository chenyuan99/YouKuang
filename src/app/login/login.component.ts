import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../service/login.service';
import {Router} from '@angular/router';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    login = false;

    nzLg = {span: 4, offset: 10};

    nzXs = {span: 20, offset: 2};

    validateForm: FormGroup;

    constructor(private fb: FormBuilder,
                private loginService: LoginService,
                private routerService: Router,
                private messageService: NzMessageService) {
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
                    this.messageService.create('success', '登录成功');
                    setTimeout(() => this.routerService.navigateByUrl('main'), 500);
                } else {
                    this.messageService.create('error', '登录失败');
                }
                $response.unsubscribe();
                this.login = false;
            }
        );
        this.loginService.login(userName, password);
        this.login = true;
    }

    ngOnInit() {
        this.validateForm = this.fb.group({
            userName: [null, [Validators.required]],
            password: [null, [Validators.required]],
        });
    }

}
