import { Component } from '@angular/core';
import { PokeApiService } from '../../services/api-pokemons/poke-api.service'
import { ActivatedRoute, Router } from '@angular/router';
import { EvolutionApiService } from '../../services/evolution-api/evolution-api.service'
import { Pokemons } from 'src/app/data/pokemons-data';
import { checkToken } from 'src/app/models/token.functions';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent {

  pokemon: any;
  constructor(private pokeApiService: PokeApiService, private router: Router, private activatedRouter: ActivatedRoute, private evolutionApiService: EvolutionApiService){
    this.activatedRouter.params.subscribe(
      params=>{
        this.getPokemon(params['id']);
      }
    );
  };

  ngOnInit(){
    checkToken(this.router);
  }

  getPokemon(id: any){
    let poke_aux: any;
    this.pokeApiService.getPokemons(id).subscribe(
      res=>{
        poke_aux={
          id: res.id,
          name: res.name,
          image: res.sprites.front_default,
          abilities: res.abilities,
          evolutions: [],
          types: res.types
        };
        this.pokemon = poke_aux;
      }
    );
    //INTENTO DE BUSCAR EVOLUCIONES EN POKEAPI
    // this.evolutionApiService.getEvolutions(id).subscribe(
    //   res=>{
    //     console.log(res.chain.evolves_to[0].species);
    //   }
    // )
  };


}
