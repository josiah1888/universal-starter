import { RouterConfig } from '@angular/router';
import { Home } from './home';
import { About } from './app.component';
import { HousesComponent } from './house/houses.component';
import { LoginComponent } from './login/login.component';

export const routes: RouterConfig = [
  { path: '', redirectTo: 'home' },
  { path: 'home', component: HousesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: About },
  { path: '**', redirectTo: 'home' },
];
