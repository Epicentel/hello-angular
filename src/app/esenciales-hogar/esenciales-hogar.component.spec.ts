import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsencialesHogarComponent } from './esenciales-hogar.component';

describe('EsencialesHogarComponent', () => {
  let component: EsencialesHogarComponent;
  let fixture: ComponentFixture<EsencialesHogarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EsencialesHogarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsencialesHogarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
