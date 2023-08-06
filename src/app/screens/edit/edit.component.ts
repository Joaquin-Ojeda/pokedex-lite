import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { checkToken } from 'src/app/models/token.functions';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  constructor(private router: Router){}

  ngOnInit(){
    checkToken(this.router);
  }
}
