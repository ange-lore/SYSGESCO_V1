import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./main/main.component";
import {RegistrationComponent} from "./auth/registration/registration.component";
import {LoginComponent} from "./auth/login/login.component";

const routes: Routes = [
  {
    path: '', component: MainComponent, pathMatch: 'full'
  },
  {path: 'registration', component: RegistrationComponent},
  {path: '', redirectTo: '/registration', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
