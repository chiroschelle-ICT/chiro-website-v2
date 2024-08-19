import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeidingCardV3Component } from './leiding-card-v3.component';

describe('LeidingCardV3Component', () => {
  let component: LeidingCardV3Component;
  let fixture: ComponentFixture<LeidingCardV3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeidingCardV3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeidingCardV3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
