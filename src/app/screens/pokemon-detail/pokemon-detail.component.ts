import { Component } from '@angular/core';
import { PokeApiService } from '../../services/api-pokemons/poke-api.service'
import { ActivatedRoute, Router } from '@angular/router';
import { EvolutionApiService } from '../../services/evolution-api/evolution-api.service'
import { Pokemons } from 'src/app/data/pokemons-data';
import { checkToken } from 'src/app/models/token.functions';
import { Evolutions } from 'src/app/data/evolutions-data';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent {

  pokemon: any;
  constructor(private usuariosService: UsuariosService, private pokeApiService: PokeApiService, private router: Router, private activatedRouter: ActivatedRoute, private evolutionApiService: EvolutionApiService){
    this.activatedRouter.params.subscribe(
      params=>{
        this.getPokemon(params['id']);
      }
    );
  };

  ngOnInit(){
    checkToken(this.router);
  }

  //FUNCION PARA OBTENER EL POKEMON LLAMANDO A LA POKEAPI(YA QUE EL ARCHIVO DE POKEMONS LO ENCUENTRA VACIO A VECES)
  getPokemon(id: any){
    let poke_aux: any;
    this.pokeApiService.getPokemons(id).subscribe(
      res=>{
        poke_aux={
          id: res.id,
          name: res.name,
          image: res.sprites.front_default,
          abilities: res.abilities,
          evolutions: this.findEvolutions(res.name),
          types: res.types,
          found: this.pokemonStatus(res)
        }
        this.pokemon = poke_aux;
      }
    );
  }

  //BUSCA Y ADMINISTRA LAS EVOLUCIONES DEL POKEMON
  findEvolutions(name: string): string[]{
    let evolutions: any[]=[];
    for(let evol of Evolutions){
      if(evol.pokemon == name){
        evolutions = evol.evolutions;
        return evolutions;
      }
      for(let i=0;i<evol.evolutions.length;i++){
        if(evol.evolutions[i].evo_name==name){
          evolutions = evol.evolutions;
          evolutions.push({
            evo_name: evol.pokemon,
            min_level: evol.level
          });
          evol.pokemon = name;
          evol.level = evolutions[i].min_level;
          evolutions.splice(i,1);
          evolutions.reverse();
          return evolutions;
        }
      }
    }
    return [];
  }

  //REVISA SI EL POKEMON YA FUE ATRAPADO POR EL USUARIO
  pokemonStatus(pokemon: any){
    let pokes_vistos = this.usuariosService.getPokemonsVistos(localStorage.getItem('token'));
    let lvl;
    let found = false;
    let aux_arr;
    for(let i = 0; i<pokes_vistos.length;i++){
      if(pokes_vistos[i].id==pokemon.id){
        lvl=pokes_vistos[i].lvl;
        found=true;
        aux_arr={
          lvl: lvl,
          foundBool: found
        }
        return aux_arr;
      }
      else{
        lvl='??';
        aux_arr={
          lvl: lvl,
          foundBool: found
        }
      }
    }
    return aux_arr;
   }
}
