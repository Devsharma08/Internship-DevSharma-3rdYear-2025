import { Routes } from '@angular/router';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Login } from './login/login';
import { Logout } from './logout/logout';
import { Home } from './home/home';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
  {path:'',component:Home},
  {path:'about',component:About},
  {path:'contact',component:Contact},
  {path:'login',component:Login},
  {path:'logout',component:Logout},
  {path:'**',component:NotFound},
];
