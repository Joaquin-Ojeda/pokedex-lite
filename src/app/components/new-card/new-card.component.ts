import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemons } from 'src/app/data/pokemons-data';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';

@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.css']
})
export class NewCardComponent {

  name: any;
  lvl: any;

  constructor(private usuariosService: UsuariosService, private router: Router){}

  //FUNCION PARA VERIFICAR EL INGRESO DE DATOS Y GUARDAR AL POKEMON NUEVO COMO PARTE DEL EQUIPO
  addNewPokemon(){
    for(let poke of Pokemons){
      if(poke.name==this.name){
        let poke_found=this.usuariosService.getPokemonsVistos(localStorage.getItem('token'))
        for(let poke_aux of poke_found){
          if(poke_aux.id==poke.id){
            window.alert("Pokemon alredy found");
            return
          }
        };
        if(this.lvl==null || this.lvl<=0 || this.lvl >100){
          window.alert("Level is not valid");
          return
        }else{
          this.usuariosService.setPokemonsVistos(localStorage.getItem('token'), {
            id: poke.id,
            lvl: this.lvl
          })
          this.router.navigate(['my-pokedex']);
          return
        }
      }
    };
    window.alert("Pokemon doesn't exist");
    return
  }

  back(){
    this.router.navigate(['dashboard']);
  }

}
