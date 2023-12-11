import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path          : '',
    component     : HomeComponent
  },
  {
    path          : 'auth',
    loadChildren  : () => import('./pages/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path          : 'dashboard',
    loadChildren  : () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
