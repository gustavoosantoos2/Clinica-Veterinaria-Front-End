import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemTipoAnimalComponent } from './listagem-tipo-animal.component';

describe('ListagemTipoAnimalComponent', () => {
  let component: ListagemTipoAnimalComponent;
  let fixture: ComponentFixture<ListagemTipoAnimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListagemTipoAnimalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemTipoAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
