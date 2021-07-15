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
import { AddProductComponent } from './core/pages/store/add-product/add-product.component';
import { OrdersComponent } from './core/pages/store/orders/orders.component';
import { OrderDialogComponent } from './core/pages/store/dialogs/order-dialog/order-dialog.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { AdminDashboardComponent } from './admin/pages/admin-dashboard/admin-dashboard.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { DeliverDialogComponent } from './core/pages/store/dialogs/deliver-dialog/deliver-dialog.component';
import { DeleteDialogComponent } from './core/pages/store/dialogs/delete-dialog/delete-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    CoreComponent,
    StoreComponent,
    AddProductComponent,
    PageHeaderComponent,
    SidenavComponent,
    LoginComponent,
    DashboardComponent,
    OrdersComponent,
    OrderDialogComponent,
    AdminDashboardComponent,
    DeliverDialogComponent,
    DeleteDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
