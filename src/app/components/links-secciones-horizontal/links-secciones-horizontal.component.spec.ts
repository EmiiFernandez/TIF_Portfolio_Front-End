import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksSeccionesHorizontalComponent } from './links-secciones-horizontal.component';

describe('LinksSeccionesHorizontalComponent', () => {
  let component: LinksSeccionesHorizontalComponent;
  let fixture: ComponentFixture<LinksSeccionesHorizontalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinksSeccionesHorizontalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinksSeccionesHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
