import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { MainComponent } from './main/main.component';
import {HttpClientModule} from "@angular/common/http";
import {RegistrationComponent} from "./auth/registration/registration.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MatSidenavModule } from '@angular/material/sidenav';
import {LoginComponent} from "./auth/login/login.component";
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {LayoutModule} from "@angular/cdk/layout";
import {MatToolbarModule} from "@angular/material/toolbar";
import {RouterModule} from "@angular/router";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatMenuModule} from "@angular/material/menu";
import {MatListModule} from "@angular/material/list";
import { MaterialModule } from './material/material.module';
import { SolvabiliteComponent } from './comptabilite/solvabilite/solvabilite.component';
import { ListePaiementComponent } from './comptabilite/liste-paiement/liste-paiement.component';
import { CandidatComponent } from './concours/candidat/candidat.component';
import { PaiementComponent } from './concours/paiement/paiement.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    RegistrationComponent,
    LoginComponent,
    SolvabiliteComponent,
    ListePaiementComponent,
    CandidatComponent,
    PaiementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSidenavModule,
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    ReactiveFormsModule,
    RouterModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    AppRoutingModule,
    MatIconModule,
    // RecaptchaModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
