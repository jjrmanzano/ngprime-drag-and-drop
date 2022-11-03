import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface Pokemon {
  id: string;
  name: string;
  url: string;
  imageUrl: string;
}

interface PokemonPage {
  results: Pokemon[];
}

const IMAGE_URL_TEMPLATE = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{{POKEMON_ID}}.png';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private readonly POKE_API_URL = 'https://pokeapi.co/api/v2';
  private readonly POKEMON_PATH = '/pokemon';
  private readonly POKEMON_URL = `${this.POKE_API_URL}${this.POKEMON_PATH}`;

  constructor(public http: HttpClient) { }

  pokemonPage(): Observable<Pokemon[]> {
    return this.http.get<PokemonPage>(this.POKEMON_URL)
      .pipe(
        map(this.extractResults),
        map(this.determineIdAndImage)
      );
  }

  private extractResults(page: PokemonPage): Pokemon[] {
    return page.results;
  }

  private determineIdAndImage(list: Pokemon[]): Pokemon[] {
    return list.map(pokemon => {
      const pokemonUrlWithoutTrailingSlash = pokemon.url.slice(0, -1);
      const lastSlashIndex = pokemonUrlWithoutTrailingSlash.lastIndexOf('/');
      const pokemonId = pokemonUrlWithoutTrailingSlash.substring(lastSlashIndex + 1);

      return {
        ...pokemon,
        id: pokemonId,
        imageUrl: IMAGE_URL_TEMPLATE.replace('{{POKEMON_ID}}', pokemonId)
      }
    });
  }
}
