import { Component } from '@angular/core';
import { NewHospital } from '../new-hospital/new-hospital';

@Component({
  selector: 'app-home',
  imports: [NewHospital],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {


}
