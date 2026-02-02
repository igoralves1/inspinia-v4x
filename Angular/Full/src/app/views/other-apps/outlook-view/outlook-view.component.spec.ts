import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutlookViewComponent } from './outlook-view.component';

describe('OutlookViewComponent', () => {
  let component: OutlookViewComponent;
  let fixture: ComponentFixture<OutlookViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutlookViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutlookViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
