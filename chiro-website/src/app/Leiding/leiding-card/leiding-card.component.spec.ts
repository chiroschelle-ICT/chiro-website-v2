import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeidingCardComponent } from './leiding-card.component';

describe('LeidingCardComponent', () => {
  let component: LeidingCardComponent;
  let fixture: ComponentFixture<LeidingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeidingCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeidingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
