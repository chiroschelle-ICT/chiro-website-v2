import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrFormComponent } from './pr-form.component';

describe('PrFormComponent', () => {
  let component: PrFormComponent;
  let fixture: ComponentFixture<PrFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
