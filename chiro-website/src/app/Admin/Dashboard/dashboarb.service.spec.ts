import { TestBed } from '@angular/core/testing';

import { DashboarbService } from './dashboarb.service';

describe('DashboarbService', () => {
  let service: DashboarbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboarbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
