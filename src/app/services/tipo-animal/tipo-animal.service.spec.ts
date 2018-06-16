import { TestBed, inject } from '@angular/core/testing';

import { TipoAnimalService } from './tipo-animal.service';

describe('TipoAnimalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TipoAnimalService]
    });
  });

  it('should be created', inject([TipoAnimalService], (service: TipoAnimalService) => {
    expect(service).toBeTruthy();
  }));
});
