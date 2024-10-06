import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GpListComponent } from './gp-list.component';

describe('GpListComponent', () => {
  let component: GpListComponent;
  let fixture: ComponentFixture<GpListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GpListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GpListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
