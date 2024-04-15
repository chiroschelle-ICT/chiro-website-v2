import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeidingPageComponent } from './leiding-page.component';

describe('LeidingPageComponent', () => {
  let component: LeidingPageComponent;
  let fixture: ComponentFixture<LeidingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeidingPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeidingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
