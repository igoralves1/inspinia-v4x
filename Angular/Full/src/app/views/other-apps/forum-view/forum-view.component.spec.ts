import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumViewComponent } from './forum-view.component';

describe('ForumViewComponent', () => {
  let component: ForumViewComponent;
  let fixture: ComponentFixture<ForumViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForumViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForumViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
