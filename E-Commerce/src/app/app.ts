import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser, faTrash } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core'; 
import {FormsModule, NgForm} from '@angular/forms'



@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,FontAwesomeModule,FormsModule],
  templateUrl: 'app.html' ,
  styleUrl: './app.css'
})
export class App {
  protected title = 'E-Commerce';
  faTrash: IconProp = faTrash;
  faUser: IconProp = faUser;
}
