import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableWithSearchComponent } from './table-with-search.component';

describe('TableWithSearchComponent', () => {
  let component: TableWithSearchComponent;
  let fixture: ComponentFixture<TableWithSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableWithSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableWithSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
