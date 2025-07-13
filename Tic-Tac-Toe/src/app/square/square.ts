import { Component,Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-square',
  imports: [MatButtonModule],
  templateUrl: './square.html',
  styleUrl: './square.scss'
})
export class Square{
  
  @Input() value: 'X' | 'O' = 'X';
}
