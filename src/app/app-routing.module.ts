import { AuthGuardService } from './shared/services/auth/auth-guard.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutsComponent } from './shared/components/layouts/layouts.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},

  {path: '', component: LayoutsComponent, canActivate: [AuthGuardService],
children:[
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule),
    data: { title: 'Dashboard', breadcrumb: 'DASHBOARD'}
  },
  {
    path: 'aulas',
    loadChildren: () => import('./pages/aulas/aulas.module').then(m => m.AulasModule)
  }
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
