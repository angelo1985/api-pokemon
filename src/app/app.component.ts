import { Component, VERSION } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Pokemon } from './interfaces/pokemon';
import { PokemonService } from './services/pokemon.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  searchField: FormControl;
  result: Pokemon;
  arrayPokemon: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) {
    this.searchField = new FormControl('');
  }

  onChange(e: Event) {
    console.log('evento ' + this.searchField.value);
    this.pokemonService
      .getPokemon(this.searchField.value)
      .subscribe((respuesta: Pokemon) => {
        this.result = respuesta;
        console.log(this.result);
        this.arrayPokemon.push(this.result);
      });
  }

  borrarPokemons() {
    this.arrayPokemon = [];
    this.result = undefined;
  }
}
