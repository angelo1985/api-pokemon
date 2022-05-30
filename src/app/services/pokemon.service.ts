import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from '../interfaces/pokemon';

@Injectable({ providedIn: 'root' })
export class PokemonService {
  private baseurl: string = 'https://pokeapi.co/api/v2';
  constructor(private httpClient: HttpClient) {}

  getPokemon(nombrePokemon: string): Observable<Pokemon> {
    return this.httpClient.get<Pokemon>(
      `${this.baseurl}/pokemon/${nombrePokemon}`
    );
  }
}
