import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogpostV2Component } from './blogpost-v2.component';

describe('BlogpostV2Component', () => {
  let component: BlogpostV2Component;
  let fixture: ComponentFixture<BlogpostV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogpostV2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogpostV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
