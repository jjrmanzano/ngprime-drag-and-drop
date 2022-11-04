import { Component, OnInit } from '@angular/core';
import { Observable, of} from "rxjs";
import { Pokemon } from '../../pokemon.service';
import { DraggablePokemonService } from '../draggable-pokemon.service';

@Component({
  selector: 'app-subject-child',
  templateUrl: './subject-child.component.html',
  styleUrls: ['./subject-child.component.scss']
})
export class SubjectChildComponent implements OnInit {

  selectedPokemon$: Observable<Pokemon[]> = of([]);

  constructor(public draggablePokemonService: DraggablePokemonService) { }

  ngOnInit(): void {
    this.selectedPokemon$ = this.draggablePokemonService.selectedPokemonSubject().asObservable();
  }

  drop(_event: DragEvent): void {
    this.draggablePokemonService.dropSelectedPokemon();
  }

  dragStart(_event: DragEvent, pokemon: Pokemon): void {
    this.draggablePokemonService.setDraggedPokemon(pokemon);
  }

  dragEnd(_event: DragEvent): void {
    this.draggablePokemonService.clearDraggedPokemon();
  }
}
