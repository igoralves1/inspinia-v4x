import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinBoardComponent } from './pin-board.component';

describe('PinBoardComponent', () => {
  let component: PinBoardComponent;
  let fixture: ComponentFixture<PinBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PinBoardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PinBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
