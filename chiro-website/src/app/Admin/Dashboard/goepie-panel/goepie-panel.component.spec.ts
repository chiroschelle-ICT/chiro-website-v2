import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoepiePanelComponent } from './goepie-panel.component';

describe('GoepiePanelComponent', () => {
  let component: GoepiePanelComponent;
  let fixture: ComponentFixture<GoepiePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoepiePanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GoepiePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
