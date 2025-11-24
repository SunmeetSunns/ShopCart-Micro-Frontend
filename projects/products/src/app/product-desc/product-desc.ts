import { Component, OnInit } from '@angular/core';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { ProductServices } from '../product-services';

@Component({
  selector: 'app-product-desc',
  imports: [NgxImageZoomModule],
  templateUrl: './product-desc.html',
  styleUrl: './product-desc.css',
  standalone: true,
})
export class ProductDesc implements OnInit {
  activeProduct: any;
  constructor(private productService: ProductServices) {}
  ngOnInit() {
    this.activeProduct = this.productService.activeProduct();
    console.log(this.activeProduct);
  }
}
