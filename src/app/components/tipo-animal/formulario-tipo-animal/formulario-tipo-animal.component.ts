import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TipoAnimal } from '../../../model/tipo-animal.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TipoAnimalService } from 'src/app/services/tipo-animal/tipo-animal.service';

@Component({
  selector: 'app-formulario-tipo-animal',
  templateUrl: './formulario-tipo-animal.component.html',
  styleUrls: ['./formulario-tipo-animal.component.css']
})
export class FormularioTipoAnimalComponent implements OnInit {
  novoTipo: TipoAnimal;
  tiposExistentes: TipoAnimal[];
  formTipoAnimal: FormGroup;

  @Output()
  tipoAnimalAdicionado: EventEmitter<TipoAnimal> = new EventEmitter<TipoAnimal>();

  constructor(
    private tipoAnimalService: TipoAnimalService
  ) { }

  ngOnInit() {
    this.novoTipo = new TipoAnimal();

    this.formTipoAnimal = new FormGroup({
      acronimo: new FormControl('',
        [Validators.required, Validators.maxLength(3)]),

      nome: new FormControl('',
        [Validators.required, Validators.minLength(3)]),

      descricao: new FormControl()
    });

    this.carregarTiposExistentes();
  }

  carregarTiposExistentes() {
    this.tipoAnimalService.getTiposAnimais().subscribe(
      success => {
        this.tiposExistentes = success;
      },
      error => {
        console.log(error);
      }
    );
  }

  adicionarTipo() {
    this.novoTipo = this.formTipoAnimal.value;

    if (this.tiposExistentes.some(e => e.acronimo === this.novoTipo.acronimo)) {
      this.formTipoAnimal.controls['acronimo'].setErrors({ 'existing': true });
    } else {
      this.formTipoAnimal.controls['acronimo'].updateValueAndValidity();

      if (this.formTipoAnimal.valid === false) {
        return;
      }
    }

    this.tipoAnimalAdicionado.emit(this.novoTipo);
  }
}
