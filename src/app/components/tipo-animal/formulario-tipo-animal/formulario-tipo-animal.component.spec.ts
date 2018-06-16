import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioTipoAnimalComponent } from './formulario-tipo-animal.component';

describe('FormularioTipoAnimalComponent', () => {
  let component: FormularioTipoAnimalComponent;
  let fixture: ComponentFixture<FormularioTipoAnimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioTipoAnimalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioTipoAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
