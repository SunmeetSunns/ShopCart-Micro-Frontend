import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AllProducts } from './all-products/all-products';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  constructor(private router: Router) {
    console.log('Configured routes:', this.router.config);
  }
  protected readonly title = signal('products');
}
