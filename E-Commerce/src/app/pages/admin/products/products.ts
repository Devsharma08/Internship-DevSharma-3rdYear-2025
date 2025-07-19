import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../../../services/product/product'; // Assuming it is a service

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule, NgFor],
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class Products implements OnInit {
  sidePannelVisible = true;

  createProduct: any = {
    productId: '',
    productSku: '',
    productName: '',
    productPrice: 0,
    productShortName: '',
    productDescription: '',
    createdDate: new Date(),
    deliveryTimeSpan: '',
    categoryId: 0,
    productImageUrl: '',
    userId: 0
  };

  categoryList: any[] = [];
  productList: any[] = [];
  isSaving = false;

  constructor(private productSrv: Product) {}

  ngOnInit(): void {
    this.getAllCategoryList();
    this.getAllProduct();
  }

  getAllProduct() {
    this.productSrv.getAllProducts().subscribe((res: any) => {
      this.productList = res.data;
    });
  }

  onSave() {
    this.productSrv.createProducts(this.createProduct).subscribe((res: any) => {
      console.log('Submitted categoryId:', this.createProduct.categoryId);
      this.getAllProduct();
    });
  }

  getAllCategoryList() {
    this.productSrv.getAllCategoty().subscribe((res: any) => {
      this.categoryList = res.data;
    });
  }

  openSidePannel() {
    this.sidePannelVisible = false;
  }

  closeSidePannel() {
    this.sidePannelVisible = true;
  }
}
