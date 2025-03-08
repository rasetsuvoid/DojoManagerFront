import { Routes } from '@angular/router';
import {HomeComponent} from './features/home/home.component';
import {LoginComponent} from './features/auth/login/login.component';
import {RegisterAcademyComponent} from './features/auth/register-academy/register-academy.component';
import {DashboardComponent} from './features/dashboard/dashboard.component';
import {HomeDashboardComponent} from './features/dashboard/home-dashboard/home-dashboard.component';
import {PurchaseMembershipComponent} from './features/dashboard/purchase-membership/purchase-membership.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register-academy', component: RegisterAcademyComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: HomeDashboardComponent
      },
      {
        path: 'PurchaseMembership',
        component: PurchaseMembershipComponent
      },
    ]
  }
];
