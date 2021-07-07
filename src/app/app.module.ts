import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './core/material.module';

import { AppComponent } from './app.component';
import { CoreComponent } from './core/core.component';
import { PageHeaderComponent } from './core/page-header/page-header.component';
import { SidenavComponent } from './core/sidenav/sidenav.component';

import { TabsComponent } from './core/tabs/tabs.component';
import { StoreComponent } from './core/tabs/store/store.component';

@NgModule({
  declarations: [
    AppComponent,
    CoreComponent,
    StoreComponent,
    TabsComponent,
    PageHeaderComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
