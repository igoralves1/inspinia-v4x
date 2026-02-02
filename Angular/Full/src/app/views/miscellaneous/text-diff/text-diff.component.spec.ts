import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextDiffComponent } from './text-diff.component';

describe('TextDiffComponent', () => {
  let component: TextDiffComponent;
  let fixture: ComponentFixture<TextDiffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextDiffComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextDiffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
