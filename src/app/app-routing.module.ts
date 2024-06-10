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
  },
  {
    path: 'area-do-aluno',
    loadChildren: () => import('./pages/area-do-aluno/area-do-aluno.module').then(m => m.AreaDoAlunoModule)
  },
  {
    path: 'plano-estudo',
    loadChildren: () => import('./pages/plano-estudo/plano-estudo.module').then(m => m.PlanoEstudoModule)
  },
  {
    path: 'simulado',
    loadChildren: () => import('./pages/simulado/simulado.module').then(m => m.SimuladoModule)
  },
  {
    path: 'plano',
    loadChildren: () => import('./pages/plano/plano.module').then(m => m.PlanoModule)
  }
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
