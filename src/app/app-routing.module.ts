import { DashboardComponent } from './@admin/pages/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  {
    path: 'home', 
    loadChildren: () => import('./@public/pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'contact', 
    loadChildren: () => import('./@public/pages/contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'admin', 
    loadChildren: () => import('./@admin/pages/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'admin/users', 
    loadChildren: () => import('./@admin/pages/users/users.module').then(m => m.UsersModule)
  },
  { 
    path: '', 
    redirectTo: 'home', 
    pathMatch: 'full' },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
  {
    useHash:true,
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
