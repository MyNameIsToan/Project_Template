import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataAccessRightComponent } from './data-access-right.component';

describe('DataAccessRightComponent', () => {
  let component: DataAccessRightComponent;
  let fixture: ComponentFixture<DataAccessRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataAccessRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataAccessRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
