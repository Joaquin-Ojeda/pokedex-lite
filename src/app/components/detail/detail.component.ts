import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemons } from 'src/app/data/pokemons-data';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  @Input() pokemon: any;
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

  //FUNCION PARA CHECKEAR SI EL LEVEL INGRESADO POR EL USUARIO ES VALIDO
  checkLevel(){

    if(this.lvl<0 || this.lvl>100 || this.lvl==null){

    }
    else{
      this.usuariosService.setPokemonsVistos(localStorage.getItem('token'), {
        id: this.pokemon.id,
        lvl: this.lvl
      })
      this.pokemon.found.foundBool=true;
      this.pokemon.found.lvl=this.lvl;
    }
    
  }

  //FUNCION PARA ACTIVAR EL MODO EDICION
  changeEditMode(){
    this.isInEditMode = !this.isInEditMode;
  }

  //GUARDAR CAMBIOS AL POKEMON
  changePokemon(){
      if(this.name!=null && this.name!=''){
        this.pokemon.name = this.name;
      }
      if(this.types!=null && this.types!=''){
        let type_aux;
        type_aux={
          name: this.types
        }
        this.pokemon.types.push({type: type_aux});
        this.types='';
      }
      if(this.evolutions!=null && this.evolutions!=''){
        this.pokemon.evolutions[0] = this.evolutions;
      }
      this.checkLevel();
      this.loadPokemon(this.pokemon);
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
  
  //CARGA DEL POKEMON
  loadPokemon(pokemon: any){
    for(let i=0; i<Pokemons.length; i++){
      if( Pokemons[i].id == pokemon.id ){
        Pokemons[i] = pokemon;
      }
    }
  }

  //REMOVER EL TIPO DE LA LISTA DE TIPOS DEL POKEMON
  removeType(name: string){

    if(window.confirm("Are you sure you want to eliminate this type?"))
      for(let i=0;i<this.pokemon.types.length;i++){
        if(this.pokemon.types[i].type.name==name){
          this.pokemon.types.splice(i,1);
        }
    }
  }

  back(){
    this.router.navigate(['dashboard']);
  }
  backToMyPokedex(){
    this.router.navigate(['my-pokedex']);
  }
  
}
