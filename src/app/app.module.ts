import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {routing} from './app.routing';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { ServiceComponent } from './service/service.component';

@NgModule({
  declarations: [
    AppComponent,
      HeaderComponent,
      LoginComponent,
      DashboardComponent,
      HomeComponent,
      SignupComponent,
      ServiceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
      routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
