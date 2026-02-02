import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableWithSortComponent } from './table-with-sort.component';

describe('TableWithSortComponent', () => {
  let component: TableWithSortComponent;
  let fixture: ComponentFixture<TableWithSortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableWithSortComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableWithSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
