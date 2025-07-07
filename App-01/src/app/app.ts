import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Register } from './register/register';
import { Header } from './header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Login,Register,Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'App-01';
  name = "dev sharma"
  a = 6;
  b = 1;
  c = this.a + this.b
  num:number = 0; 
  clicked(){
    this.num = Number(prompt('enter the number'));
    console.log("clicked");
  }
  clicked1(){
    // if(typeof num != Number) return 
    return this.num++ ;
  }
  clicked2(){
    // if(typeof num != Number) return 
    if(this.num <= 0) return alert("Number can't be less than 0")
    this.num = this.num - 1;
    console.log(this.num);
    
    return this.num;
  }
  clicked3(){
    return this.num = 0;
  }
}
