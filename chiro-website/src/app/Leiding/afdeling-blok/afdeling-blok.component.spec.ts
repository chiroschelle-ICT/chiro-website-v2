import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfdelingBlokComponent } from './afdeling-blok.component';

describe('AfdelingBlokComponent', () => {
  let component: AfdelingBlokComponent;
  let fixture: ComponentFixture<AfdelingBlokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AfdelingBlokComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AfdelingBlokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
