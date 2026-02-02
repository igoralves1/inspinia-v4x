import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextEditorsComponent } from './text-editors.component';

describe('TextEditorsComponent', () => {
  let component: TextEditorsComponent;
  let fixture: ComponentFixture<TextEditorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextEditorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextEditorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
