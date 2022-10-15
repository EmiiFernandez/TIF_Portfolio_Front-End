import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoAzulComponent } from './logo-azul.component';

describe('LogoAzulComponent', () => {
  let component: LogoAzulComponent;
  let fixture: ComponentFixture<LogoAzulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoAzulComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoAzulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
