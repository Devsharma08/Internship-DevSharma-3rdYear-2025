import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterModule,RouterLink,NgFor],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  jsonData = [
    {
    id:1,
    name:"dev",
  },
    {
    id:2,
    name:"ganesh",
  },
    {
    id:3,
    name:"ram",
  },
]

// method -2

// constructor(private router:Router){}
// clickEvent(){
//       this.router.navigate(['profile'],{queryParams:{name:"dev sharma"}})
//     }

}
