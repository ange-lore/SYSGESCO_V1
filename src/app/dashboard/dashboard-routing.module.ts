import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

const routes : Routes= [
  {
    children: [
      {
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
