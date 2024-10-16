import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BpListComponent } from './bp-list.component';

describe('BpListComponent', () => {
  let component: BpListComponent;
  let fixture: ComponentFixture<BpListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BpListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BpListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
