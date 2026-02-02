import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashboard3Component } from './dashboard-3.component';

describe('Dashboard3Component', () => {
  let component: Dashboard3Component;
  let fixture: ComponentFixture<Dashboard3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dashboard3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dashboard3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
