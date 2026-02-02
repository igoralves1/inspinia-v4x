import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherPluginsComponent } from './other-plugins.component';

describe('OtherPluginsComponent', () => {
  let component: OtherPluginsComponent;
  let fixture: ComponentFixture<OtherPluginsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtherPluginsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherPluginsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
