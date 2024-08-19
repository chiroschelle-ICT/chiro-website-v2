import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammaPageComponent } from './programma-page.component';

describe('ProgrammaPageComponent', () => {
  let component: ProgrammaPageComponent;
  let fixture: ComponentFixture<ProgrammaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgrammaPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProgrammaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
