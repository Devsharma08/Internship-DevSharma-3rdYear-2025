import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Router } from 'express';
import { Hospital } from '../../services/hospital';
import { ApiResponseModel, HospitalTy } from '../../classes/hospital/HospitalExp';

@Component({
  selector: 'app-new-hospital',
  imports: [FormsModule],
  templateUrl: './new-hospital.html',
  styleUrl: './new-hospital.css'
})
export class NewHospital {
  public hospitalData :HospitalTy = new HospitalTy() 

  constructor(private hospital:Hospital){}
  
  onSave(){
    console.log(this.hospitalData);
    this.hospital.registerHospital(this.hospitalData).subscribe((res:ApiResponseModel)=>{
      if(res.result){
        alert(res.message);
      } else{
        alert(res.message)
      }
    },
    error=>{
      alert(JSON.stringify(error))
    })
  }
}
