import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GpFormComponent } from './gp-form.component';

describe('GpFormComponent', () => {
  let component: GpFormComponent;
  let fixture: ComponentFixture<GpFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GpFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
