import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogpostV3Component } from './blogpost-v3.component';

describe('BlogpostV3Component', () => {
  let component: BlogpostV3Component;
  let fixture: ComponentFixture<BlogpostV3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogpostV3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogpostV3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
