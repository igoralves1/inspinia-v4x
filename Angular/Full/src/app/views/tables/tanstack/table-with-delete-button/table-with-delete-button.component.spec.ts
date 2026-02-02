import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableWithDeleteButtonComponent } from './table-with-delete-button.component';

describe('TableWithDeleteButtonComponent', () => {
  let component: TableWithDeleteButtonComponent;
  let fixture: ComponentFixture<TableWithDeleteButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableWithDeleteButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableWithDeleteButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
