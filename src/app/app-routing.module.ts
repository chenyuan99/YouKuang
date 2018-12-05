import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccountContentComponent} from './main/content/account-content/account-content.component';

const routes: Routes = [
    {path: 'account/:id', component: AccountContentComponent},
    {path: '**', redirectTo: 'account/0', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
