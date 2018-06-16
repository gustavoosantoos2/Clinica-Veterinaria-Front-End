import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAnimaisComponent } from './formulario-animais.component';

describe('FormularioAnimaisComponent', () => {
  let component: FormularioAnimaisComponent;
  let fixture: ComponentFixture<FormularioAnimaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioAnimaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioAnimaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
