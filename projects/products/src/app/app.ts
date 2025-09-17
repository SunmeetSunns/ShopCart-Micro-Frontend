import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AllProducts } from "./all-products/all-products";

@Component({
  selector: 'app-root',
  imports: [AllProducts],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('products');
}
