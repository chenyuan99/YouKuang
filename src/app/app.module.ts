import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgZorroAntdModule, NZ_I18N, zh_CN} from 'ng-zorro-antd';
import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
import {HeaderComponent} from './main/header/header.component';
import {FooterComponent} from './main/footer/footer.component';
import {SiderComponent} from './main/sider/sider.component';
import {ContentComponent} from './main/content/content.component';
import {AppComponent} from './app.component';
import {AddAccountButtonComponent} from './main/sider/add-account-button/add-account-button.component';
import {AccountContentComponent} from './main/content/account-content/account-content.component';

registerLocaleData(zh);

@NgModule({
    declarations: [
        AppComponent,
        SiderComponent,
        HeaderComponent,
        FooterComponent,
        ContentComponent,
        AddAccountButtonComponent,
        AccountContentComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        NgZorroAntdModule
    ],
    providers: [{provide: NZ_I18N, useValue: zh_CN}],
    bootstrap: [AppComponent]
})
export class AppModule {
}
