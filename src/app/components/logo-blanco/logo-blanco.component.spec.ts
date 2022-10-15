import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoBlancoComponent } from './logo-blanco.component';

describe('LogoBlancoComponent', () => {
  let component: LogoBlancoComponent;
  let fixture: ComponentFixture<LogoBlancoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoBlancoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoBlancoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
