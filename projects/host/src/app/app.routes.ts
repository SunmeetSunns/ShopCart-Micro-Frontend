import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';


export const routes: Routes = [
    { path: 'products', loadComponent: () => loadRemoteModule('products', './Component').then(m => m.App) },
    { path: 'orders', loadComponent: () => loadRemoteModule('orders', './Component').then(m => m.App) },
    { path: 'cart', loadComponent: () => loadRemoteModule('cart', './Component').then(m => m.App) }
];
