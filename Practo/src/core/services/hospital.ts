import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Constant } from '../contact/contact';
import { ApiResponseModel, HospitalTy } from '../classes/hospital/HospitalExp';

@Injectable({
  providedIn: 'root'
})
export class Hospital {
  constructor(private http:HttpClient){}

  registerHospital(obj:HospitalTy):Observable<ApiResponseModel>{
    return this.http.post<ApiResponseModel>(environment.API_URL+Constant.API_END_POINT.ADD_NEW_HOSPITAL,obj)
  }
}
