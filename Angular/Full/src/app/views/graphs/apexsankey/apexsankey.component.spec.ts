import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApexsankeyComponent } from './apexsankey.component';

describe('ApexsankeyComponent', () => {
  let component: ApexsankeyComponent;
  let fixture: ComponentFixture<ApexsankeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApexsankeyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApexsankeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
