import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Event';
  event1(){
    console.log('this is when click event performed');
  }
  event2(){
    console.log('mouse over performed');
  }
  event3(){
    console.log('mouse leave performed');
  }
  event = ''
  event4(event:any){
    console.log("input event: ",event);
    console.log("input event: ",event.data);
    console.log("input event: ",(event.target as HTMLInputElement).value);
    console.log("input event: ",event.type);
  }
  event5(event:any){
  console.log("blur or focus running");
  
  }
}
