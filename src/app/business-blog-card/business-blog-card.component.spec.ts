import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessBlogCardComponent } from './business-blog-card.component';

describe('BusinessBlogCardComponent', () => {
  let component: BusinessBlogCardComponent;
  let fixture: ComponentFixture<BusinessBlogCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessBlogCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessBlogCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
