import { Component } from '@angular/core';
import { PokeApiService } from './services/api-pokemons/poke-api.service';
import { Pokemons } from './data/pokemons-data';
import { EvolutionApiService } from './services/evolution-api/evolution-api.service';
import { Evolutions } from './data/evolutions-data';
import { Evolution } from './models/evolution';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokedex-lite';
  evolutions_names: any[]=[];

  constructor(private pokeApiService: PokeApiService, private evolutionApiService: EvolutionApiService){}

  ngOnInit(){
    this.saveEvolutions();
    this.savePokemons();
  }

  savePokemons(){
    let pokemonData;
    for(let i=1; i<=150; i++){
      this.pokeApiService.getPokemons(i).subscribe(
        res=>{
          pokemonData={
            id: i,
            name: res.name,
            image: res.sprites.front_default,
            abilities: res.abilities,
            evolutions: [],
            types: res.types
          };
          Pokemons.push(pokemonData);
        }
      );
    };
  }
  saveEvolutions(){
    let pokemonEvolutions;
    let evolution_aux;
    for( let i=1;i<=77;i++ ){
      this.evolutionApiService.getEvolutions(i).subscribe(
        res=>{
          evolution_aux=res.chain.evolves_to;
          this.allEvolutions(evolution_aux);
          pokemonEvolutions={
            id: i,
            pokemon: res.chain.species.name,
            evolutions: this.evolutions_names
          }
          Evolutions.push(pokemonEvolutions);
          this.evolutions_names = [];
        }
      );
    };
  }

  allEvolutions(evolve: any[]){
    if(evolve.length>0){
      this.evolutions_names.push(evolve[0].species.name);
      this.allEvolutions(evolve[0].evolves_to);
    }
  }

}
