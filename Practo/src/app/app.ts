import { RouterOutlet } from '@angular/router';
import { Home } from '../core/pages/home/home';
import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'Practo';

  onLogin() {
    console.log('Login clicked');
    const modalEl = document.getElementById('loginModal')
  
    if (modalEl) {
      modalEl.style.display = 'block';
    }
  }

  addData(){}

  onClose() {
    console.log('Close clicked');
    const modalEl = document.getElementById('loginModal')
    
    if (modalEl) {
      modalEl.style.display = 'none';
    }
  }
}
