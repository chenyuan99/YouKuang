import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../service/login.service';
import {Router} from '@angular/router';
import {NzMessageService} from 'ng-zorro-antd';
import {RegisterService} from '../service/register.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    loginLoading = false;

    registerLoading = false;

    isVisible = false;

    nzLg = {span: 4, offset: 10};

    nzXs = {span: 20, offset: 2};

    validateLoginForm: FormGroup;

    validateRegisterForm: FormGroup;

    constructor(private fb: FormBuilder,
                private loginService: LoginService,
                private registerService: RegisterService,
                private routerService: Router,
                private messageService: NzMessageService) {
    }

    submitLoginForm(): void {
        for (const i in this.validateLoginForm.controls) {
            if (i) {
                this.validateLoginForm.controls[i].markAsDirty();
                this.validateLoginForm.controls[i].updateValueAndValidity();
            }
        }
        if (!this.validateLoginForm.valid) {
            return;
        }
        const userName = this.validateLoginForm.get('userName').value;
        const password = this.validateLoginForm.get('password').value;
        const $response = this.loginService.response$.subscribe(
            response => {
                if (response) {
                    this.messageService.create('success', '登录成功');
                    setTimeout(() => this.routerService.navigateByUrl('main'), 500);
                } else {
                    this.messageService.create('error', '登录失败');
                }
                $response.unsubscribe();
                this.loginLoading = false;
            }
        );
        this.loginService.login(userName, password);
        this.loginLoading = true;
    }

    ngOnInit() {
        this.validateLoginForm = this.fb.group({
            userName: [null, [Validators.required]],
            password: [null, [Validators.required]],
        });
        this.validateRegisterForm = this.fb.group({
            userName: [null, [Validators.required]],
            password: [null, [Validators.required]],
        });
    }

    closeModal() {
        this.isVisible = false;
    }

    submitRegisterForm() {
        for (const i in this.validateRegisterForm.controls) {
            if (i) {
                this.validateRegisterForm.controls[i].markAsDirty();
                this.validateRegisterForm.controls[i].updateValueAndValidity();
            }
        }
        if (!this.validateRegisterForm.valid) {
            return;
        }
        this.registerLoading = true;
        const userName = this.validateRegisterForm.get('userName').value;
        const password = this.validateRegisterForm.get('password').value;
        const $response = this.registerService.response$.subscribe(
            response => {
                if (response) {
                    this.messageService.create('success', '注册成功');
                    setTimeout(() => this.isVisible = false, 500);
                } else {
                    this.messageService.create('error', '注册失败');
                }
                $response.unsubscribe();
                this.registerLoading = false;
            }
        );
        this.registerService.register(userName, password);
    }
}
