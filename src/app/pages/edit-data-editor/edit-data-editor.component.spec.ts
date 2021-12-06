import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDataEditorComponent } from './edit-data-editor.component';

describe('EditDataEditorComponent', () => {
  let component: EditDataEditorComponent;
  let fixture: ComponentFixture<EditDataEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDataEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDataEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
