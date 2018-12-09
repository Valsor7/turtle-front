import {RouterModule, Routes} from '@angular/router';
import {UpdatesComponent} from './updates/updates.component';
import {AuthService} from './guards/auth.service';
import {LoginComponent} from './auth/login/login.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {path: '', component: UpdatesComponent, canActivate: [AuthService]},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}

