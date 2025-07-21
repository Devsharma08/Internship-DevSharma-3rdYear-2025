import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../../../services/product/product';
import { HttpErrorResponse } from '@angular/common/http';
import { ProductType } from '../../../Constant/Product';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule, NgFor],
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class Products implements OnInit {
  sidePannelVisible = true;
  isSaving = false;
  errorMessage: string | null = null;

  // Initialize with default values
    createProduct: ProductType = {
    ProductId: 0,
    ProductSku: '',
    ProductName: '',
    ProductPrice: 0,
    ProductShortName: '',
    ProductDescription: '',
    CreatedDate: new Date().toISOString(),
    DeliveryTimeSpan: '',
    CategoryId: 2147483647,
    ProductImageUrl: '',
    UserId: 0
  };

  categoryList: any[] = [];
  productList: any[] = [];

  constructor(private productSrv: Product) {}

  ngOnInit(): void {
    this.loadInitialData();
  }

  loadInitialData() {
    this.getAllCategoryList();
    this.getAllProduct();
  }

  getAllProduct() {
    this.productSrv.getAllProducts().subscribe({
      next: (res: any) => {
        this.productList = res.data;
      },
      error: (err) => {
        console.error('Error fetching products:', err);
        this.errorMessage = 'Failed to load products. Please try again.';
      }
    });
  }

  onSave() {
    console.log("this function is called");
    this.isSaving = true;
    this.errorMessage = null;

    console.log('Submitting product:', this.createProduct);

    this.productSrv.createProducts(this.createProduct).subscribe({
      next: (res: any) => {
        console.log('API Response:', res);
        this.isSaving = false;
        this.getAllProduct();
        this.resetForm();
      },
      error: (err: HttpErrorResponse) => {
        this.isSaving = false;
        console.error('Full error:', err);

        if (err.status === 0) {
          this.errorMessage = 'Network error: Unable to connect to server. Check your internet connection.';
        } else {
          this.errorMessage = err.error?.message || 'Failed to create product. Please try again.';
        }
      }
    });
  }

  getAllCategoryList() {
    this.productSrv.getAllCategoty().subscribe({
      next: (res: any) => {
        this.categoryList = res.data;
      },
      error: (err) => {
        console.error('Error fetching categories:', err);
        this.errorMessage = 'Failed to load categories.';
      }
    });
  }

  resetForm() {
    this.createProduct = {
      ProductId: 0,
      ProductSku: '',
      ProductName: '',
      ProductPrice: 0,
      ProductShortName: '',
      ProductDescription: '',
      CreatedDate: new Date().toISOString(),
      DeliveryTimeSpan: '',
      CategoryId: 0,
      ProductImageUrl: '',
      UserId: 0
    };
    this.sidePannelVisible = true;
  }

  openSidePannel() {
    this.sidePannelVisible = false;
  }

  closeSidePannel() {
    this.sidePannelVisible = true;
  }
}