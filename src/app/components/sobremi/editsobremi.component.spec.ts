import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditsobremiComponent } from './editsobremi.component';

describe('EditsobremiComponent', () => {
  let component: EditsobremiComponent;
  let fixture: ComponentFixture<EditsobremiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditsobremiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditsobremiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
