import { TestBed } from '@angular/core/testing';

import { TraveldbService } from './traveldb.service';

describe('TraveldbService', () => {
  let service: TraveldbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TraveldbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
