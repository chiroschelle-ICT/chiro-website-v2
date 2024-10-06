import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GbListComponent } from './gb-list.component';

describe('GbListComponent', () => {
  let component: GbListComponent;
  let fixture: ComponentFixture<GbListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GbListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GbListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
