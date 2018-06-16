import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemEspeciesComponent } from './listagem-especies.component';

describe('ListagemEspeciesComponent', () => {
  let component: ListagemEspeciesComponent;
  let fixture: ComponentFixture<ListagemEspeciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListagemEspeciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemEspeciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
