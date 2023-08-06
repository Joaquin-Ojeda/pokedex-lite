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

  addNewPokemon(){

    for(let poke of Pokemons){
      if(poke.name==this.name){
        let poke_found=this.usuariosService.getPokemonsVistos(localStorage.getItem('token'))
        console.log(poke_found);
        for(let poke_aux of poke_found){
          if(poke_aux.id==poke.id){
            window.alert("Pokemon alredy found");
            return
          }
        };
        this.usuariosService.setPokemonsVistos(localStorage.getItem('token'), {
          id: poke.id,
          lvl: this.lvl
        })
        this.router.navigate(['dashboard']);
        return
      }
    };
    window.alert("Pokemon doesn't exist");
    return
  }

  back(){
    this.router.navigate(['dashboard']);
  }

}
