import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveFaviconComponent } from './live-favicon.component';

describe('LiveFaviconComponent', () => {
  let component: LiveFaviconComponent;
  let fixture: ComponentFixture<LiveFaviconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiveFaviconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiveFaviconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
