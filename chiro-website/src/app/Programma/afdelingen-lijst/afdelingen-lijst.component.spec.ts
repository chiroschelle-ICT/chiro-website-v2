import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfdelingenLijstComponent } from './afdelingen-lijst.component';

describe('AfdelingenLijstComponent', () => {
  let component: AfdelingenLijstComponent;
  let fixture: ComponentFixture<AfdelingenLijstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AfdelingenLijstComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AfdelingenLijstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
