import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SweetAlertsComponent } from './sweet-alerts.component';

describe('SweetAlertsComponent', () => {
  let component: SweetAlertsComponent;
  let fixture: ComponentFixture<SweetAlertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SweetAlertsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SweetAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
