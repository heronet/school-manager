import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './core/material.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CoreComponent } from './core/core.component';
import { PageHeaderComponent } from './core/page-header/page-header.component';
import { SidenavComponent } from './core/sidenav/sidenav.component';

import { StoreComponent } from './core/pages/store/store.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './core/pages/dashboard/dashboard.component';
import { TokenInterceptor } from './utils/token.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    CoreComponent,
    StoreComponent,
    PageHeaderComponent,
    SidenavComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
