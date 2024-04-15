import { TestBed } from '@angular/core/testing';

import { LeidingService } from './leiding.service';

describe('LeidingService', () => {
  let service: LeidingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeidingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
