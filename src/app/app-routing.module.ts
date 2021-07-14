import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin/pages/admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './core/pages/dashboard/dashboard.component';
import { AddProductComponent } from './core/pages/store/add-product/add-product.component';
import { OrdersComponent } from './core/pages/store/orders/orders.component';
import { StoreComponent } from './core/pages/store/store.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: "full" },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'store/add-product', component: AddProductComponent },
  { path: 'store/orders', component: OrdersComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'store', component: StoreComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
