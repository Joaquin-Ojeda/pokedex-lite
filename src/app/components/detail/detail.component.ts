import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  @Input() pokemon: any;
  lvl: any;

  constructor(private usuariosService: UsuariosService, private router: Router){}

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
}
