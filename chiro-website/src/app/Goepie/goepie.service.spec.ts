import { TestBed } from '@angular/core/testing';

import { GoepieService } from './goepie.service';

describe('GoepieService', () => {
  let service: GoepieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoepieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
