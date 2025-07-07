import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Signal';
  x = signal(10);
  y = signal(20);
  newVal = signal(false)
  newVal2 = signal(0)
  z:Signal<any> =  computed(()=>this.x()+this.y())

  val = signal(10);
  // val:Signal<number|string> = computed(()=>100);
  a = signal('hello')
  
  constructor(){
    effect((event)=>{
      console.log(event);
      this.newVal.set(false);
    })
  }  

  clickEvent(){
    this.newVal.set(false);
    if(this.newVal2() == 1){
      this.newVal.set(true);
      this.newVal2.set(this.newVal2()+1)
      return;
    }    
    setTimeout(()=>{
      this.newVal.set(false);
    },2000)
    this.newVal2.set(this.newVal2()+1)
    console.log(this.newVal2());
  }

  inc(){
    console.log(this.z)
    this.x.set(100)
    console.log(this.z);
    this.val.set(this.val()+1)

  }
  dec(){
    this.val.set(this.val()-1)
  }
  
}
