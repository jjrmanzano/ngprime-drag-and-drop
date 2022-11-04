import { Component, OnInit } from '@angular/core';

import { DraggablePokemonService } from '../draggable-pokemon.service';
import { Observable, of } from 'rxjs';
import { Pokemon } from '../../pokemon.service';

@Component({
  selector: 'app-subject-ancestor',
  templateUrl: './subject-ancestor.component.html',
  styleUrls: ['./subject-ancestor.component.scss']
})
export class SubjectAncestorComponent implements OnInit {

  availablePokemon$: Observable<Pokemon[]> = of([]);

  constructor(public draggablePokemonService: DraggablePokemonService) { }

  ngOnInit(): void {
    this.availablePokemon$ = this.draggablePokemonService.availablePokemonSubject().asObservable();
  }

  drop(_event: DragEvent): void {
    this.draggablePokemonService.dropAvailablePokemon();
  }

  dragStart(_event: DragEvent, pokemon: Pokemon): void {
    this.draggablePokemonService.setDraggedPokemon(pokemon);
  }

  dragEnd(_event: DragEvent): void {
    this.draggablePokemonService.clearDraggedPokemon();
  }

}
