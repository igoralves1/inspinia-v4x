import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardsComponent } from './wizards.component';

describe('WizardComponent', () => {
  let component: WizardsComponent;
  let fixture: ComponentFixture<WizardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WizardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WizardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
