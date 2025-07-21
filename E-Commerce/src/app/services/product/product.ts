import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../constant/constant';
import {  HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Product {
  constructor(private http : HttpClient){}

  getAllCategoty(){
    return this.http.get(Constant.API_END_POINT+Constant.method.GET_ALL_CATEGORY)
  }

  getAllProducts(){
    return this.http.get(Constant.API_END_POINT+Constant.method.GET_ALL_PRODUCTS)
  }

createProducts(obj: any) {
  console.log('inside services');
  
  return this.http.post('https://freeapi.miniprojectideas.com/api/BigBasket/CreateProduct', obj);
}

}
