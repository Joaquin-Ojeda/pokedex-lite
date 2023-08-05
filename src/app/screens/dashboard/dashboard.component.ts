import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { checkToken } from 'src/app/models/token.functions';
import { PokeApiService } from '../../services/api-pokemons/poke-api.service'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  pokemons: any[]=[];

  constructor(private pokeApiService: PokeApiService, private router: Router){}

  ngOnInit(){
    checkToken(this.router);
    this.getPokemons();
    this.pokemons.sort((x,y)=> x.id>y.id?1:-1);
  }

  getPokemons(){
    let pokemonData;
    for(let i=1; i<=150; i++){
      this.pokeApiService.getPokemons(i).subscribe(
        res=>{
          pokemonData={
            id: i,
            name: res.name,
            image: res.sprites.front_default,
            abilities: res.abilities,
            evolutions: res.evolutions,
            types: res.types
          };
          this.pokemons.push(pokemonData);
        }
      )
    }
  }


}
