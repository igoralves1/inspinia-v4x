import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutlookNavComponent } from './outlook-nav.component';

describe('OutlookNavComponent', () => {
  let component: OutlookNavComponent;
  let fixture: ComponentFixture<OutlookNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutlookNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutlookNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
