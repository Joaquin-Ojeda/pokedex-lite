import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { checkToken } from 'src/app/models/token.functions';
import { PokeApiService } from '../../services/api-pokemons/poke-api.service'
import { Pokemons } from 'src/app/data/pokemons-data';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  pokemons: any[]=[];

  constructor( private router: Router){}

  ngOnInit(){
    checkToken(this.router);
    this.getPokemons();
    this.pokemons.sort((x,y)=> x.id>y.id?1:-1);
  }

  getPokemons(){
    this.pokemons = Pokemons;
  }

  my_pokedex(){
    this.router.navigate(['my-pokedex'])
  }

}
