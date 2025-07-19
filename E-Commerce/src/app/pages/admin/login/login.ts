import { NgIf } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule,NgIf],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  
  user = {
    email:'',
    password:'',
  }
  constructor(private router:Router){}
  setValue(userform:any){
    console.log(userform.value);
  }

  login(){
    if(this.user.email == 'test@mail.com' && this.user.password == '12345'){
      this.router.navigateByUrl('/product')
    } else{
      alert('invalid Credencials \
        email:test@mail.com\
        password:12345')
    }
  }
  }
