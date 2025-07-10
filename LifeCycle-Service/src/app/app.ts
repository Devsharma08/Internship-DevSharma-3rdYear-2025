import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Timer } from './timer/timer';
import { NgFor, NgIf } from '@angular/common';
import { Services } from './service/services';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Timer,NgIf,NgFor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'LifeCycle-Service';
  showTimer = true;

  userData:{
    name: string;
    id: number;
}[]|undefined = undefined;

  toggleTimer(){
    this.showTimer = !this.showTimer
  }

  constructor(private service:Services){
    console.log('this is app constructor');
  }

  trackByUserFn(index: number, user:any): number {
    return user.id; 
  }

  getServiceData(){
    this.userData = this.service.getData();
    console.log(this.userData);
  }
  }

