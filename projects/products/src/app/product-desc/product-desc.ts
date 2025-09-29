import { Component } from '@angular/core';
import { NgxImageZoomModule } from 'ngx-image-zoom';

@Component({
  selector: 'app-product-desc',
  imports: [NgxImageZoomModule],
  templateUrl: './product-desc.html',
  styleUrl: './product-desc.css',
  standalone: true,
})
export class ProductDesc {}
