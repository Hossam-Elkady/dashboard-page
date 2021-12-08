import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuardGuard } from './Guards/auth-guard.guard';
import { GuardAGuard } from './Guards/guard-a.guard';
import { GuardBGuard } from './Guards/guard-b.guard';
import { GuardCGuard } from './Guards/guard-c.guard';
import { LoginComponent } from './login/login.component';
import { TabAComponent } from './tab-a/tab-a.component';
import { TabBComponent } from './tab-b/tab-b.component';
import { TabCComponent } from './tab-c/tab-c.component';

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  {
    path: "dashboard", component: DashboardComponent, canActivate: [AuthGuardGuard],
    children: [
      { path: "usera", component: TabAComponent, canActivate: [GuardAGuard] },
      { path: "userb", component: TabBComponent, canActivate: [GuardBGuard] },
      { path: "userc", component: TabCComponent, canActivate: [GuardCGuard] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
