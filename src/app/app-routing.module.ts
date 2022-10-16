import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./main/main.component";
import {RegistrationComponent} from "./auth/registration/registration.component";
import {LoginComponent} from "./auth/login/login.component";
import {NavComponent} from "./dashboard/nav/nav.component";
import {DashComponent} from "./dashboard/dash/dash.component";
import {VideoConferenceComponent} from "./dashboard/video-conference/video-conference.component";
import { ConcoursComponent } from './dashboard/concours/concours.component';
import { SolvabiliteComponent } from './comptabilite/solvabilite/solvabilite.component';
import { ListePaiementComponent } from './comptabilite/liste-paiement/liste-paiement.component';

const routes: Routes = [
  {path: '', component: MainComponent, pathMatch: 'full'},
  {path: 'registration', component: RegistrationComponent},
  // {path: '', redirectTo: '/registration', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard-nav', component: NavComponent,
    children: [
      {path: '', redirectTo: '/dashboard-nav', pathMatch: 'full'},
      {path: '', title: 'Main Component',  component: DashComponent},
      {path: 'dashboard-nav', component: DashComponent},
      // {path: 'admin-settings', title: 'Main Component',  component: AdminSettingComponent},
      {path: 'concours', title: 'liste candidat',  component: ConcoursComponent},
      {path: 'solvabilite', title: 'solvabilite',  component: SolvabiliteComponent},
      {path: 'liste-paiement', title: 'liste paiement',  component: ListePaiementComponent},
      {path: 'video-conference', title: 'Video Component',  component: VideoConferenceComponent},
      { path: 'dashboard-nav', loadChildren: () => import ('./dashboard/dashboard.module').then(m => m.DashboardModule)},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
