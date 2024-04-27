import { TestBed } from '@angular/core/testing';

import { ProgrammaService } from './programma.service';

describe('ProgrammaService', () => {
  let service: ProgrammaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgrammaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
