import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDesc } from './product-desc';

describe('ProductDesc', () => {
  let component: ProductDesc;
  let fixture: ComponentFixture<ProductDesc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDesc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDesc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
