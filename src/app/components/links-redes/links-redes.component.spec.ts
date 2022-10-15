import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksRedesComponent } from './links-redes.component';

describe('LinksRedesComponent', () => {
  let component: LinksRedesComponent;
  let fixture: ComponentFixture<LinksRedesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinksRedesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinksRedesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
