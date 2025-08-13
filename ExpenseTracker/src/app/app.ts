import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Tracker } from './tracker/tracker';

@Component({
  selector: 'app-root',
  imports: [Tracker],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'ExpenseTracker';
}
