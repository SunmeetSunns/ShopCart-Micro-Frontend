import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-slider',
  imports: [],
  templateUrl: './slider.html',
  styleUrl: './slider.css'
})
export class Slider implements OnInit {
  images = [
    'assets/prod1.jpg',
    'assets/prod2.jpg',
    'assets/prod3.jpg',
    'assets/prod4.jpg',
    'assets/prod5.jpg',
    'assets/prod6.jpg',
    'assets/prod7.jpg',
    'assets/prod8.jpg',
    'assets/prod1.jpg',
    'assets/prod2.jpg',
    'assets/prod3.jpg',
    'assets/prod4.jpg',
    'assets/prod5.jpg',
    'assets/prod6.jpg',
    'assets/prod7.jpg',
    'assets/prod8.jpg',
  ];

  // This signal will hold the images to be displayed in the carousel
  displayedImages = signal<string[]>([]);

  ngOnInit() {
    // Initialize displayedImages with the original images array
    this.displayedImages.set(this.images);
    this.startInfiniteScroll();
  }

  startInfiniteScroll() {
    setInterval(() => {
      // Remove the first image and push it to the end of the array
      const firstImage = this.displayedImages()[0];
      const restOfImages = this.displayedImages().slice(1);

      this.displayedImages.set([...restOfImages, firstImage]);

    }, 10); // Set the interval based on your animation duration.
  } isManualControl = signal(false);

  // Signal jo manual control ke liye current index ko track karega
  currentIndex = signal(0);
  private timeoutId: any;
  constructor() { }


  slideLeft() {
    
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }

    this.isManualControl.set(true); 
    this.currentIndex.update(value => (value === 0) ? 0 : value - 1);


    this.timeoutId = setTimeout(() => {
      this.isManualControl.set(false);
    }, 2000); 
  }

  slideRight() {
   
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }

    this.isManualControl.set(true); 
    this.currentIndex.update(value => (value === this.images.length - 1) ? this.images.length - 1 : value + 1);


    this.timeoutId = setTimeout(() => {
      this.isManualControl.set(false);
    }, 2000); 
  }
}