import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammaPanelComponent } from './programma-panel.component';

describe('ProgrammaPanelComponent', () => {
  let component: ProgrammaPanelComponent;
  let fixture: ComponentFixture<ProgrammaPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgrammaPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProgrammaPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
