import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasonryCardComponent } from './masonry-card.component';

describe('MasonryCardComponent', () => {
  let component: MasonryCardComponent;
  let fixture: ComponentFixture<MasonryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasonryCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasonryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
