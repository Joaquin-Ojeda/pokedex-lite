import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { checkToken } from 'src/app/models/token.functions';
import { PokeApiService } from 'src/app/services/api-pokemons/poke-api.service';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';

@Component({
  selector: 'app-my-pokedex',
  templateUrl: './my-pokedex.component.html',
  styleUrls: ['./my-pokedex.component.css']
})
export class MyPokedexComponent {
  user_pokemons: any[]=[];

  constructor(private usuariosService: UsuariosService, private pokeApiService: PokeApiService, private router: Router){}

  ngOnInit(){
    checkToken(this.router);
    this.getPokemons();
  }

  getPokemons(){
    let pokes_vistos = this.usuariosService.getPokemonsVistos(localStorage.getItem('token'));
    let pokemonData;
    for(let pokes of pokes_vistos){
      this.pokeApiService.getPokemons(pokes.id).subscribe(
        res=>{
          pokemonData={
            id: pokes.id,
            name: res.name,
            image: res.sprites.front_default,
            abilities: res.abilities,
            evolutions: [],
            types: res.types
          };
          this.user_pokemons.push(pokemonData);
        }
      );
    }
  }

back(){
  this.router.navigate(['dashboard'])
}

}
