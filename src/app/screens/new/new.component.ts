import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { checkToken } from 'src/app/models/token.functions';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent {

  constructor(private router: Router){}

  ngOnInit(){
    checkToken(this.router);
  }

  
}
