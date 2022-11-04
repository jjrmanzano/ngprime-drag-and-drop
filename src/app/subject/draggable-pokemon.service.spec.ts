import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { DraggablePokemonService } from './draggable-pokemon.service';

describe('DraggablePokemonService', () => {
  let service: DraggablePokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(DraggablePokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
