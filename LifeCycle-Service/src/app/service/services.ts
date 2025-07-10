import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Services {
data=[
  {name:'user1',id:1},
  {name:'user2',id:2},
  {name:'user3',id:3}
]
  constructor() {
    console.log('this is service constructor');
  }

  getData(){
    return this.data;
  }
}
