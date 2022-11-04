import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import {Pokemon, PokemonService} from '../services/pokemon.service';

@Injectable({
  providedIn: 'root'
})
export class DraggablePokemonService {

  availablePokemon: Pokemon[] = [];
  availablePokemon$: BehaviorSubject<Pokemon[]> = new BehaviorSubject<Pokemon[]>([]);
  selectedPokemon: Pokemon[] = [];
  selectedPokemon$: BehaviorSubject<Pokemon[]> = new BehaviorSubject<Pokemon[]>([]);
  draggedPokemon: Pokemon | null = null;

  constructor(public pokemonService: PokemonService) {
    pokemonService.pokemonPage().subscribe(pokemon => this.setAvailablePokemon(pokemon));
  }

  // Available Pokemon
  availablePokemonSubject(): BehaviorSubject<Pokemon[]> {
    return this.availablePokemon$;
  }

  setAvailablePokemon(pokemonList: Pokemon[]) {
    this.availablePokemon = pokemonList;
    this.broadcastAvailablePokemon();
  }

  broadcastAvailablePokemon(): void {
    this.availablePokemon$.next(this.availablePokemon);
  }

  addAvailablePokemon(pokemon: Pokemon): void {
    this.availablePokemon.push(pokemon);
    this.broadcastAvailablePokemon();
  }

  removeAvailablePokemon(pokemon: Pokemon): void {
    const index = this.availablePokemon.findIndex((availablePokemon) => availablePokemon.id === pokemon.id);
    this.availablePokemon.splice(index, 1);
    this.broadcastAvailablePokemon();
  }

  dropAvailablePokemon(): void {
    if (! this.draggedPokemon) return;

    this.addAvailablePokemon(this.draggedPokemon);
    this.removeSelectedPokemon(this.draggedPokemon);
    this.clearDraggedPokemon();
  }
  // End of Available Pokemon

  // Selected Pokemon
  selectedPokemonSubject(): BehaviorSubject<Pokemon[]> {
    return this.selectedPokemon$;
  }

  broadcastSelectedPokemon(): void {
    this.selectedPokemon$.next(this.selectedPokemon);
  }

  addSelectedPokemon(pokemon: Pokemon): void {
    this.selectedPokemon.push(pokemon);
    this.broadcastSelectedPokemon();
  }

  removeSelectedPokemon(pokemon: Pokemon): void {
    const index = this.selectedPokemon.findIndex((selectedPokemon) => selectedPokemon.id === pokemon.id);
    this.selectedPokemon.splice(index, 1);
    this.broadcastSelectedPokemon();
  }

  dropSelectedPokemon(): void {
    if (! this.draggedPokemon) return;

    this.addSelectedPokemon(this.draggedPokemon);
    this.removeAvailablePokemon(this.draggedPokemon);
    this.clearDraggedPokemon();
  }
  // End of Selected Pokemon

  // Dragged Pokemon
  setDraggedPokemon(pokemon: Pokemon | null): void {
    this.draggedPokemon = pokemon;
  }

  clearDraggedPokemon(): void {
    this.setDraggedPokemon(null);
  }
}
