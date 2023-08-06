import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Evolutions } from 'src/app/data/evolutions-data';
import { Pokemons } from 'src/app/data/pokemons-data';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  @Input() pokemon: any;
  poke_name: string='';
  lvl: any;
  name: any;
  types: any;
  abilities:any;
  evolutions: any;
  isInEditMode: boolean=false;

  constructor(private usuariosService: UsuariosService, private router: Router){
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(){

  }

  checkFound(){
    if(this.lvl<0 || this.lvl>100 || this.lvl==null){
      window.alert("Please write a valid lvl for the pokemon")
    }
    else{
      this.usuariosService.setPokemonsVistos(localStorage.getItem('token'), {
        id: this.pokemon.id,
        lvl: this.lvl
      })
      this.router.navigate(['dashboard']);
    }
  }

  changeEditMode(){
    this.isInEditMode = !this.isInEditMode;
  }

  changePokemon(){
      if(this.name!=null && this.name!=''){
        this.pokemon.name = this.name;
      }
      if(this.types!=null && this.types!=''){
        this.pokemon.types[0].type.name = this.types;
      }
      if(this.abilities!=null && this.abilities!=''){
        this.pokemon.abilities[0].ability.name = this.abilities;
      }
      if(this.evolutions!=null && this.evolutions!=''){
        this.pokemon.evolutions[0] = this.evolutions;
      }
      this.changeEditMode();
  }

  redirectTo(name: string){
    let id;
    for(let poke of Pokemons){
      if(poke.name==name){
        id=poke.id;
      }
    };

    this.router.navigate([`pokemon/${id}`]);
  }
  
}
