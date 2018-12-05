import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccountContentComponent} from './main/content/account-content/account-content.component';
import {HelloComponent} from './main/hello/hello.component';

const routes: Routes = [
    {path: 'account/:id', component: AccountContentComponent},
    {path: '', component: HelloComponent, pathMatch: 'full'},
    {path: '**', redirectTo: 'account/0', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
