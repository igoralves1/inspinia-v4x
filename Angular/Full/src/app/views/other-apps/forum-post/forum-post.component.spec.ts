import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumPostComponent } from './forum-post.component';

describe('ForumPostComponent', () => {
  let component: ForumPostComponent;
  let fixture: ComponentFixture<ForumPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForumPostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForumPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
