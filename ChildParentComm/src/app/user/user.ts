import { NgFor } from '@angular/common';
import { Component, EventEmitter, Output,Input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true, 
  imports: [NgFor,User],
  templateUrl: './user.html',
  styleUrls: ['./user.css'] 
})
export class User {

  // <!-- this is child to parent communication -->

  // users = ['user1', 'user2', 'user3'];

  // @Output() getUsers = new EventEmitter<string[]>(); 

  // ngOnInit() {
  //   this.getUsers.emit(this.users); 
  // }

  @Input() user:string = ""
}
