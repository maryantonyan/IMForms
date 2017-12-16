import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginRegisterComponent } from './components/login-register/login-register.component';
import { HomeComponent } from './components/home/home.component';
import { CreateFormComponent } from './components/create-form/create-form.component';
import { MyFormsComponent } from './components/my-forms/my-forms.component';
import { AuthGuard } from './services/_guards/index';

export const HomeRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'create-form',
    component: CreateFormComponent,
  },
  {
    path: 'my-forms',
    component: MyFormsComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

export const appRoutes: Routes = [
   {
    path: '',
    redirectTo: 'login-register',
    pathMatch: 'full'
  },
  {
    path: 'login-register',
    component: LoginRegisterComponent,
  },
  {
   path: '',
   canActivate: [AuthGuard],
   data: { title: 'Secure Views' },
   children: HomeRoutes
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

