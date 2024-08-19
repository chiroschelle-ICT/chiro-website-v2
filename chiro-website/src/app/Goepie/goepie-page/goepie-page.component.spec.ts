import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoepiePageComponent } from './goepie-page.component';

describe('GoepiePageComponent', () => {
  let component: GoepiePageComponent;
  let fixture: ComponentFixture<GoepiePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoepiePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GoepiePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
