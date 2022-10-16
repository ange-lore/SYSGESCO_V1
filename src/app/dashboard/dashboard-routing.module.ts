import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {NavComponent} from "./nav/nav.component";

const routes : Routes= [
  {
    path: 'dashboard-nav', component: NavComponent,
    children: [
      {
        path: '', redirectTo: '/dashboard-nav', pathMatch: 'full',
      },
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports : [RouterModule]
})
export class DashboardRoutingModule { }
