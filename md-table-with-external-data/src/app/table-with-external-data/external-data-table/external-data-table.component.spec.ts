import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalDataTableComponent } from './external-data-table.component';

describe('ExternalDataTableComponent', () => {
  let component: ExternalDataTableComponent;
  let fixture: ComponentFixture<ExternalDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternalDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
