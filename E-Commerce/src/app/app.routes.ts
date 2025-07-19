import { Routes } from '@angular/router';
import { Login } from './pages/admin/login/login';
import { Layout } from './pages/admin/layout/layout';
import { Products } from './pages/admin/products/products';
import { Cart } from './pages/admin/cart/cart';

export const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full',
  },
  {
    path:'login',
    component:Login
  },
  {
    path:'',
    component:Layout,
    children:[
      { path:'product',
        component:Products
      },
      { path:'cart',
        component:Cart
      }
    ]
  }
];
