import { Component, OnInit } from '@angular/core';
import { Pokemon, PokemonService } from '../services/pokemon.service';
import { Observable, of } from "rxjs";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  pokemonList$: Observable<Pokemon[]> = of([]);

  constructor(public pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonList$ = this.pokemonService.pokemonPage();
  }

}
