import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovedadesHogarComponent } from './novedades-hogar.component';

describe('NovedadesHogarComponent', () => {
  let component: NovedadesHogarComponent;
  let fixture: ComponentFixture<NovedadesHogarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NovedadesHogarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovedadesHogarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
