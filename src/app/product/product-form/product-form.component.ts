import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/shared/service/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  validateForm!: UntypedFormGroup;

  submitProductForm(): void {
    this.productService.addProductService(this.validateForm.value).subscribe();
    console.log('submit', this.validateForm.value);
  }

  constructor(private fb: UntypedFormBuilder, private productService: ProductService) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      productName: [null, [Validators.required]],
      productPrice: [null, [Validators.required]]
    });
  }
}
