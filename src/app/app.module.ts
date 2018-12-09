import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgZorroAntdModule, NZ_I18N, zh_CN} from 'ng-zorro-antd';
import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
import {HeaderComponent} from './main/header/header.component';
import {SiderComponent} from './main/sider/sider.component';
import {AppComponent} from './app.component';
import {AddAccountButtonComponent} from './main/sider/add-account-button/add-account-button.component';
import {AccountContentComponent} from './main/content/account-content/account-content.component';
import {HelloComponent} from './main/hello/hello.component';
import {AddAccountFormComponent} from './main/sider/add-account-form/add-account-form.component';
import {UpdateAccountComponent} from './main/content/update-account/update-account.component';
import {StatisticComponent} from './statistic/statistic.component';
import {NgxChartsModule} from '@swimlane/ngx-charts';

registerLocaleData(zh);

@NgModule({
    declarations: [
        AppComponent,
        SiderComponent,
        HeaderComponent,
        AddAccountButtonComponent,
        AccountContentComponent,
        HelloComponent,
        AddAccountFormComponent,
        UpdateAccountComponent,
        StatisticComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        NgZorroAntdModule,
        ReactiveFormsModule,
        NgxChartsModule
    ],
    providers: [
        {provide: NZ_I18N, useValue: zh_CN},
        // {provide: RouteReuseStrategy, useClass: CustomReuseStrategy}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
