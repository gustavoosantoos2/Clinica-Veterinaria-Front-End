import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioEspeciesComponent } from './formulario-especies.component';

describe('FormularioEspeciesComponent', () => {
  let component: FormularioEspeciesComponent;
  let fixture: ComponentFixture<FormularioEspeciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioEspeciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioEspeciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
