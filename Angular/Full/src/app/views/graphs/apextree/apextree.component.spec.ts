import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApextreeComponent } from './apextree.component';

describe('ApextreeComponent', () => {
  let component: ApextreeComponent;
  let fixture: ComponentFixture<ApextreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApextreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApextreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
