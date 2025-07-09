import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './user/user'; 
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, User, NgFor], 
  templateUrl: './app.html',
  styleUrls: ['./app.css'] 
})
export class App {

  // <!-- this is child to parent communication -->

  // usersFromChild: string[] = [];

  // receiveUsers(data: string[]) {
  //   this.usersFromChild = data;
  //   console.log('Received from child:', data);
  // }

  // reusing file code

  users = ['user1','user2','user3']
  trackByIndex(index: number): number {
    return index;
  }
}
