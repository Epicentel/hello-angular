import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipoFitComponent } from './equipo-fit.component';

describe('EquipoFitComponent', () => {
  let component: EquipoFitComponent;
  let fixture: ComponentFixture<EquipoFitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipoFitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipoFitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
