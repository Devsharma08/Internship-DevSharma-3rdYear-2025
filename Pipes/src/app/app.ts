import { CurrencyPipe, DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, Pipe } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PipePipe } from './Pipes/pipe-pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,UpperCasePipe,LowerCasePipe,TitleCasePipe,DatePipe,CurrencyPipe,PipePipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Pipes';
  name= "dev sharma"
  date = new Date(Date.now())

  
}
