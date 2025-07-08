import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.html',
  styleUrls: ['./profile.css']
})
export class Profile implements OnInit {

  userName:string|null = ""
  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.paramMap.subscribe((params) => {
      console.log(params);
      this.userName = params.get('name');
      console.log(params.get('name')); 
    });
  }
}
