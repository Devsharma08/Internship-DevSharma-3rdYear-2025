import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Employee } from '../model/Employee';
import { __values } from 'tslib';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'LocalStorage';
  userList:string|null = '';

  employeeForm:FormGroup = new FormGroup({}) ;

  EmpList:Employee[] = [];
  EmplyeeObj :Employee = new Employee();

  constructor(){
    this.createEmployeeForm();
     let oldData = localStorage.getItem("EmpData");
    if(oldData != null){
      let parseData = JSON.parse(oldData);
      this.employeeForm.controls['empId'].setValue(parseData.length +1)
      this.EmpList = parseData
      
    }
  }

  handleReset(){
    this.employeeForm = new FormGroup({}) ;
    this.createEmployeeForm();
  }

  getUserData(userData:any){
    this.userList = localStorage.getItem(JSON.stringify(Object.keys(userData.value)))
  }
  createEmployeeForm(){
    this.employeeForm = new FormGroup({
      empId: new FormControl(this.EmplyeeObj.empId),
      name: new FormControl(this.EmplyeeObj.name,[Validators.required,Validators.minLength(6)]),
      email: new FormControl(this.EmplyeeObj.email,[Validators.required,Validators.email]),
      address: new FormControl(this.EmplyeeObj.address,[Validators.required]),
      pincode: new FormControl(this.EmplyeeObj.pincode,[Validators.required,Validators.minLength(6)]),
      state: new FormControl(this.EmplyeeObj.pincode,[Validators.required]),
      city: new FormControl(this.EmplyeeObj.city,[Validators.required]),
      contact: new FormControl(this.EmplyeeObj.contact,[Validators.required,Validators.maxLength(10)]),
    })
  }

  handleSubmit(userData:any){
    localStorage.setItem(JSON.stringify(Object.keys(userData.value)),JSON.stringify(Object.values(userData.value)));
    this.userList
  }

  handleEdit(user:Employee){
    this.EmplyeeObj = user;
    this.createEmployeeForm();
  }

  handleDelete(id:number){
    // debugger;
    const isDelete = confirm("Are you sure wan't to delete");
    if(isDelete){
      const index = this.EmpList.findIndex((m:any)=>m.empId == id)
      console.log(index);
      
      this.EmpList.splice(index,1);
    }
    localStorage.setItem("EmpData",JSON.stringify(this.EmpList))
  }

  

  onUpdate(){
    console.log('update btn clicked');
    
    // debugger;
    const record = this.EmpList.find((m:any) => m.empId == this.employeeForm.controls['empId'].value)
    if(record!=undefined){
      record.name = this.employeeForm.controls['name'].value; 
      record.contact = this.employeeForm.controls['contact'].value; 
      record.pincode = this.employeeForm.controls['pincode'].value; 
      record.state = this.employeeForm.controls['state'].value; 
      record.city = this.employeeForm.controls['city'].value; 
      record.email = this.employeeForm.controls['email'].value; 
      record.address = this.employeeForm.controls['address'].value; 
    }
    localStorage.setItem("EmpData",JSON.stringify(this.EmpList))
    this.employeeForm = new FormGroup({});
    this.createEmployeeForm();
  }
  

  onSave(){
    let oldData = localStorage.getItem("EmpData");
    console.log(oldData);
    
    if(oldData != null){
      let parseData = JSON.parse(oldData)
      console.log(parseData.length);
      
      this.employeeForm.controls['empId'].setValue(parseData.length )
      parseData.unshift(this.employeeForm.value)
      this.EmpList = parseData;
    }
    else{
      this.employeeForm.controls['empId'].setValue(0)
      this.EmpList.unshift(this.employeeForm.value)
    }
    localStorage.setItem("EmpData",JSON.stringify(this.EmpList)) 
    this.handleReset();
  }
}
