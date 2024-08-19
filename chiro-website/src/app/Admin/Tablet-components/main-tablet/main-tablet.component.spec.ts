import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTabletComponent } from './main-tablet.component';

describe('MainTabletComponent', () => {
  let component: MainTabletComponent;
  let fixture: ComponentFixture<MainTabletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainTabletComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainTabletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
