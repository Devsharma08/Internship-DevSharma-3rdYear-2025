import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Admin } from './admin/admin';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.html',
  standalone:true,
  styleUrls: ['./app.css']
})
export class App {
  protected title = 'LazyLoading';
}
