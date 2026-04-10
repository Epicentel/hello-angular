import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticulosBellezaComponent } from './articulos-belleza.component';

describe('ArticulosBellezaComponent', () => {
  let component: ArticulosBellezaComponent;
  let fixture: ComponentFixture<ArticulosBellezaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArticulosBellezaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticulosBellezaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
