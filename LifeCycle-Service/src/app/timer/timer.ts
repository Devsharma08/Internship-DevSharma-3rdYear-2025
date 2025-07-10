import { Component } from '@angular/core';

@Component({
  selector: 'app-timer',
  imports: [],
  templateUrl: './timer.html',
  styleUrl: './timer.css'
})
export class Timer {

  timer:any;
  second:number = 0;

  ngOnInit():void{
    console.log('ngOninit method run');
    
    this.timer = setInterval(()=>{
      this.second++;
      console.log('time is: ',this.second);
    },1000)
  }

  ngOnDestroy():void{
    console.log('destroy method run');
    
    if(this.timer){
      clearInterval(this.timer)
      console.log('timer stopped');
      
    }
  }

}
