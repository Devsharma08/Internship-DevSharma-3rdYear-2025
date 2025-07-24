import { Component, OnDestroy } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { Hospital } from '../../services/hospital';
import { ApiResponseModel, HospitalTy } from '../../classes/hospital/HospitalExp';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-new-hospital',
  imports: [FormsModule],
  templateUrl: './new-hospital.html',
  styleUrl: './new-hospital.css'
})
export class NewHospital implements OnDestroy{
  public hospitalData :HospitalTy = new HospitalTy() 
  private subscription : Subscription [] = [];
  constructor(private hospital:Hospital){}

  onSave(){
    this.subscription.push(
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
    )    
  }
  ngOnDestroy(){
    this.subscription.forEach(sub => sub.unsubscribe());
  }
}
