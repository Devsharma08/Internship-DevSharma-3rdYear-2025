import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {
  userName: any = "";

  // method -1 

  constructor(private router:ActivatedRoute) {}
  // ngOnInit(): void { 
    // const name = this.router.snapshot.paramMap.get('name');
    // console.log(name);
    
    // this.userName = name;
  // }

    // method - 2
    // ngOnInit(){
    //   this.router.queryParams.subscribe((data)=>{
    //     this.userName = data['name'];
    //   }
    //   )
    // }

    // method - 3
    // constructor(router:Router){}
    ngOnInit(){
      this.router.data.subscribe(data=>
        this.userName = data['name']
      )
    }
}
