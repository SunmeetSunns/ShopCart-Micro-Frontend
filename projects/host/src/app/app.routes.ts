import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [
  {
    path: 'products',
    loadChildren: () => loadRemoteModule('products', './Routes').then((m) => m.routes),
  },
  {
    path: 'orders',
    loadChildren: () => loadRemoteModule('orders', './Routes').then((m) => m.routes),
  },
  {
    path: 'cart',
    loadChildren: () => loadRemoteModule('cart', './Routes').then((m) => m.routes),
  },
];
