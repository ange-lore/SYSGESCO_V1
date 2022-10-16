import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSidenavModule} from "@angular/material/sidenav";
import {CommonModule} from "@angular/common";
import { DashComponent } from './dash/dash.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatListModule} from "@angular/material/list";
import {RouterModule} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";
import {MatGridListModule} from "@angular/material/grid-list";
import {DashboardRoutingModule} from "./dashboard-routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatCardModule} from "@angular/material/card";
import {MatMenuModule} from "@angular/material/menu";
import {NavComponent} from "./nav/nav.component";
import { VideoConferenceComponent } from './video-conference/video-conference.component';
import {NgxAgoraModule} from "ngx-agora";
import {environment} from "../../environments/environment";
@NgModule({
  declarations: [
    NavComponent,
    DashComponent,
    VideoConferenceComponent
  ],
  imports: [
    BrowserModule,
    DashboardRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
  ],
  providers: [NgxAgoraModule],
  bootstrap: [NavComponent]
})
export class DashboardModule { }
