import { Injectable } from '@angular/core';
import { Usuarios } from 'src/app/data/usuarios-data';
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor() { }

  getUsuarios(): Usuario[]{
    return Usuarios;
  }

  getLogin(): any[]{
    let login: any[]=[];
    for(let user of Usuarios){

      login.push({
        name: user.name,
        password: user.password
      });

    }
    return login;
  }

  getUsuario(username: any): any{
    return Usuarios.find(element => element.name == username);
  }

  getPokemonsVistos(username: any): any[]{
    return this.getUsuario(username).pokemons_vistos;
  }

  //SIMULA LA ESCRITURA DENTRO DE LA API
  setPokemonsVistos(username: any, pokemon: any){
    let poke_aux = this.getPokemonsVistos(username).find(x=>x.id==pokemon.id);
    if( poke_aux == null){
      this.getPokemonsVistos(username).push(pokemon);
    }
    else{
      for(let i=0;i<this.getPokemonsVistos(username).length;i++){
        if(pokemon.id==this.getPokemonsVistos(username)[i].id){
          this.getPokemonsVistos(username).splice(i, 1);
          this.getPokemonsVistos(username).push(pokemon);
        }
      }
    }
  }
}
