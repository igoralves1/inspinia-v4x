import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableWithFiltersComponent } from './table-with-filters.component';

describe('TableWithFiltersComponent', () => {
  let component: TableWithFiltersComponent;
  let fixture: ComponentFixture<TableWithFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableWithFiltersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableWithFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
