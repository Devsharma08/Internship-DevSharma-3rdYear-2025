import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [NgFor,RouterLink,RouterOutlet],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
jsonData = [
  {
    name:"dev",
    id:1,
  },
  {
    name:"user2",
    id:2,
  },
  {
    name:"user3",
    id:3,
  },
]
}
