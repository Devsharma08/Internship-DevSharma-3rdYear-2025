import { Routes } from '@angular/router';
import { Profile } from './profile/profile';

export const routes: Routes = [
  {path:'user/:id/:name',component:Profile}
];
