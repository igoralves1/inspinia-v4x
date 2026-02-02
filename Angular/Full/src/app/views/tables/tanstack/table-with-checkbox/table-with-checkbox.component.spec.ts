import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableWithCheckboxComponent } from './table-with-checkbox.component';

describe('TableWithCheckboxComponent', () => {
  let component: TableWithCheckboxComponent;
  let fixture: ComponentFixture<TableWithCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableWithCheckboxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableWithCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
