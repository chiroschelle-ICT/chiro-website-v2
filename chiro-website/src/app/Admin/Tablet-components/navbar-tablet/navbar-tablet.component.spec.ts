import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarTabletComponent } from './navbar-tablet.component';

describe('NavbarTabletComponent', () => {
  let component: NavbarTabletComponent;
  let fixture: ComponentFixture<NavbarTabletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarTabletComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavbarTabletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
