import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeidingCardV2Component } from './leiding-card-v2.component';

describe('LeidingCardV2Component', () => {
  let component: LeidingCardV2Component;
  let fixture: ComponentFixture<LeidingCardV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeidingCardV2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeidingCardV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
