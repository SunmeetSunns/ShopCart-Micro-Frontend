import { Routes } from '@angular/router';
import { ProductDesc } from './product-desc/product-desc';
import { AllProducts } from './all-products/all-products';

export const routes: Routes = [
    { path: '', component: AllProducts },
    { path: 'prod-desc', component: ProductDesc }
];
