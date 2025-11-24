import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/environment';
import { EnvironmentDetectorService } from '../../../../shared/src/lib/environment-detector';
import { ProductServices } from '../product-services';

@Component({
  selector: 'app-all-products',
  imports: [],
  templateUrl: './all-products.html',
  styleUrl: './all-products.css',
})
export class AllProducts {
  url = environment._WEBGATEWAY_BASIC_URL_;
  allProducts: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private envService: EnvironmentDetectorService,
    private productService: ProductServices
  ) {}

  ngOnInit() {
    this.getAllproducts();
  }

  appUrl = environment.productBasePath;
  activeIndex: number | null = null;

  playHeart(index: number, product: any) {
    this.activeIndex = index;
    setTimeout(() => {
      if (this.activeIndex === index) {
        this.activeIndex = index;
        const appBase = this.envService.getAppBase();
        this.productService.activeProduct.set(product);
        this.router.navigate([`${appBase}/prod-desc`], {
          queryParams: { prodId: this.activeIndex },
        });
      }
    }, 1100);
  }
  getAllproducts() {
    this.productService.getAllProducts().subscribe({
      next: (res: any) => {
        this.allProducts = res?.body?.data;
        console.log(this.allProducts);
      },
      error: (err: any) => {},
    });
  }
}
