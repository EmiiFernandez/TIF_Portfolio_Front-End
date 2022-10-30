import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsobremiComponent } from './newsobremi.component';

describe('NewsobremiComponent', () => {
  let component: NewsobremiComponent;
  let fixture: ComponentFixture<NewsobremiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsobremiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsobremiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
