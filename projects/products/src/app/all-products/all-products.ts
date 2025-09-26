import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/environment';
import { EnvironmentDetectorService } from '../../../../shared/src/lib/environment-detector';

@Component({
  selector: 'app-all-products',
  imports: [],
  templateUrl: './all-products.html',
  styleUrl: './all-products.css',
})
export class AllProducts {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private envService: EnvironmentDetectorService
  ) {}
  allProducts = [
    {
      id: 1,
      title: 'Floral Summer Dress',
      description:
        'A light and airy floral print dress, perfect for a sunny day out. It features a flattering A-line silhouette and adjustable straps.',
      price: '₹1,599',
      imgUrl: 'assets/prod1.jpg',
    },
    {
      id: 2,
      title: 'High-Waisted Skinny Jeans',
      description:
        'Classic dark-wash skinny jeans with a comfortable stretch fit. Their high-waisted design offers a sleek, modern look for any casual occasion.',
      price: '₹2,250',
      imgUrl: 'assets/prod2.jpg',
    },
    {
      id: 3,
      title: 'Oversized Knit Sweater',
      description:
        'This cozy oversized sweater is a must-have for a relaxed, chic style. Its soft knit fabric provides warmth without compromising on comfort.',
      price: '₹1,800',
      imgUrl: 'assets/prod3.jpg',
    },
    {
      id: 4,
      title: 'Satin Slip Skirt',
      description:
        'An elegant and versatile satin slip skirt that can be dressed up or down. Its silky smooth texture and bias cut create a beautiful drape.',
      price: '₹1,200',
      imgUrl: 'assets/prod4.jpg',
    },
    {
      id: 5,
      title: 'Cropped Hoodie',
      description:
        'A trendy cropped hoodie made from soft fleece. It pairs perfectly with high-waisted bottoms for a sporty yet stylish ensemble.',
      price: '₹950',
      imgUrl: 'assets/prod5.jpg',
    },
    {
      id: 6,
      title: 'Faux Leather Biker Jacket',
      description:
        'Add an edgy touch to any outfit with this classic faux leather biker jacket. It features a sleek design with silver hardware details.',
      price: '₹3,500',
      imgUrl: 'assets/prod6.jpg',
    },
    {
      id: 7,
      title: 'Puff Sleeve Blouse',
      description:
        'A chic and feminine blouse with dramatic puff sleeves and a square neckline. It’s ideal for transitioning from a day at the office to an evening out.',
      price: '₹1,400',
      imgUrl: 'assets/prod7.jpg',
    },
    {
      id: 8,
      title: 'Wide-Leg Trousers',
      description:
        'Effortlessly stylish wide-leg trousers that are both comfortable and fashionable. Their flowy silhouette creates a sophisticated and relaxed vibe.',
      price: '₹1,999',
      imgUrl: 'assets/prod8.jpg',
    },
  ];
  appUrl = environment.productBasePath;
  addToCart(product: any) {}
  activeIndex: number | null = null;

  playHeart(index: number) {
    this.activeIndex = index;
    setTimeout(() => {
      if (this.activeIndex === index) {
        this.activeIndex = null;
        const appBase = this.envService.getAppBase();
        this.router.navigate([`${appBase}/prod-desc`], { relativeTo: this.route });
      }
    }, 1000);
  }
}
