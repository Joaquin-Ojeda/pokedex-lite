import { TestBed } from '@angular/core/testing';

import { EvolutionApiService } from './evolution-api.service';

describe('EvolutionApiService', () => {
  let service: EvolutionApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EvolutionApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
