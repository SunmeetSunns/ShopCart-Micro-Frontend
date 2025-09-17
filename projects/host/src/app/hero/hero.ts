import { Component, ViewChild } from '@angular/core';
import { Slider } from '../slider/slider'; // Path fix kiya
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [Slider],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
  standalone: true 
})
export class Hero {
 
  @ViewChild('sliderComponent') sliderComponent!: Slider;

  constructor(private router: Router) {}

  slideLeft() {
    this.sliderComponent.slideLeft();
  }

  slideRight() {
    this.sliderComponent.slideRight();
  }

  routeToProducts() {
    this.router.navigate(['/products']);
  }
}