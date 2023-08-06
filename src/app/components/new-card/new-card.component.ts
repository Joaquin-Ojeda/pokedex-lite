import { Component } from '@angular/core';
import { Pokemons } from 'src/app/data/pokemons-data';

@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.css']
})
export class NewCardComponent {


  addNewPokemon(){
    console.log(typeof(Pokemons[0].types));
  }
}
