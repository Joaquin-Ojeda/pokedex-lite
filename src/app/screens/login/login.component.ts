import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuariosService } from './../../services/usuarios/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  error_status: boolean=false;
  error_msg: string='';
  loginForm = new FormGroup({
    usuario: new FormControl('', Validators.required),
    password : new FormControl('', Validators.required)
  });

  constructor(private usuariosService: UsuariosService, private router: Router){}

  ngOnInit(){
    this.checkLocalStorage();
  }
  //REVISA SI YA HAY ALGUIEN LOGEADO GUARDADO EN EL LOCAL STORAGE
  checkLocalStorage(){
    if(localStorage.getItem('token')){
      this.router.navigate(['dashboard']);
    }
  }

  //FUNCION PARA EL BOTON DE LOGIN
  onLogin(form: any){
    try {
      const usuario_result = this.usuariosService.getLogin().find( element => element.name == form.usuario);
      if(usuario_result.password == form.password){
        localStorage.setItem('token', this.usuariosService.getUsuario(usuario_result.name).name);
        this.router.navigate(['dashboard']);
      }
      else{
        throw new Error();
      }
    } catch (error) {
      if(form.usuario == '' || form.password == ''){
        this.error_msg = "Please complete the required inputs";
      }
      else{
        this.error_msg = "Username/Password incorrect";
      }
      this.error_status = true;
    }
  }


}
