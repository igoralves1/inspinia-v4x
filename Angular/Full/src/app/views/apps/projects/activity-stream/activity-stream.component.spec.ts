import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityStreamComponent } from './activity-stream.component';

describe('ActivityStreamComponent', () => {
  let component: ActivityStreamComponent;
  let fixture: ComponentFixture<ActivityStreamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivityStreamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivityStreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
