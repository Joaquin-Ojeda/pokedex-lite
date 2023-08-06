import { Component, Input} from '@angular/core';
import { UsuariosService } from './../../services/usuarios/usuarios.service';
import { checkToken } from 'src/app/models/token.functions';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/models/pokemon';
import { Pokemons } from 'src/app/data/pokemons-data';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css']
})
export class PokeListComponent {

   @Input() allPokemons: any[]=[];
   usuario: any;
   lvl: any;

   constructor(private usuariosService: UsuariosService, private router: Router){}

   ngOnInit(){
    checkToken(this.router);
    let username=localStorage.getItem('token');
    this.usuario = this.usuariosService.getUsuario(username);
   }

   pokemonStatus(pokemon: any){
    let pokes_vistos = this.usuariosService.getPokemonsVistos(localStorage.getItem('token'));
    for(let i = 0; i<pokes_vistos.length;i++){
      if(pokes_vistos[i].id==pokemon.id){
        this.lvl=pokes_vistos[i].lvl;
        return true;
      }
      else{
        this.lvl='??';
      }
    }
    return false;
   }

   getPokemon(pokemon: any){
    for(let i=0;i<this.allPokemons.length;i++){
      if(this.allPokemons[i].id==pokemon.id){
        this.allPokemons[i]=pokemon;
      }
    }
    this.router.navigate([`pokemon/${pokemon.id}`])
  }
}
