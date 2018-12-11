import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccountContentComponent} from './main/content/account-content/account-content.component';
import {StatisticComponent} from './statistic/statistic.component';
import {LoginComponent} from './login/login.component';
import {MainComponent} from './main/main/main.component';
import {HelloComponent} from './main/hello/hello.component';

const routes: Routes = [
    {
        path: 'main',
        component: MainComponent,
        children: [
            {path: 'account/:id', component: AccountContentComponent},
            {path: 'statistic', component: StatisticComponent},
            {path: 'hello', component: HelloComponent},
            {path: '', redirectTo: 'hello', pathMatch: 'full'}
        ]
    },
    {path: '', component: LoginComponent, pathMatch: 'full'},
    {path: '**', redirectTo: 'account/0', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
