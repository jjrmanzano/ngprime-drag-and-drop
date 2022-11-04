import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from '../../pokemon.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {

  @Input() selectedPokemon!: Pokemon[];
  @Output() onPokemonDropped: EventEmitter<string> = new EventEmitter();

  drop(_event: DragEvent): void {
    this.onPokemonDropped.emit();
  }

}
