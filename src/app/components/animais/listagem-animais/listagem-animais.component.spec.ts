import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemAnimaisComponent } from './listagem-animais.component';

describe('ListagemAnimaisComponent', () => {
  let component: ListagemAnimaisComponent;
  let fixture: ComponentFixture<ListagemAnimaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListagemAnimaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemAnimaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
