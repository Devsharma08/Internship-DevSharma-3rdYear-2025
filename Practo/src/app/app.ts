import { Route, RouterOutlet } from '@angular/router';
import { Home } from '../core/pages/home/home';
import { HospitalTy, User } from '../core/classes/hospital/HospitalExp';
import { CommonModule } from '@angular/common';
import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hospital } from '../core/services/hospital';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet,CommonModule,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'Practo';
  user:User = new User();
  loggedInUserData:HospitalTy = new HospitalTy();

  onLogin() {
    console.log('Login clicked');
    const modalEl = document.getElementById('loginModal')
    if (modalEl) {
      modalEl.style.display = 'block';
    }
  }

  private hospital = inject(Hospital)

  // constructor(private router : Route){}

  addData(){
    this.hospital.Login(this.user).subscribe((res)=>{
      debugger;
      if(res.result){
        this.loggedInUserData = res.data;
        localStorage.setItem('loginToken',JSON.stringify(this.loggedInUserData));
        alert('Login Successfully');
        this.onClose();
      }
    })
  }

  onLogout(){
    localStorage.removeItem('loginToken');
    this.loggedInUserData = new HospitalTy();
    alert('Logged out successfully')
  }


  onClose() {
    console.log('Close clicked');
    const modalEl = document.getElementById('loginModal')
    
    if (modalEl) {
      modalEl.style.display = 'none';
    }
  }
}
