import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormGroupName, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'ReactiveForms-01';


  // 1 -- form control 

  // name = new FormControl('user');
  // email = new FormControl('user@gmail.com');


  formGroup = new FormGroup({
    name: new FormControl("",[Validators.required]),
    email:new FormControl("",[Validators.required,Validators.maxLength(25),Validators.email]),//.patter('regex')
    password:new FormControl("",[Validators.required,Validators.maxLength(15),Validators.minLength(5)]),
  })

  clear(){
    this.formGroup.reset()
  }

  // validation mathod

  get name(){
    return this.formGroup.get('name')
  }
  get email(){
    return this.formGroup.get('email')
  }
  get password(){
    return this.formGroup.get('password')
  }

  // display(){
  //   console.log("name: ",this.name);
  //   console.log("name: ",this.name.value);
  //   console.log("email: ",this.email.value);
  //   setTimeout(()=>this.clear(),3000)
  // }

  display(){
    console.log(this.formGroup);
    
  }

}
