import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdleTimerComponent } from './idle-timer.component';

describe('IdleTimerComponent', () => {
  let component: IdleTimerComponent;
  let fixture: ComponentFixture<IdleTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdleTimerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdleTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
