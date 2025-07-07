import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Home } from '../home/home';
import { Contact } from '../contact/contact';
import { Login } from '../login/login';
import { Logout } from '../logout/logout';
import { About } from '../about/about';
import { NotFound } from '../not-found/not-found';


@Component({
  selector: 'app-header',
  imports: [RouterOutlet,RouterLinkActive,RouterLink,Home,Contact,Login,Logout,About,NotFound],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

}

