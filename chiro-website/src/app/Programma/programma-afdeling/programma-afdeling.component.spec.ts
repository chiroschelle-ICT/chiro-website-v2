import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammaAfdelingComponent } from './programma-afdeling.component';

describe('ProgrammaAfdelingComponent', () => {
  let component: ProgrammaAfdelingComponent;
  let fixture: ComponentFixture<ProgrammaAfdelingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgrammaAfdelingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProgrammaAfdelingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
