import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'IfElse';
  arr:any = ['1',2,3,4,null]
  value:any = null;
  changeValue1(){
    this.value = "green"
  }
  changeValue(){
    this.value = "red";
  }
  changeValue2(){
    this.value = "blue";
  }
  changeValue3(){
    this.value = "black";
  }
  changeValue4(inputValue:any){
    // this.value = (inputValue.targte as HTMLInputElement).value
    this.value = inputValue;
    console.log(this.value);
  }
}
