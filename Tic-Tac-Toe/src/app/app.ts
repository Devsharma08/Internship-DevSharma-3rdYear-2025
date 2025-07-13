import { Component,Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Square } from './square/square';
import { Board } from './board/board';

@Component({
  selector: 'app-root',
  imports: [Board],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'Tic-Tac-Toe';
}

