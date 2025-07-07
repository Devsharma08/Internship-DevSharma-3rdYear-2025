import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NgFor,NgIf,NgSwitch,NgSwitchCase,NgSwitchDefault],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  protected title = 'Direactive';
  arr = ['dev','ganesh','ramesh','lovely','janki'];

  bool = true
  isLoggedIn = false;

  age = 0;
  color = "";

  get level(): string {
    if (this.age < 10) return 'low';
    else if (this.age < 20) return 'mid';
    else return 'high';
  }
  changeColor(newcolor:string){
    this.color = newcolor;
  }
}


