import { TestBed } from '@angular/core/testing';

import { ChartapiService } from './chartapi.service';

describe('ChartapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChartapiService = TestBed.get(ChartapiService);
    expect(service).toBeTruthy();
  });
});
