import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksSeccionesComponent } from './links-secciones.component';

describe('LinksSeccionesComponent', () => {
  let component: LinksSeccionesComponent;
  let fixture: ComponentFixture<LinksSeccionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinksSeccionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinksSeccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
