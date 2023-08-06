import { Component } from '@angular/core';
import { PokeApiService } from './services/api-pokemons/poke-api.service';
import { Pokemons } from './data/pokemons-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokedex-lite';

  constructor(private pokeApiService: PokeApiService){}

  ngOnInit(){
    this.savePokemons();
  }

  savePokemons(){
    let pokemonData;
    for(let i=1; i<=300; i++){
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
          Pokemons.push(pokemonData);
        }
      )
    }
  }
}
