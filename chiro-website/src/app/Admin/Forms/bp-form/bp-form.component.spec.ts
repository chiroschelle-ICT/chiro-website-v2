import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BPFormComponent } from './bp-form.component';

describe('BPFormComponent', () => {
  let component: BPFormComponent;
  let fixture: ComponentFixture<BPFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BPFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BPFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
