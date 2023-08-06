import { Component } from '@angular/core';
import { logOut } from 'src/app/models/token.functions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router: Router){}

  logOutBtn(){
    logOut(this.router);
  }
  dashboardRedirect(){
    this.router.navigate(['dashboard']);
  }

  newBtn(){
    this.router.navigate(['new']);
  }
}
