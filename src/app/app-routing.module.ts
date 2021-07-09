import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './core/pages/dashboard/dashboard.component';
import { StoreComponent } from './core/pages/store/store.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: "full" },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'store', component: StoreComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
